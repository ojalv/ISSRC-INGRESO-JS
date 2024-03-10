/*105. Crea una función llamada `calcularTotalCompra` que tome un objeto con
propiedades `carrito` (un objeto con productos y cantidades) y `productos` (un objeto con
productos y precios) como argumentos, y devuelva el total de la compra.*/

const informacionCompra = {
  carrito: [
    { nombre: "Producto 1", cantidad: 2 },
    { nombre: "Producto 2", cantidad: 1 },
    { nombre: "Producto 3", cantidad: 3 },
  ],
  productos: [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 15 },
    { nombre: "Producto 3", precio: 30 },
    { nombre: "Producto 4", precio: 99 },
  ],
};

function calcularTotalCompra(informacionCompra) {
  totalCompra = 0;
  informacionCompra.carrito.forEach((productoCarrito) => {
    let producto = informacionCompra.productos.find(
      (producto) => producto.nombre === productoCarrito.nombre
    );

    totalCompra += producto.precio * productoCarrito.cantidad;
  });
  return totalCompra;
}

console.log(calcularTotalCompra(informacionCompra));
