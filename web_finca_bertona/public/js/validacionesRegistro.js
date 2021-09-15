window.addEventListener("load", function(){
    let campoRegistro = document.querySelectorAll(".control");
    let botonEnviar =  document.querySelector(".boton-formulario-enviar");
    
    botonEnviar.addEventListener("click", function(e){
    })
    let errores = [];
    if(campoRegistro.value.length < 1){
        e.preventDefault();
        errores.name = "Este campo debe estar completo";
    }
    if(errores.length > 0){
        campoEdicionProducto.innerText = (errores.name) ? errores.name : "";
    }else{
        botonEnviar.submit();
    }
    });