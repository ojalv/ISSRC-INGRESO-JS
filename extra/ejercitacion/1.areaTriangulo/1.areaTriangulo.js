/*Calcular el área de un triángulo.*/

// Supongamos que conocemos la base y la altura del triangulo

// valida que el dato ingresado sea un numero
function ingresoNumero(mensaje) {
  let dato;
  console.log(dato);

  while (isNaN(parseFloat(dato))) {
    dato = window.prompt(`${mensaje}`);
  }
  return parseFloat(dato);
}
// calcula el area del triangulo
function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// ingreso de la base
base = ingresoNumero("Ingresa la base");

// ingreso de la altura
altura = ingresoNumero("Ingresa la altura");

alert(`El area del triangulo es ${calcularAreaTriangulo(base, altura)}`);
