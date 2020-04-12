
// 
// // Brand selectbox
// document.addEventListener("DOMContentLoaded", loadcarsbrand);
// var brand = document.getElementById('brand');
// function loadcarsbrand(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET','../json/brand.json',true);
// 	xhr.onload = function(){
// 	if(this.status === 200){
// 		const arr = JSON.parse(this.responseText);
// 		arr.forEach((z)=>{
// 			brand.innerHTML += `<option value='${z.brandId}'>${z.name}</option>`;
// 		return	 mylocalbd =[z.name]
// 		})
// 		}
// 	}
// 	xhr.send()
//     }
    


    
// // Model Selectbox
// document.addEventListener("DOMContentLoaded", loadcars);
// var model = document.getElementById('model');
// function loadcars(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET','../json/model.json',true);
// 	xhr.onload = function(){
// 	if(this.status === 200){
// 		const arr = JSON.parse(this.responseText);
// 		arr.forEach((e)=>{
// 			if(mylocalbd.brandId === e.brandId){
// 				model.innerHTML += `<option value='${e.brandId}'>${e.name}</option>`
// 			}
// 		})
// 		}
// 	}

// 	xhr.send()
// 	}

// 	console.log(mylocalbd)
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

			// carBrand.forEach((brand) => {
			// 	// modelSelect.innerHTML += `<option value='${brand.brandId}'>${brand.name}</option>`;
			// 	// console.log(brand.brandId);
			// 	if(brandSelect.value === brand.brandId ){
			// 		console.log('equal');
			// 	}
				
			// });

		}
		xhr.send()
	}
}

myObject.init();