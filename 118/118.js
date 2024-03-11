/*118. Crea una página HTML con un botón. Utiliza JavaScript para cambiar el color de
fondo de la página cuando se hace clic en el botón.*/

const boton = document.getElementById("b1");
const body = document.querySelector("body");

boton.addEventListener("click", () => {
  body.style.backgroundColor = `rgb(${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 255})`;
});
