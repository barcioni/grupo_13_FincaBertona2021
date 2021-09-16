window.addEventListener("load", function(){
    let campoRegistro = Array.from(document.querySelectorAll(".control")); //Es un listado
    let botonEnviar =  document.querySelector(".boton-formulario-enviar");
    
    botonEnviar.addEventListener("click", function(e){
        let errores = [];
        campoRegistro.forEach (campo => {
            
            if(campo.value.length < 1){
                e.preventDefault();
                errores.push ("Este campo debe estar completo");
            }
            if(errores.length > 0){
                campoRegistro.innerText = (errores.name) ? errores.name : "";
            }else{
            botonEnviar.submit();
        }
    })
})
})