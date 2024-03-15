/*138. De ne una función llamada `buscarPorDirector` que tome una lista de objetos JSON
(representando películas) y un nombre de director como argumentos. La función debe
devolver una lista de las películas dirigidas por ese director.*/

function buscarPorDirector(peliculasJSON, director) {
  coincidencias = [];
  peliculasJSON.forEach(pelicua => {
    if (director.toLowerCase() === pelicua.director.toLowerCase()) {
      coincidencias.push(pelicua)
    }
  });
  return coincidencias
}

const peliculasJSON = [
  {
    "nombre": "Titanic",
    "director": "James Cameron",
    "año": 1997
  },
  {
    "nombre": "El padrino",
    "director": "Francis Ford Coppola",
    "año": 1972
  },
  {
    "nombre": "La lista de Schindler",
    "director": "Steven Spielberg",
    "año": 1993
  },
  {
    "nombre": "Forrest Gump",
    "director": "Robert Zemeckis",
    "año": 1994
  },
  {
    "nombre": "El señor de los anillos: El retorno del rey",
    "director": "Peter Jackson",
    "año": 2003
  },
  {
    "nombre": "El rey león",
    "director": "Roger Allers, Rob Minkoff",
    "año": 1994
  },
  {
    "nombre": "La guerra de las galaxias",
    "director": "George Lucas",
    "año": 1977
  },
  {
    "nombre": "Avatar",
    "director": "James Cameron",
    "año": 2009
  },
  {
    "nombre": "Pulp Fiction",
    "director": "Quentin Tarantino",
    "año": 1994
  },
  {
    "nombre": "El bueno, el malo y el feo",
    "director": "Sergio Leone",
    "año": 1966
  }
]


console.log(buscarPorDirector(peliculasJSON,"james cameron"));