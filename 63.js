/*Crea una función llamada calcularFactorial que tome un número entero positivo como
argumento y retorne su factorial. El factorial de un número es el producto de todos los
números enteros positivos desde 1 hasta ese número.*/

function calcularFactorial(n) {
  let i = 1;
  let f = 1;
  while (i <= n) {
    f *= i;
    i += 1;
  }
  return f
}


console.log(calcularFactorial(6));