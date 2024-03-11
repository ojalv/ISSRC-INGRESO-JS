/*119. Agrega un formulario a tu página HTML con un campo de texto y un botón de envío.
Utiliza JavaScript para mostrar un mensaje en un elemento de párrafo (`<p>`) cuando se
envía el formulario.*/

const formulario = document.getElementById("formulario");
const texto = document.getElementById("texto");
let mensajeEnviado = false;

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  if (mensajeEnviado == false) {
    formulario.innerHTML += `<p>Mensaje enviado</p>`;
    mensajeEnviado = true;
  }
});
