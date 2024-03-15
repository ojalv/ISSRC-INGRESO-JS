/*140. De ne una función llamada `actualizarPrecio` que tome una lista de objetos JSON
(representando productos) y un objeto JSON con `nombre` de producto y `nuevoPrecio`.
La función debe actualizar el precio del producto correspondiente en la lista.*/

function actualizarPrecio(productosJSON, nuevoPrecio) {
  productosJSON.forEach((producto) => {
    if (nuevoPrecio.nombre === producto.nombre) {
      return (producto.precio = nuevoPrecio.precio);
    }
  });
}

let productosJSON = [
  {
    "nombre": "Smartphone",
    "precio": 500
  },
  {
    "nombre": "Laptop",
    "precio": 1000
  },
  {
    "nombre": "Tablet",
    "precio": 300
  },
  {
    "nombre": "Smartwatch",
    "precio": 200
  },
  {
    "nombre": "Auriculares inalámbricos",
    "precio": 100
  }
]

const nuevoPrecioTablet = {
  "nombre":"Tablet",
  "precio":400
}

console.log(`${productosJSON[2].nombre} -- $${productosJSON[2].precio}`);

actualizarPrecio(productosJSON,nuevoPrecioTablet)

console.log(`${productosJSON[2].nombre} -- $${productosJSON[2].precio}`);
