/*58. Escribe una función llamada `esPar` que tome un número como argumento y retorne
`true` si es par o `false` si es impar. Luego, muestra el resultado en la consola.*/

function esPar(numero) {
  if (numero % 2 == 0) {
    console.log("Es Par");
    return true;
  } else {
    if (numero % 2 == 1) {
      console.log("Es impar");
      return false;
    } else {
      console.log("ERROR");
    }
  }
}

esPar(2);
