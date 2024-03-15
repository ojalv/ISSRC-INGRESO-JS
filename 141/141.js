/*141. Botón Cambia Color:
Crea un botón en HTML. Cuando el usuario haga clic en él, cambia el color de fondo de la
página usando JavaScript y aplícale un estilo CSS para que el botón sea más grande.*/

const boton = document.getElementById("b1");
const body = document.getElementById("body");
let buttonScale = 1;

boton.style.position = `sticky`;

boton.addEventListener("click", () => {
  body.style.backgroundColor = `rgb(${Math.random() * 255},${
    Math.random() * 255
  },${Math.random() * 255})`;

  buttonScale += 0.3;
  boton.style.transform = `scale(${buttonScale})`;
  boton.style.left = `${Math.random() * 500}px`;
  boton.style.top = `${Math.random() * 500}px`;
});
