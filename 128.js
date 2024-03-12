/*128. Crea una matriz de calificaciones de estudiantes.
Utiliza un bucle anidado para calcular el promedio de calificaciones de cada estudiante 
y muestra los promedios en la consola. */

let matrizCalificaciones = [
  [100, 20, 30, 40],
  [50, 60, 70, 80],
  [90, 100, 10, 70],
  [70, 40, 25, 50],
];
let suma = 0;

for (let i = 0; i < matrizCalificaciones.length; i++) {
  for (let j = 0; j < matrizCalificaciones[i].length; j++) {
    suma += matrizCalificaciones[i][j];
  }
  console.log(
    `Promedio de calificaciones del estudiante${i}: ${
      suma / matrizCalificaciones[i].length
    }`
  );
  suma = 0;
}
