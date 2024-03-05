/*85. Escribe una función llamada `revertirTexto` que tome una cadena de texto como
argumento y devuelva la cadena invertida.*/

function revertirTexto(texto) {
  if (typeof texto === typeof "") {
    texto = texto.split("");
    espejo = [];
    for (let i = texto.length - 1; i >= 0; i--) {
      espejo.push(texto[i]);
    }
    return espejo.join("");
  }
}

console.log(revertirTexto("hola"));
