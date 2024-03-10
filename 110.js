/*110. De ne una función llamada `calcularDescuento`
que tome un objeto con propiedades
`precio` y `descuento` y calcule el precio después de 
aplicar el descuento.*/

function calcularDescuento(producto) {
  return producto.precio - (producto.precio * producto.descuento) / 100;
}

producto1 = {
  precio: 100,
  descuento: 50,
};

producto2 = {
  precio: 200,
  descuento: 10,
};

producto3 = {
  precio: 100,
  descuento: 70,
};

console.log(calcularDescuento(producto1));
console.log(calcularDescuento(producto2));
console.log(calcularDescuento(producto3));
