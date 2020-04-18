
//
const _validFileExtensions = [".jpg", ".jpeg", ".png"],
    fileWarning = document.getElementById("fileWarning");

$.fn.fileUploader = function (filesToUpload, sectionIdentifier) {
    // fake file index
    var fileIdCounter = 0;

    // Define maximum number of files.
    const maxFileCount = 4;

    // input change action
    this.closest(".files").change(function (event) {

        const fileLength = event.target.files.length;

        // check selected File count return - true || false
        if (selectedFileCount(fileLength, maxFileCount, filesToUpload.length)) {

            for (let i = 0; i < fileLength; i++) {

                // fill to array
                const file = event.target.files[i];
                //
                if (isValidFileType(file)) {

                    fileIdCounter++;

                    const fileId = sectionIdentifier + fileIdCounter;

                    filesToUpload.push({
                        id: fileId,
                        file: file
                    });


                    // preview 
                    imagePreview(file, fileId);
                }
            };
            requiredFileCount(filesToUpload.length, maxFileCount);
        }

        //reset the input to null - nice little chrome bug!
        event.target.value = null;
    });

    // remove file
    this.closest(".files").on("click",
        ".removeFile",
        function (event) {
            event.preventDefault();

            const fileId = $(this).parent().children("a").data("fileid");

            // loop through the files array and check if the name of that file matches FileName
            // and get the index of the match
            for (let i = 0; i < filesToUpload.length; ++i) {

                if (filesToUpload[i].id === fileId) {
                    filesToUpload.splice(i, 1);
                    break;
                }
            }

            // remove img-box : col-3
            $(this).parent().parent().parent().remove();
            //
            requiredFileCount(filesToUpload.length, maxFileCount);
            //if (filesToUpload.length < maxFileCount) {

            //    fileWarning.innerHTML = `Daha ${maxFileCount - filesToUpload.length} fayl yükləməyiniz tələb olunur!`;
            //}
        });

    // post ugurlu oldugu halda array-i sifirla
    this.clear = function () {
        for (let i = 0; i < filesToUpload.length; ++i) {
            if (filesToUpload[i].id.indexOf(sectionIdentifier) >= 0)
                filesToUpload.splice(i, 1);
        }

        $(this).children(".fileList").empty();
    };

    return this;
};
function requiredFileCount(fileCount, maxFileCount) {

    if (fileCount > 0) {

        if (fileCount > maxFileCount) {

            fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
            return false;
        } else if (fileCount < maxFileCount) {

            fileWarning.innerHTML = `Daha ${maxFileCount - fileCount} fayl yükləməyiniz tələb olunur!`;
            return true;
        }
    } else {

        fileWarning.innerHTML = `${maxFileCount} fayl yükləməyiniz tələb olunur!`;
        return false;
    }
    return false;
}
//bu tam duz deyil yarimciq qalmisdim  amma burda demeli ne qebul edecek sen hal hazirda
// arrayde nece element var onu yoxlamalisan  meselen 4 varsa deyirsenki icaze yoxdu
// 4den azdisa deyirsenki bu qederde yukle
// ve sair sertler var  
function selectedFileCount(fileCount, maxFileCount, currentFileCount) {

    if (currentFileCount > maxFileCount) {

        fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
        return false;

    } else if (currentFileCount > maxFileCount && currentFileCount === maxFileCount) {

        fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
        return false;
    } else if (currentFileCount < maxFileCount) {

        fileWarning.innerHTML = `Ən çoxu ${maxFileCount - currentFileCount} fayl yükləməyinizə icazə verilir!`;
        return true;
    } else if (currentFileCount === maxFileCount) {

        fileWarning.innerHTML = ``;

        return true;
    } 
    //if (fileCount > maxFileCount && currentFileCount === 0) {

    //    fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
    //    return false;

    //} else if (fileCount > maxFileCount && currentFileCount === maxFileCount) {

    //    fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
    //    return false;
    //}else if (fileCount < maxFileCount && currentFileCount === maxFileCount) {

    //    fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
    //    return false;
    //} else if (fileCount === maxFileCount && currentFileCount === maxFileCount) {

    //    fileWarning.innerHTML = `Ən çoxu ${maxFileCount} fayl yükləməyinizə icazə verilir!`;
    //    return false;
    //} else {

    //    fileWarning.innerHTML = ``;
    //    return true;
    //}
    return false;
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

    const previewContainer = document.querySelector(".fileList");

    if (file) {

        const reader = new FileReader();

        reader.addEventListener("load",
            function () {

                const imageBox = `<div class="col-md-3">
                                  <div class="single-image-container">
                                    <div class="car-overlay">
                                        <button><i class="fas fa-search-plus"></i></button>
                                        <a data-fileId="${fileId}" href="#" class="delete-btn removeFile"><i class="fas fa-trash-alt"></i></a>
                                    </div>
                                    <img src="${this.result}" alt="Image Preview">
                                </div>
                            </div>`;

                previewContainer.insertAdjacentHTML("beforeend", imageBox);
            });

        reader.readAsDataURL(file);
    }
}


/**
 * 
 * @param {} file 
 * @returns {true || false} 
 */
// burada bunun type yoxlanilir  png jpg zad
// sene elave task olaraq sizeni yoxla sende 
// max 2 mb ola biler yuklenen file
function isValidFileType(file) {

    const fileName = file.name;

    let isValid = false;

    for (let j = 0; j < _validFileExtensions.length; j++) {

        const currentExtension = _validFileExtensions[j];

        if (fileName.substr(fileName.length - currentExtension.length, currentExtension.length).toLowerCase() ===
            currentExtension.toLowerCase()) {

            isValid = true;
            break;
        }
    }

    if (!isValid) {
        fileWarning.innerHTML =
            `Bağışlayın, ${fileName} etibarsızdır, icazə verilən uzantılar: ${_validFileExtensions.join(", ")}`;
        return false;
    }

    return true;
}
(function () {

    // formData append
    
    var filesToUpload = [];

    const filesUploader = $("#CarPhotos").fileUploader(filesToUpload, "CarPhotos");

    $("#saveButton").click(function () {


        const formData = new FormData();

        for (var i = 0, len = filesToUpload.length; i < len; i++) {
            formData.append("files", filesToUpload[i].file);
        }

        //$.ajax({
        //    url: "",
        //    data: formData,
        //    processData: false,
        //    contentType: false,
        //    type: "POST",
        //    success: function (data) {
        //        alert("DONE");

        //        filesUploader.clear();
        //        
        //    },
        //    error: function (data) {
        //        alert("ERROR - " + data.responseText);
        //    }
        //});
    });
})();

