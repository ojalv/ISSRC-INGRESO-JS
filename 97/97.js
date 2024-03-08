/*97. Crea una lista de elementos `<li>` y utiliza JavaScript para resaltar un elemento
cuando se haga clic en él, cambiando su color de fondo.*/

const items = document.querySelectorAll(".item");

items.forEach(item => {
    item.addEventListener("click", function (){
        items.forEach(element => {
            element.classList.remove("resaltado")
        })
    item.classList.add("resaltado")
    })
});