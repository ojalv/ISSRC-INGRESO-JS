/*Crea una función llamada sumaDigitos que tome un número entero como argumento y
retorne la suma de sus dígitos. Por ejemplo, si el número es 123, la función debe retornar
6 (1 + 2 + 3).*/

function sumaDigitos(entero) {
  let suma = 0;
  entero = entero.toString().split("");

  for (const digito of entero) {
    suma += Number(digito)  
  }

console.log(suma);

}

sumaDigitos(123000000);
