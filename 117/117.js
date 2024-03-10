/*117. Agrega una lista (`<ul>`) vacía a tu página HTML. Utiliza JavaScript para permitir que
el usuario agregue elementos de lista (`<li>`) mediante un cuadro de texto y un botón
"Agregar".*/

const lista = document.getElementById("lista");
const entrada = document.getElementById("entrada");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  if (entrada.value != "") {
    lista.innerHTML += `<li>${entrada.value}</li>`;
  }
});
