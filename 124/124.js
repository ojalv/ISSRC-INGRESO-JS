/*124. Define una función llamada `buscarIndice` que 
tome un array y un elemento como argumentos, y 
devuelva el índice de ese elemento en el array.*/

function buscarIndice(array, elementoBuscado) {
  return array.findIndex((elementoActual) => {
    return String(elementoActual) == String(elementoBuscado);
  });
}

let array = [1, 1, 2, 5, 4, 8, ",", "asd", { coso: "1" }];
console.log(buscarIndice(array, { coso: "1" }));
