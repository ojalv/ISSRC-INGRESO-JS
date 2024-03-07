/**Agrega una imagen en tu página y utiliza JavaScript para mostrar un mensaje cuando
el usuario pase el cursor sobre la imagen. */

const imagen = document.getElementById("imagen");
const mensaje = document.getElementById("mensaje");

imagen.addEventListener("mouseover", function () {
  mensaje.style.display = "block";
});

imagen.addEventListener("mouseout", function () {
    mensaje.style.display = "none";
  });