/*132. De ne una función llamada `convertirAJSON` que tome un objeto JavaScript y lo
convierta a una cadena JSON. Luego, muestra la cadena JSON en la consola.*/
function convertirAJSON(objetoJS) {
  return JSON.stringify(objetoJS);
}

const objeto = {
  nombre: "Hector",
  edad: 23,
  curso: "A",
};

const objetoJSON = convertirAJSON(objeto);
// console.log(objeto);

console.log(objetoJSON);
