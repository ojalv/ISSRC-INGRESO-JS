/*102. Define una función llamada `calcularPromedioNotas` 
que acepte un objeto con una propiedad `notas` (un arreglo de números) 
y calcule el promedio de esas notas.*/

function calcularPromedioNotas(clase) {
  suma = 0;
  if (clase.notas.length > 0) {
    for (const i of clase.notas) {
      suma += i;
    }
    return suma / clase.notas.length;
  } else return suma;
}

claseA = {
  notas: [7, 9, 8, 6, 5, 4],
  };

console.log(calcularPromedioNotas(claseA))


