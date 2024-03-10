/*115. Agrega una imagen a tu página HTML. 
Utiliza JavaScript para cambiar la fuente de la
imagen cuando se pasa el cursor sobre ella.*/

imagen = document.getElementById("img1");

imagen.addEventListener("mouseover", () => {
  imagen.src = "assets/pexels-pixabay-290164.jpg";
});

imagen.addEventListener("mouseout", () => {
  imagen.src = "assets/pexels-larissa-barbosa-1870376.jpg";
});
