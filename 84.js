/*84. Crea una función llamada `calcularPromedio` que acepte un arreglo de números como
argumento y devuelva el promedio de esos números.*/

let array = [1, 5, 47, 8, 22, 64, 5];

function calcularPromedio(array) {
  let sum = 0;
  if (array.length > 0) {
    for (let number of array) {
      sum += number;
    }
    return sum/array.length
  }
}

promedio = calcularPromedio(array);

console.log(`el promedio de ${array} es: \n${promedio}`);