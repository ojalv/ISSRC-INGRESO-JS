/*112. Crea una página HTML con tres elementos de párrafo (`<p>`). 
Utiliza JavaScript para seleccionar un elemento y cambiar su 
contenido por "¡Hola, DOM!".*/

const parrafos = document.querySelectorAll("p");

console.log(parrafos);
parrafos.forEach((p) => {
  p.addEventListener("click", () => {
    p.innerText = "¡Hola, DOM!";
  });
});
