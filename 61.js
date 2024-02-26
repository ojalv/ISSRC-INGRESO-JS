/*61- Escribe una función llamada esPrimo que tome un número como argumento y retorne
true si es primo o false si no lo es. Un número primo es aquel que solo es divisible por 1 y
por sí mismo.*/

function esPrimo(n) {
  let i = Math.round(Math.sqrt(n));
  let flag = false

  if (n == 0) {
    console.log(`${n} no es primo, no es divisible por si mismo`);
  } else {
    if (n == 1 || n == 2) {
      console.log(`${n} es primo`);
    } else {
      if (n % 2 == 0) {
        console.log(
          `${n} no es primo, un numero par siempre es divisible por 2`
        );
      } else {
        if (n % i == 0) {
          console.log(`${n} no es primo, es divisible por su raiz cuadrada`);
        } else {
          if (Math.sqrt(n) >= 3) {
            while (i >= 3) {
              if (n % i == 0) {
                console.log(`${n} no es primo, ${n} es divisible por ${i}`);
                flag = true;
              }
              i = i - 1;
            }
            if (!flag) {
              console.log(
                `${n} es primo, solo es divisible por si mismo y por 1`
              );
            }
          }
        }
      }
    }
  }
}

esPrimo(915);
