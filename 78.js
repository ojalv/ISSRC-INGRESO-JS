/*78. Crea un bucle `while` que genere números aleatorios entre 1 y 10 hasta que se
genere un 7. Muestra los números generados en la consola.*/

let i = Math.floor(Math.random() * 100);

while (i != 7) {
  console.log(i);
  i = Math.floor(Math.random() * 100);
}
console.log(i);
