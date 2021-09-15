window.addEventListener("load", function(){
let alta = document.querySelectorAll(".alta");
let botonEnviar =  document.querySelector(".boton-formulario-enviar");

botonEnviar.addEventListener("click", function(){
    
})


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