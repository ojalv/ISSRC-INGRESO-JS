/*114. Crea una página HTML con un botón y un párrafo vacío.
Utiliza JavaScript para cambiar el contenido del párrafo por
"Texto modi cado" cuando se hace clic en el botón.*/

const boton = document.getElementById("b1");
const parrafo = document.getElementById("p1");

boton.addEventListener("click", () => {
  parrafo.innerText = "Texto modificado";
});
