/*139. Crea una cadena JSON que represente información de ciudades y sus poblaciones.
Utiliza JavaScript para calcular la población total de todas las ciudades en la cadena
JSON.*/

const ciudades = `[
  {
    "ciudad": "Buenos Aires",
    "poblacion": 2891000
  },
  {
    "ciudad": "Santiago",
    "poblacion": 7000000
  },
  {
    "ciudad": "Lima",
    "poblacion": 9550000
  },
  {
    "ciudad": "Ciudad de México",
    "poblacion": 8918653
  },
  {
    "ciudad": "Madrid",
    "poblacion": 3207247
  },
  {
    "ciudad": "Roma",
    "poblacion": 2872800
  },
  {
    "ciudad": "Nueva York",
    "poblacion": 8336817
  },
  {
    "ciudad": "Tokio",
    "poblacion": 9273000
  },
  {
    "ciudad": "Moscú",
    "poblacion": 12678079
  },
  {
    "ciudad": "Pekín",
    "poblacion": 21542000
  }
]`

let poblacionTotal = 0

JSON.parse(ciudades).forEach(ciudad => {
  poblacionTotal += ciudad.poblacion
});

console.log(poblacionTotal);