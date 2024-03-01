/*69- Crea una función llamada ordenarArray que tome un arreglo de números como
argumento y retorne un nuevo arreglo con los números ordenados de manera
ascendente.*/

function ordenarArray(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
  
  const numeros = [5, 2, 9, 1, 500, 6];
  const numerosOrdenados = ordenarArray(numeros);
  console.log(numerosOrdenados); 