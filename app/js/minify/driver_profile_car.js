const formData=new FormData;var brandSelect=document.getElementById("BrandId"),modelSelect=document.getElementById("ModelId");modelSelect.addEventListener("change",(function(){formData.append("Brand",this.options[this.selectedIndex].text)}));let myObject={init:function(){var e=this;this.loadCountry(),brandSelect.addEventListener("change",(function(){e.loadCarModel(this.value),modelSelect.innerHTML="",formData.append("Model",this.options[this.selectedIndex].text)}))},loadCountry:function(){let e=new XMLHttpRequest;e.open("GET","../json/brand.json",!0),e.onload=function(){JSON.parse(e.responseText).forEach(e=>{brandSelect.innerHTML+=`<option value='${e.brandId}'>${e.name}</option>`})},e.send()},loadCarModel:function(e){let n=new XMLHttpRequest;n.open("GET","../json/model.json?brandId="+e,!0),n.onload=function(){for(var e=JSON.parse(n.responseText),t=0;t<=e.length;t++)e[t].brandId==brandSelect.value?modelSelect.innerHTML+=`<option value='${e[t].brandId}'>${e[t].name}</option>`:modelSelect.innerHTML+=""},n.send()}};myObject.init();var fileIdCounter=0,filesToUpload=[],preview=document.querySelector("#preview"),files=document.querySelector("#CarPhotos").files;function onChange(e){console.log(e.files.length),console.log(e);for(let n=0;n<e.files.length;n++){fileIdCounter++;const t=e.files[n],o="CarPhoto"+fileIdCounter;filesToUpload.push({id:o,file:t}),imagePreview(t,o)}e.value=null}function imagePreview(e,n){const t=document.querySelector("#preview");if(e){const o=new FileReader;o.addEventListener("load",(function(){const e=`<div class="single-image-container">\n                                    <div class="car-overlay">\n                                        <a data-fileId="${n}" href="#" class="btn-car"><i class="fas fa-trash-alt"></i></a>\n                                    </div>\n                                    <img src="${this.result}" alt="Image Preview">\n                                </div>`;t.insertAdjacentHTML("beforeend",e)})),o.readAsDataURL(e)}}function onSave(e){$("#CarPhotos").val();for(var n=0,t=filesToUpload.length;n<t;n++)formData.append("CarPhotos",filesToUpload[n].file);document.getElementById("carForm");for(var o of(e.preventDefault(),formData.entries()))console.log(o[0]+", "+o[1])}