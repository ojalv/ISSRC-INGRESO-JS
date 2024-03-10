/*106. Define una función llamada `contarVocales` que tome un objeto con propiedades
`texto` y cuente cuantas vocales (a,e,i,o,u) hay en el texto */
const objetoA = {
  texto: "hola como estas?",
};

function contarVocales(objeto) {
  let vocalesContadas = 0;
  let arrayTexto = objeto.texto.split("");
  arrayTexto.forEach((letra) => {
    if ("aeiou".includes(letra)) {
      vocalesContadas += 1;
    }
  });
  return console.log(`Hay ${vocalesContadas} vocales en el texto`);
}

contarVocales(objetoA);
