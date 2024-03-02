/*76. Crea un arreglo de palabras y utiliza un bucle `for` para concatenar todas las palabras
en una sola cadena y mostrarla en la consola.*/

let palabras = ['queso', 'salame', 'televisor', 'espacio', 'camuflaje']
let cadena =''
for(let i=0; i<palabras.length; i++){
    cadena+=palabras[i]
}

console.log(cadena);