/*136. De ne una función llamada `ordenarPorPrecio` que tome una lista de objetos JSON
(representando productos) y ordene la lista por precio de forma ascendente o
descendente según un argumento.*/

function ordenarPorPrecio(productosJSON, ascendente = true) {
  if (ascendente) {
    return productosJSON.sort((a, b) => a.precio - b.precio);
  } else {
    return productosJSON.sort((a, b) => b.precio - a.precio);
  }
}

const productosJSON = [
  {
    "nombre": "Producto 1",
    "precio": 20.5,
    "stock": 100
  },
  {
    "nombre": "Producto 2",
    "precio": 15,
    "stock": 50
  },
  {
    "nombre": "Producto 3",
    "precio": 30,
    "stock": 75
  }
]

console.log(ordenarPorPrecio(productosJSON, true));
console.log(ordenarPorPrecio(productosJSON, false));
console.log(ordenarPorPrecio(productosJSON));
