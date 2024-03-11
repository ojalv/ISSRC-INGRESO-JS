/*120. Crea una página HTML con un elemento de imagen (`<img>`). Utiliza JavaScript para
cambiar la imagen cada vez que se hace clic en ella, alternando entre dos imágenes
diferentes.*/

const imagen = document.getElementById("imagen");
let imagenes = [
  "assets/pexels-photo-8921708.webp",
  "assets/pexels-photo-5628266.jpeg",
];
let posicion = 0;

imagen.addEventListener("click", () => {
  imagen.src = imagenes[posicion];
  posicion++;
  if (posicion == imagenes.length) {
    posicion = 0;
  }
});
