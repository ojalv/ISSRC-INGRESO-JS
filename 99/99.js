/*99. Crea un botón que oculte un elemento en tu página cuando sea clicado y lo muestre
nuevamente cuando se vuelva a hacer clic.*/

btn_menu = document.getElementById("btn-menu");
toggle_menu = document.getElementById("toggle-menu");

btn_menu.addEventListener("click", function () {
   toggle_menu.classList.toggle("inactive") 
});
