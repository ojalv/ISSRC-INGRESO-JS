/*135. Crea un objeto JSON que represente información de productos, incluyendo
`nombre`, `precio`, y `stock`. Calcula el valor total de los productos en stock.*/

const objetoJSON = {
  productos: [
    {
      "nombre": "Producto 1",
      "precio": 10.99,
      "stock": 100,
    },
    {
      "nombre": "Producto 2",
      "precio": 20.49,
      "stock": 50,
    },
    {
      "nombre": "Producto 3",
      "precio": 15.79,
      "stock": 75,
    },
  ],
};

let total = 0;

objetoJSON.productos.forEach((producto) => {
  total += producto.precio * producto.stock;
});

console.log(`El valor total de los productos en stock es ${total.toFixed(2)}`);