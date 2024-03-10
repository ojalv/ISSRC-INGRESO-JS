/*108. Define una función llamada `calcularEdadPromedio` 
que tome un objeto con propiedades `personas`
(un arreglo de objetos de personas con nombres y edades) y
calcule el promedio de edades.*/

function calcularEdadPromedio(curso) {
  let sumaEdades = 0;
  if (curso.personas.length > 0) {
    curso.personas.forEach((persona) => {
      sumaEdades += persona.edad;
    });
    return sumaEdades / curso.personas.length;
  } else {
    console.log("array vacio");
  }
}

const cursoA = {
  personas: [
    {
      nombre: "alvaro",
      edad: 24,
    },
    {
      nombre: "juan",
      edad: 30,
    },
    {
      nombre: "bautista",
      edad: 17,
    },
    {
      nombre: "raquel",
      edad: 15,
    },
    {
      nombre: "mariana",
      edad: 60,
    },
  ],
};

const cursoB = {
  personas: [],
};

console.log(calcularEdadPromedio(cursoA));
console.log(calcularEdadPromedio(cursoB));
