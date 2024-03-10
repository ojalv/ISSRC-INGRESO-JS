/*107. Crea una función llamada `filtrarCiudades` que tome un objeto con propiedades `ciudades` 
(un arreglo de objetos de ciudades con población y país) y un `pais` como
argumento, y devuelva un nuevo arreglo con las ciudades que pertenecen al país dado.*/

function filtrarCiudades(mapamundi, nombrePais) {
  return mapamundi.ciudades.filter(function (ciudad) {
    return ciudad.pais == nombrePais;
  });
}

const mapamundi = {
  ciudades: [
    {
      nombre: "santa rosa de calamuchita",
      poblacion: 23045,
      pais: "argentina",
    },
    {
      nombre: "embalse",
      poblacion: 40182,
      pais: "argentina",
    },
    {
      nombre: "santa rita",
      poblacion: 15065,
      pais: "argentina",
    },
    {
      nombre: "caracas",
      poblacion: 1058085,
      pais: "venezuela",
    },
    {
      nombre: "brasilia",
      poblacion: 2655844,
      pais: "brasil",
    },
  ],
};

console.log(filtrarCiudades(mapamundi, "venezuela"));
