window.addEventListener("load", function(){
    let botonEnviar =  document.querySelector(".boton-formulario-enviar");
    
    botonEnviar.addEventListener("click", function(e){

        let campoNombre = document.querySelector("input#nombre");
        let campoApellido = document.querySelector("input#apellido");
        let campoFecha = document.querySelector("input.fecha");
        let campoMail = document.querySelector("input#email");
        let campoPassword = document.querySelector("input#clave");
        let campoDomicilio = document.querySelector("input#domicilio");
        
        let errores = [];
        let contenedorErrores = document.querySelector(".errores");

        if (campoNombre.value == ""){
            errores.push({etiqueta: campoNombre, msg:'El campo del nombre no puede quedar vacío'})
        }
        if (campoApellido.value == ""){
            errores.push({etiqueta: campoApellido, msg:'El campo del apellido no puede quedar vacío'})
        }
        if (campoFecha.value == ""){
            errores.push({etiqueta: campoFecha, msg:'El campo de la fecha no puede quedar vacío'})
        }
        if (campoMail.value == ""){
            errores.push({etiqueta: campoMail, msg:'El campo del email no puede quedar vacío'})
        }
        if (campoPassword.value == ""){
            errores.push({etiqueta: campoPassword, msg:'El campo de la password no puede quedar vacío'})
        }
        if (campoDomicilio.value == ""){
            errores.push({etiqueta: campoDomicilio, msg:'El campo del domicilio no puede quedar vacío'})
        }

            if(errores.length == 0){
                e.target.submit(); 
            }else{
                contenedorErrores.innerHTML = null;
                errores.forEach(error =>{
                    contenedorErrores.innerHTML += `<small class="textoErrores">${error.msg}</small>`;
                })
        }
    })
})