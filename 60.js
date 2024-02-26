/*60. De ne tres variables `lado1`, `lado2` y `lado3` que representen las longitudes de los
lados de un triángulo. Escribe una estructura condicional para determinar si el triángulo es
equilátero (todos los lados iguales), isósceles (dos lados iguales), o escaleno (ningún lado
igual).*/

var lado1, lado2, lado3;

lado1 = 3;
lado2 = 7;
lado3 = 1;

if ((lado1 == lado2) & (lado2 == lado3)) {
  console.log("Triangulo equilatero");
} else {
  if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("Triangulo Isosceles");
  } else {
    console.log("Triangulo escaleno");
  }
}
