window.addEventListener("load", function(){
let formValidation = document.querySelector("form.control");

formValidation.addEventListener("submit", function(e){
e.preventDefault();
let campoNombre = document.querySelector("input.control");
let campoMail = document.querySelector("input#email");
let campoPassword = document.querySelector("input#clave");

if (campoNombre.value == ""){
    console.log('Este campo no puede quedar vacío')
}
if (campoMail.value == ""){
    console.log('Este campo no puede quedar vacío')
}
if (campoPassword.value == ""){
    console.log('Este campo no puede quedar vacío')
}
});
});