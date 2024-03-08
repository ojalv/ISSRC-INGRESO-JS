/*100. Agrega un enlace en tu página y utiliza JavaScript para redirigir al usuario a una
página web diferente cuando se haga clic en el enlace.*/

enlace = document.getElementById("enlace");

enlace.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
