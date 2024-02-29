/*68- De ne una función llamada esPalindromo que tome una cadena de texto como
argumento y determine si es un palíndromo. Un palíndromo es una palabra o frase que se
lee igual de izquierda a derecha y de derecha a izquierda, ignorando espacios y signos de
puntuación.*/

function esPalindromo(palabra) {
  let espejo;
  palabra = palabra.toLowerCase().replace(/[.,; ]/g, "");
  espejo = palabra.split("").reverse().join("");

  return palabra === espejo ? console.log(`${palabra} es palindromo porque al revez se lee ${espejo}, que es lo mismo`) : console.log(`${palabra} no es palindromo porque al revez se lee ${espejo}, y no es lo mismo`);
}

esPalindromo("neu quen");
esPalindromo("q u e . s;o");
