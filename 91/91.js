/*91. Crea un botón en tu página HTML y utiliza JavaScript para mostrar un mensaje en un
cuadro de alerta cuando el botón sea clicado.*/

const boton = document.getElementById('miBoton');

boton.addEventListener("click", function(){
    alert(`El boton funciona!`)
})