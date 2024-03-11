/*127. Define una función llamada `encontrarMayor` que tome una matriz
 de números como argumento y devuelva el número mayor de la matriz.*/

function encontrarMayor(matriz) {
  let mayor = matriz[0][0];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      // console.log(matriz[i][j]);
      if (matriz[i][j] > mayor) {
        mayor = matriz[i][j];
      }
    }
  }
  return mayor;
}

let matrizNumeros = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(encontrarMayor(matrizNumeros));
