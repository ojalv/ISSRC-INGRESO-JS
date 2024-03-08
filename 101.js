/*101. Crea una función llamada `calcularAreaRectangulo` que tome un objeto con
propiedades `ancho` y `alto` y devuelva el área del rectángulo.*/

function calcularAreaRectangulo(rectangulo) {
  return rectangulo.ancho * rectangulo.alto;
}

rectangulo = { alto: 10, ancho: 10 };

console.log(calcularAreaRectangulo(rectangulo));