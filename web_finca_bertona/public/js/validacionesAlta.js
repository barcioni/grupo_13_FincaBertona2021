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

