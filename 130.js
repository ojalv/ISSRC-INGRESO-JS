/*130. Crea una matriz de objetos donde cada objeto represente un producto con
propiedades como `nombre`, `precio`, y `cantidad`. Calcula el valor total de todos los
productos en la matriz.*/

let productos = [
  { nombre: "Producto1", precio: 10, cantidad: 5 },
  { nombre: "Producto2", precio: 20, cantidad: 3 },
  { nombre: "Producto3", precio: 15, cantidad: 8 },
];

let total = 0;

for (let i = 0; i < productos.length; i++) {
  total += productos[i].precio;
}

console.log(total);
