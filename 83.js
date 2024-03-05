/*83. De ne una función llamada `esPar` que tome un número como argumento y devuelva
`true` si es par o `false` si es impar.*/
function esPar(n) {
  if (n % 2 === 0) {
    return true;
  } else if (n % 2 === 1) {
    return false;
  }
}


console.log(esPar(3)); //false
console.log(esPar(10)); //true