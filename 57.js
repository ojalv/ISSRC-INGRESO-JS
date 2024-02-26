/*57. De ne una variable `numero` y veri ca si es positivo, negativo o igual a cero utilizando
una declaración `if` y muestra el resultado en la consola.*/

var numero = 0;

if (numero == 0) {
  console.log("El numero es igual a 0");
} else {
  if (numero > 0) {
    console.log("El numero es mayor a 0");
  } else {
    if (numero < 0) {
      console.log("El numero es menor a 0");
    }
  }
}
