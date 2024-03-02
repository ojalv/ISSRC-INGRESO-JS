/*77. De ne un objeto con información de productos, como nombres y precios. Utiliza un
bucle `for...in` para mostrar los nombres y precios de los productos en la consola.*/

let productos = {
  manzanas: 2.5,
  peras: 3.2,
  naranjas: 2,
  kiwis: 7,
  uvas: 1.5,
  pomelos: 3,
};

for(const producto in productos){
    console.log(`producto: ${producto} - precio: ${productos[producto]}`)
}