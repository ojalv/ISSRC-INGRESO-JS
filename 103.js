/*103. Crea una función llamada `buscarLibro` que tome un objeto con propiedades `libros`
(un arreglo de objetos de libros) y un `titulo` como argumento, y devuelva el objeto del
libro con ese título.*/

function buscarLibro(coleccion, titulo) {
  for (const libro of coleccion.libros) {
    if (titulo == libro.titulo) {
      return libro;
    }
  }
  console.log("libro no encontrado");
  return undefined;
}

coleccionA = {
  libros: [
    {
      titulo: "don quijote",
      isbn: "1",
      autor: "Miguel de Cervantes Saavedra",
    },
    {
      titulo: "el color que cayo del cielo",
      isbn: "2",
      autor: "Howard Phillips Lovecraft",
    },
    {
      titulo: "la biblia",
      isbn: "3",
      autor: "Desconocido",
    },
    {
      titulo: "viaje al centro de la tierra",
      isbn: "4",
      autor: "Julio Verne",
    },
  ],
  revistas: [],
};

console.log(buscarLibro(coleccionA, "el color que cayo del cielo"));
