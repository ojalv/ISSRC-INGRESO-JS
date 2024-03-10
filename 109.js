/*109. Crea una función llamada `encontrarMayorEdad` que tome un objeto con
propiedades `personas` (un arreglo de objetos de personas con nombres y edades) y
encuentre la persona de mayor edad.*/

function encontrarMayorEdad(objeto) {
  let mayor = undefined;
  objeto.personas.forEach((persona) => {
    if (mayor == undefined) {
      mayor = persona;
    } else {
      if (mayor.edad < persona.edad) {
        mayor = persona;
      }
    }
  });
  return mayor;
}

const objetoA = {
  personas: [
    {
      nombre: "juan",
      edad: 134,
    },
    {
      nombre: "hector",
      edad: 24,
    },
    {
      nombre: "patricio",
      edad: 13,
    },
    {
      nombre: "roque",
      edad: 13,
    },
  ],
};

console.log(encontrarMayorEdad(objetoA));
