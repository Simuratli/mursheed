
var pass =  document.getElementById('password');
var confirm =  document.getElementById('confirmPass');

function showHide(){
   
 
    if(pass.type === 'password'){
        pass.setAttribute('type','text');
    }else{
        pass.setAttribute('type','password');
    }
}

function showHideConfirm(){
   
 
    if(confirm.type === 'password'){
        confirm.setAttribute('type','text');
    }else{
        confirm.setAttribute('type','password');
    }
    
}
var alertbox = document.getElementById('alertbox');
pass.addEventListener('keyup',function(){
    if(pass.value !== confirm.value){
        alertbox.innerHTML = 'Eyni deyiller';
        alertbox.style.color = 'red'
    }
    else if(pass.value.length<=6 || confirm.value.length<=6){
        alertbox.innerHTML = '6dan kicik olmasin';
        alertbox.style.color = 'red'
    }else if(pass.value == confirm.value){
        alertbox.innerHTML = 'Eynidirler';
        alertbox.style.color = 'green'
    }
})

confirm.addEventListener('keyup',function(){
    if(pass.value !== confirm.value){
        alertbox.innerHTML = 'Eyni deyiller';
        alertbox.style.color = 'red'

    }
    else if(pass.value.length<=6 || confirm.value.length<=6){
        alertbox.innerHTML = '6dan kicik olmasin';
        alertbox.style.color = 'red'
    }else if(pass.value == confirm.value){
        alertbox.innerHTML = 'Eynidirler';
        alertbox.style.color = 'green'
    }
})


