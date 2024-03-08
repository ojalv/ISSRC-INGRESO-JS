/*98. Agrega un formulario con un campo de texto y un botón de envío. Utiliza JavaScript
para mostrar un mensaje en un elemento `<div>` cuando se envíe el formulario.*/
const formulario = document.getElementById("miFormulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const mensaje = document.getElementById("mensaje").value;
  resultado.innerHTML = `<p> Mensaje enviado: ${mensaje} </p>`;
});
