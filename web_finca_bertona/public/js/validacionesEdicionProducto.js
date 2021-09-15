window.addEventListener("load", function(){
    let campoEdicionProducto = document.querySelectorAll(".campo-form-edicion");
    let botonEditar =  document.querySelector("#boton-editar");
    
    botonEditar.addEventListener("click", function(e){
    e.preventDefault();
    })
    let errores = [];
    if(campoEdicionProducto.value.length < 1){
    errores.name = "Este campo debe estar completo";
    }
    if(errores.length > 0){
        campoEdicionProducto.innerText = (errores.name) ? errores.name : "";
    }else{
        botonEditar.submit();
    }
    });