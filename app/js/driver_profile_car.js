// Json read
const formData = new FormData();
// Selectbox json read
var brandSelect   = document.getElementById('BrandId');
var modelSelect   = document.getElementById('ModelId');

modelSelect.addEventListener('change',function(){
	formData.append("Brand",this.options[this.selectedIndex].text);
			
})
let myObject = {
	init:function(){
		var that = this;
		this.loadCountry();
		
		brandSelect.addEventListener('change',function(){
			 that.loadCarModel(this.value);
			 modelSelect.innerHTML= `` ;
			 formData.append("Model",this.options[this.selectedIndex].text);
		})

	},
	loadCountry:function(){
		let xhr = new XMLHttpRequest();
		xhr.open('GET','../json/brand.json',true);
		xhr.onload = function(){
			var carBrand = JSON.parse(xhr.responseText);
			carBrand.forEach((brand) => {
				brandSelect.innerHTML += `<option value='${brand.brandId}'>${brand.name}</option>`;
			});
		}
		xhr.send()
	},
	loadCarModel:function(id){
		let xhr = new XMLHttpRequest();
		xhr.open('GET','../json/model.json?brandId='+id,true);
		xhr.onload = function(){
			var carBrand = JSON.parse(xhr.responseText);
			for(var i=0; i<=carBrand.length; i++){
				if(carBrand[i].brandId == brandSelect.value){
					modelSelect.innerHTML += `<option value='${carBrand[i].brandId}'>${carBrand[i].name}</option>`;
					
				}else{
					modelSelect.innerHTML += ``
				}
			}

			

		}
		xhr.send()
	}
}

myObject.init();

// // Selectbox json read end



var fileIdCounter = 0,
// bu senin en son resultindi hansiki adam sildi yukledi ve sair amma 
// burda artiq 4hazir sekil var 
    filesToUpload = [];

    var preview = document.querySelector('#preview');
	var files = document.querySelector('#CarPhotos').files;

function onChange(input) {
    console.log(input.files.length);
    console.log(input);
    // bax gordun sene element ne qaytarir ? sen backend gonderende de eyni sekilde 
    // yox hamsini gondermelisen 
    // demeli yoxlama max 4 file yuklemelidi
    // bunu error mesaj olaraq gostermek lazimdi inputun asagisinda 
    for (let index = 0; index < input.files.length; index++) {
        fileIdCounter++;
        // file
        const file = input.files[index];
        // id vermeyimize sebeb sonra tapi sile bilek deyedi
        const fileId = "CarPhoto" + fileIdCounter;
        // burada arraye yigirig filler-i 
        filesToUpload.push({
            id: fileId,
            file: file
        });

        imagePreview(file, fileId)

    }
    // loopdan sonra inputun deyerini null edirik tezden change
    // olanda bos olur
    input.value = null;



 




}


/**
 * 
 * @param {} file 
 * @param {} fileId 
 * @returns {} 
 */
/// bu hisse ise preview ucun yazmisam isi sadece tek file alib onu 
// her hansisa bir divin icerisine append etmekdi
function imagePreview(file, fileId) {

    const previewContainer = document.querySelector("#preview");

    if (file) {

        const reader = new FileReader();

        reader.addEventListener("load",
            function () {

                const imageBox = `<div class="single-image-container">
                                    <div class="car-overlay">
                                        <a data-fileId="${fileId}" href="#" class="btn-car"><i class="fas fa-trash-alt"></i></a>
                                    </div>
                                    <img src="${this.result}" alt="Image Preview">
                                </div>`;

                previewContainer.insertAdjacentHTML("beforeend", imageBox);
            });

        reader.readAsDataURL(file);
    }
}




// burada ise save sohbetleri olacaq 
function onSave(e){

  // bu form dataya burda brand model append etdikden sonra asagidaki looplada sekilleri edeceksen
  
    var val=$("#CarPhotos").val();
   
    // burada form dataya en son elinde ne qalibsa o filleri append edirsen
    for (var i = 0, len = filesToUpload.length; i < len; i++) {

        formData.append("CarPhotos", filesToUpload[i].file);
    }
    let myForm = document.getElementById('carForm');
    // $.ajax({
    //        url: "/test/test",
    //        // burada sadece file getdi amma sene lazimdiki hamsini gonderesen brand zad
    //        data: new FormData(myForm),
    //        processData: false,
    //        contentType: false,
    //        type: "POST",
    //        success: function (data) {

    //            alert("DONE");

    //     // ugurla gonderilibse bu filesToUpload[] temizleyirsen . yeniden bos olur
    //     //        filesUploader.clear();
               
    //        },
    //        error: function (data) {
    //            alert("ERROR - " + data.responseText);
    //        }
    //     });

   e.preventDefault()

   	for (var pair of formData.entries()) {
		console.log(pair[0]+ ', ' + pair[1]); 
	}
}

