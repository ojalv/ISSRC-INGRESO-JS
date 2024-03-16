/*142. Calculadora Simple:
Crea una calculadora en HTML con botones para números y operaciones básicas. Utiliza
JavaScript para realizar los cálculos y mostrar el resultado en un campo de texto.*/

// const b0 = document.getElementById("0");
// const b1 = document.getElementById("1");
// const b2 = document.getElementById("2");
// const b3 = document.getElementById("3");
// const b4 = document.getElementById("4");
// const b5 = document.getElementById("5");
// const b6 = document.getElementById("6");
// const b7 = document.getElementById("7");
// const b8 = document.getElementById("8");
// const b9 = document.getElementById("9");
// const bmas = document.getElementById("mas");
// const bmenos = document.getElementById("menos");
// const bigual = document.getElementById("igual");
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".boton");
let operacion = ``;
let operatorRepeat = false;
let operationEnd = false;
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    if (operationEnd) {
      pantalla.innerText = "";
      operacion = "";
      operationEnd = false;
    }
    if ((boton.id != "mas") & (boton.id != "menos") & (boton.id != "igual")) {
      operacion += boton.innerText;
      pantalla.innerText = operacion;
      operatorRepeat = false;
    } else if ((boton.id == "mas" || boton.id == "menos") && operacion != "") {
      if (!operatorRepeat) {
        operacion += boton.innerText;
        pantalla.innerText = operacion;
        operatorRepeat = true;
      }
    } else if (boton.id == "igual") {
      pantalla.innerText = calcular(operacion);
      operationEnd = true;
    }
  });
});

// operacion es una cadena que contiene la operacion realizada en la calculadora
function calcular(operacion) {}
