/*Escribe una función llamada contarPalabras que tome una cadena de texto como
argumento y retorne el número de palabras en esa cadena. Supón que las palabras están
separadas por espacios.*/

function contarPalabras(texto) {
  let l = texto.length;
  let c = "";
  let p = 0;

  for (let i = 0; i <= l; i++) {
    if (texto[i] != " " && (c == " " || c === "")) {
      p++;
    }
    c = texto[i];
  }

  return p;
}

console.log(`palabras del texto: ${contarPalabras("Hola mundo esto es una cadena")}`);
