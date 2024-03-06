/*Crea una función llamada `calcularDescuento` que tome un precio y un porcentaje de
descuento como argumentos. La función debe calcular el precio nal con descuento y
mostrarlo en la consola.*/

function calcularDescuento(precio,descuento){
    console.log(`precio: ${precio}\ndescuento: ${descuento}%\ntotal: ${precio - (precio*descuento/100)}`);
}


calcularDescuento(100,20)