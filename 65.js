/*De ne una función llamada esPangrama que tome una cadena de texto como
argumento y determine si es un pangrama. Un pangrama es una frase que contiene todas
las letras del alfabeto al menos una vez.*/

function esPangrama(texto) {
  let letrasFaltantes = "abcdefghijklmnopqrstuvwxyz";
  letrasFaltantes = letrasFaltantes.split("");

  for (const value of texto.toLowerCase()) {
    if (letrasFaltantes.includes(value)) {
      letrasFaltantes.splice(letrasFaltantes.indexOf(value), 1);
    }
  }
  return letrasFaltantes.length === 0
}
console.log(esPangrama("es AAAA pangrama"));
console.log(esPangrama("abcdefghijklmnopqrstuvwxyz"));
console.log(
  esPangrama(
    " Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol."
  )
);
