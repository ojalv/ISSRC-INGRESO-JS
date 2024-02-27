/*62- De ne una función llamada invierteCadena que tome una cadena de texto como
argumento y retorne una nueva cadena con los caracteres en orden inverso.*/

function invierteCadena(cadena) {
  let nuevaCadena = "";

  for (let i = cadena.length - 1; i >= 0; i--) {
    nuevaCadena += cadena[i];
  }
  return nuevaCadena;
}

console.log(invierteCadena("hablo al revez"));
