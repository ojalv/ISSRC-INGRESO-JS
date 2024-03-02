/*75. Escribe un bucle `for` que recorra los números del 1 al 20. Dentro del bucle, veri ca si
cada número es par o impar y muestra un mensaje correspondiente en la consola.*/

for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} => par`);
  } else if (i % 2 == 1) {
    console.log(`${i} => impar`);
  }
}
