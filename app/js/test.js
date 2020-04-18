
// // Form data 
// var formdata =new FormData();



// // Selectbox json read
// var brandSelect   = document.getElementById('BrandId');
// var modelSelect   = document.getElementById('ModelId');

// modelSelect.addEventListener('change',function(){
// 	formdata.append("Brand",this.options[this.selectedIndex].text);
			
// })
// let myObject = {
// 	init:function(){
// 		var that = this;
// 		this.loadCountry();
		
// 		brandSelect.addEventListener('change',function(){
// 			 that.loadCarModel(this.value);
// 			 modelSelect.innerHTML= `` ;
// 			 formdata.append("Model",this.options[this.selectedIndex].text);
// 		})

// 	},
// 	loadCountry:function(){
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('GET','../json/brand.json',true);
// 		xhr.onload = function(){
// 			var carBrand = JSON.parse(xhr.responseText);
// 			carBrand.forEach((brand) => {
// 				brandSelect.innerHTML += `<option value='${brand.brandId}'>${brand.name}</option>`;
// 			});
// 		}
// 		xhr.send()
// 	},
// 	loadCarModel:function(id){
// 		let xhr = new XMLHttpRequest();
// 		xhr.open('GET','../json/model.json?brandId='+id,true);
// 		xhr.onload = function(){
// 			var carBrand = JSON.parse(xhr.responseText);
// 			for(var i=0; i<=carBrand.length; i++){
// 				if(carBrand[i].brandId == brandSelect.value){
// 					modelSelect.innerHTML += `<option value='${carBrand[i].brandId}'>${carBrand[i].name}</option>`;
					
// 				}else{
// 					modelSelect.innerHTML += ``
// 				}
// 			}

			

// 		}
// 		xhr.send()
// 	}
// }

// myObject.init();

// // Selectbox json read end


// var countImg = 0;
// var imageCollection = new Array();


// document.getElementById("saveCarbtn").addEventListener("click", function(el){
// 	alert('sa')
// imageCollection.map((num,i)=>{
// 	// Saveyə basdıqda image arrayı formdataya append olur
// 	formdata.append("image" , num[i].file);
// 	// Form dataya yazılan məlumatin yoxlaılması
// 	console.log(num)


// 	for (var pair of formdata.entries()) {
// 		console.log(pair[0]+ ', ' + pair[1]); 
// 	}
// })


// // fetch("http://localhost:3002/upload",{
// // 	method:'POST',
// // 	body:formdata,

// // })
// el.preventDefault();
// })


// // Image Preview
// function onChange() {

// 	var preview = document.querySelector('#preview');
// 	var files = document.querySelector('#CarPhotos').files;

// 	// Şəkillərin göstərilməsi və yüklənilməsi
// 	function readAndPreview(file) {
// 		countImg++;
//   	var element = document.createElement('div');
// 	  element.setAttribute("class", "single-image-container") ;
// 	  preview.appendChild(element);
	  
	
// 	 var overlay = document.createElement('div');
// 	  overlay.setAttribute('class','car-overlay') ;
// 	  element.appendChild(overlay);
	
// 	 var button = document.createElement('button');
// 	  button.className = 'delete-btn';
// 	  overlay.appendChild(button);
	
// 	   var icon = document.createElement('i');
// 	  icon.className = 'fas fa-trash-alt';
// 	  button.appendChild(icon);
	  

	   
// 	  // delete image

// 	  button.addEventListener("click", function () {
// 		let question = confirm("Are you sure to delete this photo ?");
// 		if (question) {
// 			this.parentNode.parentNode.parentNode.removeChild(element);
		
// 			imageCollection.forEach((num,i)=>{
// 				if(num.id === Number(this.parentNode.parentNode.childNodes[1].title)){
// 					imageCollection.splice(i,1);
// 					// arrayi yeniden say
					
// 				}
// 			})
			
// 		} else {
// 			return;
// 		}
// 	});

// 	  // delete image end

	  

// 	  // Make sure `file.name` matches our extensions criteria
// 	  if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
// 		var reader = new FileReader();
  
// 		reader.addEventListener("load", function () {
// 		  var image = new Image();
// 		  image.title = (countImg++)+1;
// 		  image.src = this.result;
// 		  image.className = 'imagetest';
// 		  element.appendChild( image );
// 		  var imageobj;
// 		  imageCollection.push({id:countImg++ , src:image});
		  
// 		}, false);
		
// 		reader.readAsDataURL(file);
// 	  }
	 

// 	  var success = 'success';
// 	  var danger = 'danger';
// 	  var countText = document.getElementById('countimgtxt');
// 	//   şəkil sayının sorğusu
//   	function counthowmany(){
// 		if(imageCollection.length<4){
// 			countText.innerHTML = `<p class='text-${danger}'>Siz ümumi 4 şəkil əlavə etməlisiz</p>`;
// 			document.getElementById('browse').disabled = false;
// 			}else if(imageCollection.length>=4){
// 			countText.innerHTML = `<p class='text-${success}'>You  add 4 picture</p>`;
// 			document.getElementById('browse').disabled = true;
// 			}
// 	  }
// 	  setInterval(function(){ counthowmany(); }, 500);
// 	}
	
// 	if (files) {
	
// 	  [].forEach.call(files, readAndPreview);
// 	}
	
//   }
  




// 	// imageCollection.map((map)=>{
// 	// 	formdata.append("image" , num.src.src);
// 	// 		for (var pair of formdata.entries()) {
// 	// 			console.log(pair[0]+ ', ' + pair[1]); 
// 	// 		}
// 	// })
