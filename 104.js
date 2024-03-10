/* 104. Define una función llamada `filtrarProductos` que tome un objeto con propiedades
 `productos` (un arreglo de objetos de productos) y un `precioMaximo` como argumento, y
devuelva un nuevo arreglo con los productos que tienen un precio menor o igual al valor
dado.*/

function filtrarProductos(eCommerce, precioMaximo) {
  productosFiltrados = [];
  eCommerce.productos.forEach((producto) => {
    if (producto.precio <= precioMaximo) {
      productosFiltrados.push(producto);
    }
  });
  return productosFiltrados;
}

eCommerceA = {
  productos: [
    {
      id: 0,
      nombre: "moto usada",
      precio: 500,
    },
    {
      id: 0,
      nombre: "auto nuevo",
      precio: 9000,
    },
    {
      id: 0,
      nombre: "bicicleta roja",
      precio: 250,
    },
    {
      id: 0,
      nombre: "monopatin reliquia",
      precio: 600,
    },
  ],
};

console.log(filtrarProductos(eCommerceA, 500));
