window.addEventListener("load", function(){
let alta = document.querySelectorAll(".alta");
let botonEnviar =  document.querySelector(".boton-formulario-enviar");

botonEnviar.addEventListener("click", function(e){
e.preventDefault();
})
let errores = [];
if(alta.value.length < 2){
errores.name = "Este campo debe estar completo";
}
if(errores.length > 0){
alta.innerText = (errores.name) ? errores.name : "";
}else{
    alta.submit();
}
    });







    /*    let formValidation = document.querySelector("form.formulario-alta-productos");
let errores = [];
let altaProductos = document.querySelector("input.alta");
if(altaProductos.value == ""){
errores.push("El campo no debe quedar vacío");
}

if(errores.length > 0){
    event.preventDefault();
    let ulErrores = document.querySelector(".errores ul");
    errores.forEach(error => {
    ulErrores.innerHTML += '<li>${error}</li>'
    });
    }
    /*
    formValidation.addEventListener("submit", function(e){
    e.preventDefault();
    });
    */