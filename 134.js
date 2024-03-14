/*134. De ne una función llamada ` ltrarPorEdad` que tome una lista de objetos JSON
(representando personas) y un valor de edad. La función debe devolver una lista de las
personas que tienen esa edad.*/

function filtrarPorEdad(listaPersonasJSON, edad) {
  let coincidencias = [];
  listaPersonasJSON.forEach((personaJSON) => {
    if (personaJSON.edad === edad) {
      coincidencias.push(personaJSON);
    }
  });
  return coincidencias;
}

const personasJSON = [
  {
    "nombre": "Juan Perez",
    "edad": 25,
    "documento": "12345678"
  },
  {
    "nombre": "Maria Rodriguez",
    "edad": 30,
    "documento": "23456789"
  },
  {
    "nombre": "Carlos Gomez",
    "edad": 40,
    "documento": "34567890"
  },
  {
    "nombre": "Luisa Martinez",
    "edad": 35,
    "documento": "45678901"
  },
  {
    "nombre": "Ana Lopez",
    "edad": 30,
    "documento": "56789012"
  }
]

console.log(filtrarPorEdad(personasJSON,30));