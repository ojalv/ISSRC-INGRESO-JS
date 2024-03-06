/*89. De ne una variable global llamada `nombre` y asígnale tu nombre. Luego, crea una
función llamada `saludarPersonalizado` que utilice la variable `nombre` para mostrar un
mensaje personalizado en la consola.*/

var nombre = "Alvaro";
function saludarPersonalizado(){
    console.log(`Hola ${nombre}, todo bien?`);
}

saludarPersonalizado()