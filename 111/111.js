/*111. Crea una página HTML con un botón. Utiliza JavaScript
para mostrar un mensaje en un cuadro de alerta cuando se
hace clic en el botón.*/

const boton = document.getElementById("b1");

boton.addEventListener("click", function () {
  window.alert("Este es un mensaje de alerta!");
});
