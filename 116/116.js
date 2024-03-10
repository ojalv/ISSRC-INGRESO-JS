/*116. Crea una página HTML con un botón que diga "Agregar Elemento".
Utiliza JavaScript para agregar un nuevo párrafo (`<p>`) con contenido 
"Nuevo elemento" cada vez que se hace clic en el botón.*/

const boton = document.getElementById("b1");
const contenedor = document.getElementById("container");

boton.addEventListener("click", () => {
  contenedor.innerHTML += `<p>Nuevo elemento</p>`;
});
