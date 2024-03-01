/*70- Escribe una función llamada calcularFibonacci que tome un número entero positivo
como argumento y retorne el n-ésimo término de la secuencia de Fibonacci. La secuencia
de Fibonacci comienza con 0 y 1, y cada término subsiguiente es la suma de los dos
términos anteriores.*/

function calcularFibonacci(n) {
    if (n <= 0) {
      return "Ingrese un número entero positivo.";
    } else if (n === 1) {
      return 0;
    } else if (n === 2) {
      return 1;
    } else {
      let a = 0;
      let b = 1;
      let resultado = 0;
      for (let i = 2; i < n; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
      }
      return resultado;
    }
  }
  

console.log(calcularFibonacci(0));
console.log(calcularFibonacci(1));
console.log(calcularFibonacci(2));
console.log(calcularFibonacci(3));
console.log(calcularFibonacci(4));
console.log(calcularFibonacci(5));
console.log(calcularFibonacci(6));
console.log(calcularFibonacci(7));
console.log(calcularFibonacci(8));
console.log(calcularFibonacci(9));
console.log(calcularFibonacci(10));
console.log(calcularFibonacci(11));