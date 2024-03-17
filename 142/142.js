/*142. Calculadora Simple:
Crea una calculadora en HTML con botones para números y operacioneses básicas. Utiliza
JavaScript para realizar los cálculos y mostrar el resultado en un campo de texto.*/
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".boton");
let operaciones = []; // array que contiene la historia de numeros y operadores ingresados
let operador = false; // indica si ya se aplico un operador
let operacionesFin = false; // indica si ya se aplico el igual
let numero = ""; // cadena que representa el numero que se esta ingresando hasta que se agregue un operador

botones.forEach((boton) => {
  //para cada boton
  boton.addEventListener("click", () => {
    //escucha el evento "click"
    if (boton.id != "mas" && boton.id != "menos" && boton.id != "igual") {
      //si el boton es un numero
      if (operacionesFin) {
        //si llegamos al final de una operacion anteriormente
        numero = ""; //limpiamos el numero
        pantalla.innerText = ""; //limpiamos la pantalla
        operacionesFin = false; // iniciamos una nueva operacion
      }
      numero += `${boton.innerText}`; //agrega un digito a la cadena numero
      if (!operador) {
        // si no se uso un operador anteriormente
        operaciones.pop(); //elimina el ultimo elemento del array (numero desactualizado)
      }
      operaciones.push(numero); //agrega el numero actualizado al ultimo lugar del array
      pantalla.innerText = concatenarOperaciones(operaciones); //muestra las operaciones en pantalla
      operador = false; // volvemos a indicar que no se uso un operador
    } else if (boton.id == "mas" || boton.id == "menos") {
      //el boton es el operador + o -
      if (operacionesFin) {
        //si llegamos al final de una operacion anteriormente
        numero = ""; //limpiamos el numero
        pantalla.innerText = ""; //limpiamos la pantalla
        operacionesFin = false; // iniciamos una nueva operacion
      }
      if (!operador) {
        //si no se repitio un + o -
        numero = ""; // limpiamos el numero
        pantalla.innerText += boton.innerText; //agregamos el operador en la pantalla
        operaciones.push(boton.innerText); //agregamos el operador al historial de operacioneses
        operador = true;
      }
    } else if (boton.id == "igual") {
      //el boton es =
      pantalla.innerText = calcular(operaciones); //calcular y mostrar el resultado en pantalla
      operaciones.splice(0, operaciones.length); //quitamos todos los elementos del array
      operacionesFin = true; //indicamos que llegamos al final de la operacion
    }
  });
});

function concatenarOperaciones(operaciones) {
  let c = "";
  operaciones.forEach((elemento) => {
    c += elemento;
  });
  return c;
}

function calcular(operaciones) {
  let total = 0;
  for (let i = 0; i < operaciones.length; i++) {
    // iteramos el array de operaciones
    if (i == 0 && operaciones[0] != "+" && operaciones[0] != "-") {
      //verificamos que el primer elemento se un numero
      total += parseInt(operaciones[0]); //agregamos el primer elemento al total
    } else {
      if (operaciones[i] == "-") {
        // la operacion es una resta
        if (i < operaciones.length - 1) {
          // verificamos que este no sea el ultimo elemento del array
          total -= parseInt(operaciones[i + 1]); // restamos el siguiente elemento del array (que es un numero) del total
        }
      } else if (operaciones[i] == "+") {
        if (i != operaciones.length - 1) {
          // verificamos que este no sea el ultimo elemento del array
          total += parseInt(operaciones[i + 1]); // sumamos el siguiente elemento del array (que es un numero) al total
        }
      }
    }
  }
  return total;
}
