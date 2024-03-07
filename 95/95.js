/*Crea un botón que cambie el color de fondo de la página a un color aleatorio cada vez
que sea clicado. */

const boton = document.getElementById("boton");
const body = document.getElementById("body");

boton.addEventListener("click", function () {
  body.style.backgroundColor = `rgb(${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 255})`;
});
