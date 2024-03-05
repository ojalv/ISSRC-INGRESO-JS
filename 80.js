/*80. De ne un arreglo de números y utiliza un bucle `for` para encontrar el número más
grande en el arreglo y mostrarlo en la consola.*/

let array = [2, 3, 5, 100, 7, 1, 4, 8, 5, 3, 1];
let bigger = array.length > 0 ? array[0] : undefined;
if (bigger != undefined) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > bigger) {
      bigger = array[i + 1];
    }
  }
}
console.log(bigger);
