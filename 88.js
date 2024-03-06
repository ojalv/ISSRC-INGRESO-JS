/*Escribe una función llamada `calcularFactorial` que tome un número entero como
argumento y calcule su factorial (por ejemplo, `5! = 5 * 4 * 3 * 2 * 1`). Muestra el resultado
en la consola.*/

function calcularFactorial(n) {
  if (n % 1 === 0 && n >= 0) {
    let f = 1;
    if (n == 0) {
       console.log(f);
    } else {
      for (let i = 1; i <= n; i++) {
        f *= i
      }
      console.log(f);
    }
  }
}

calcularFactorial(-1) //no hace nada
calcularFactorial(0)
calcularFactorial(1)
calcularFactorial(2)
calcularFactorial(3)
calcularFactorial(4)
calcularFactorial(5)
calcularFactorial(15)
