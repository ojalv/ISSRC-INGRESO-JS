/*94. Agrega un campo de texto en tu página y utiliza JavaScript para mostrar un mensaje
en la consola cuando el usuario escriba algo en el campo y presione Enter.*/

const texto = document.getElementById("texto");

texto.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    console.log(`Texto ingresado: ${texto.value}`);
    texto.value = "";
  }
});
