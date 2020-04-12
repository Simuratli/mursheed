
// Selectbox json read
var brandSelect   = document.getElementById('brand');
var modelSelect   = document.getElementById('model');
let myObject = {
	init:function(){
		var that = this;
		this.loadCountry();
		brandSelect.addEventListener('change',function(){
			 that.loadCarModel(this.value);
			 modelSelect.innerHTML= `` ;
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
					modelSelect.innerHTML += `<option value='${carBrand[i].brandId}'>${carBrand[i].name}</option>`
				}else{
					modelSelect.innerHTML += ``
				}
			}

			

		}
		xhr.send()
	}
}

myObject.init();

// Selectbox json read end


// Image Preview
function previewFiles() {

	var preview = document.querySelector('#preview');
	var files = document.querySelector('#browse').files;
	
	function readAndPreview(file) {
  	var element = document.createElement('div');
	  element.setAttribute("class", "single-image-container") ;
	  preview.appendChild(element);
	  
	
	 var overlay = document.createElement('div');
	  overlay.setAttribute('class','car-overlay') ;
	  element.appendChild(overlay);
	
	 var button = document.createElement('button');
	  button.className = 'delete-btn';
	  overlay.appendChild(button);
	
	   var icon = document.createElement('i');
	  icon.className = 'fas fa-trash-alt';
	  button.appendChild(icon);
	  
	  // Make sure `file.name` matches our extensions criteria
	  if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
		var reader = new FileReader();
  
		reader.addEventListener("load", function () {
		  var image = new Image();
		  image.title = file.name;
		  image.src = this.result;
		  image.className = 'imagetest';
		  element.appendChild( image );
		}, false);
  
		reader.readAsDataURL(file);
	  }
  
	}
  
	if (files) {
	  [].forEach.call(files, readAndPreview);
	}
  
  }