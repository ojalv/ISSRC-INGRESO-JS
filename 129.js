/*129. Define una función llamada `comprobarDiagonal` 
que tome una matriz cuadrada (misma cantidad de filas y columnas) 
y devuelva `true` si todos los elementos en la 
diagonal principal son iguales, o `false` en caso contrario. */

function comprobarDiagonal(matriz) {
  let m = matriz.length;
  let n = matriz[0].length;
  let diagonal = false;

  if (m === n) {
    for (let i = 0; i < m - 1; i++) {
      if (matriz[i][i] !== matriz[i + 1][i + 1]) {
        console.log(
          "\nLos elementos de la diagonal principal no son todos iguales"
        );
        return diagonal;
      }
    }
    diagonal = true;
    console.log("\nTodos los elementos de la diagonal principal son iguales");
    return diagonal;
  } else {
    console.log("\nLa matriz no es cuadrada");
    return diagonal;
  }
}

let matrizA = [
  [100, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 10, 70],
  [70, 40, 25, 50],
];

let matrizB = [
  [100, 20, 30, 40],
  [50, 100, 70, 80],
  [90, 100, 100, 70],
  [70, 40, 25, 100],
];

let matrizC = [
  [0, 20, 30, 40],
  [50, 0, 70, 80],
  [90, 100, 1, 70],
  [70, 40, 25, 0],
];

let matrizD = [
  [100, 20],
  [50, 60],
  [90, 100],
  [70, 40],
];

let matrizE = [
  [0, 20],
  [50, 0],
];

let matrizF = [
  [0, 20],
  [50, 1],
];

let matrizG = [
  [0, 20, 30],
  [50, 1, 30],
];

comprobarDiagonal(matrizA);
comprobarDiagonal(matrizB);
comprobarDiagonal(matrizC);
comprobarDiagonal(matrizD);
comprobarDiagonal(matrizE);
comprobarDiagonal(matrizF);
comprobarDiagonal(matrizG);
