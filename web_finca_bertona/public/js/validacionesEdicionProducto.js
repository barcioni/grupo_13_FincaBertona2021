window.addEventListener("load", function(){
    let botonEditar =  document.querySelector("#boton-editar");
    
    botonEditar.addEventListener("click", function(e){

        let campoCosecha = document.querySelector("input#year");
        let campoPrecio = document.querySelector("input#price");
        let campoVarietal = document.querySelector("input#varietal");
        let campoGraduacion = document.querySelector("input#graduacion");
        let campoBarrica = document.querySelector("input#barrica");
        let campoGuarda = document.querySelector("input#guarda");
        let campoDescripcion = document.querySelector("input#description");
        
        let errores = [];
        let contenedorErrores = document.querySelector(".errores");

        if (campoCosecha.value == ""){
            errores.push({etiqueta: campoCosecha, msg:'El campo del año de la Cosecha no puede quedar vacío'})
        }
        if (campoPrecio.value == ""){
            errores.push({etiqueta: campoPrecio, msg:'El campo del Precio no puede quedar vacío'})
        }
        if (campoVarietal.value == ""){
            errores.push({etiqueta: campoVarietal, msg:'El campo del Varietal no puede quedar vacío'})
        }
        if (campoGraduacion.value == ""){
            errores.push({etiqueta: campoGraduacion, msg:'El campo de la Graduación no puede quedar vacío'})
        }
        if (campoBarrica.value == ""){
            errores.push({etiqueta: campoBarrica, msg:'El campo de la Barrica no puede quedar vacío'})
        }
        if (campoGuarda.value == ""){
            errores.push({etiqueta: campoGuarda, msg:'El campo de la Guarda no puede quedar vacío'})
        }
        if (campoDescripcion.value == ""){
            errores.push({etiqueta: campoDescripcion, msg:'El campo de la Descripción no puede quedar vacío'})
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
    });
    