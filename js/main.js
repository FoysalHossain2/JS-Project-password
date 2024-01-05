const myInput = document.querySelector('#myInput');
const showPass = document.querySelector('.showPass');

showPass.addEventListener('click' , function(){
    if(myInput.type === 'password'){
        myInput.type = 'text';
        showPass.innerHTML = "show";
    } else {
        myInput.type = 'password';
        showPass.innerHTML = "Hide";
    }


})
