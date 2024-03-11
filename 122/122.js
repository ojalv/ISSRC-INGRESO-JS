/*122. Define una función llamada `sumarElementos` 
que tome un array de números como argumento y 
devuelva la suma de todos los elementos*/

function sumarElementos(numeros) {
  let suma = 0;
  numeros.forEach((numero) => {
    suma += numero;
  });
  return suma;
}

let numeros = [1, 2, 3, 4, 5, 5, 10];

console.log(sumarElementos(numeros));
