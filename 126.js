/*126. Crea una matriz (array bidimensional) llamada `matriz` que represente una tabla de
multiplicar del 2 al 5. Imprime esta matriz en la consola. */

let matriz = [
  [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
  [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
];

for (let i = 0; i <= matriz.length - 1; i++) {
  console.log(`\nTabla del ${i + 2}: \n`);
  for (let j = 0; j <= matriz[i].length - 1; j++) {
    console.log(`${i + 2} x ${j + 1} = ${matriz[i][j]}`);
  }
}
