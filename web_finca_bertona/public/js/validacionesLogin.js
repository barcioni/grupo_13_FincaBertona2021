window.addEventListener("load", function(){
let formValidation = document.querySelector("form.formulario-login");

formValidation.addEventListener("submit", function(e){
e.preventDefault();
let campoNombre = document.querySelector("input.control");
let campoMail = document.querySelector("input#email");
let campoPassword = document.querySelector("input#clave");
let errores = [];
let contenedorErrores = document.querySelector(".errores")
if (campoNombre.value == ""){
    errores.push({etiqueta: campoNombre, msg:'Este campo no puede quedar vacío'})
}
if (campoMail.value == ""){
    errores.push({etiqueta: campoMail, msg:'Este campo no puede quedar vacío'})
}
if (campoPassword.value == ""){
    errores.push({etiqueta: campoPassword, msg:'Este campo no puede quedar vacío'})
}
if(errores.length == 0){
    e.target.submit(); 
}else{
    contenedorErrores.innerHTML = null;
    errores.forEach(error =>{
        contenedorErrores.innerHTML += `<small class="textoErrores">${error.msg}</small>`;
    })
} 
});
});