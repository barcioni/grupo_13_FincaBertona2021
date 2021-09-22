window.addEventListener("load", function(){
    let formValidation = document.querySelector(".formulario-contacto");
    
    formValidation.addEventListener("submit", function(e){
    
    let campoNombreCompleto = document.querySelector("input.nombre-completo");
    let campoMail = document.querySelector("input#email");
    let campoPais = document.querySelector("input#pais");
    let campoProvincia = document.querySelector("input#provincia");
    let campoLocalidad = document.querySelector("input#localidad");
    let campoTelefono = document.querySelector("input#telefono");
    let campoMensaje = document.querySelector("input#mensaje");

    let errores = [];
    let contenedorErrores = document.querySelector(".errores")
    if (campoNombreCompleto.value == ""){
        errores.push({etiqueta: campoNombreCompleto, msg:'El campo del nombre no puede quedar vacío'})
    }
    if (campoMail.value == ""){
        errores.push({etiqueta: campoMail, msg:'El campo del email no puede quedar vacío'})
    }
    if (campoPais.value == ""){
        errores.push({etiqueta: campoPais, msg:'El campo del país no puede quedar vacío'})
    }
    if (campoProvincia.value == ""){
        errores.push({etiqueta: campoProvincia, msg:'El campo de la provincia no puede quedar vacío'})
    }
    if (campoLocalidad.value == ""){
        errores.push({etiqueta: campoLocalidad, msg:'El campo de la localidad no puede quedar vacío'})
    }
    if (campoTelefono.value == ""){
        errores.push({etiqueta: campoTelefono, msg:'El campo del teléfono no puede quedar vacío'})
    }
    if (campoMensaje.value == ""){
        errores.push({etiqueta: campoMensaje, msg:'El campo del mensaje no puede quedar vacío'})
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