/*86. De ne una variable global llamada `contador` con un valor inicial de 0. Luego, crea
una función llamada `incrementarContador` que incremente `contador` en 1 cada vez que
se llame y muestre el valor actual en la consola.*/

var contador = 0;

function incrementarContador(){
    contador ++

    console.log(`Contador: ${contador}`);
}

incrementarContador();
incrementarContador();
incrementarContador();
incrementarContador();

