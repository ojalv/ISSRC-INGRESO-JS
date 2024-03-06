/*90. Crea una función llamada `crearLista` que tome un arreglo de elementos y devuelva
una lista ordenada (HTML) de esos elementos. Llama a la función con un arreglo de frutas
y muestra la lista en la consola.*/
function crearLista(arreglo) {
  let lista = `<ol>\n`;
  arreglo.forEach((elemento) => {
    lista += `<li>${elemento}</li>\n`;
  });
  lista += `</ol>`;
  return lista;
}

let frutas = ["manzana", "pera", "bananna", "kiwi", "uvas"];


console.log(crearLista(frutas))
