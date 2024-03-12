/*El recibidor de granos de la Cooperativa La Perdedora, hará la apertura de la 
cosecha con un ingreso de Maíz de 3000 toneladas. Necesito ver si en el silo hay 
maíz en stock y que luego de descargar me informe el stock actualizado.
*/

/*Instancias (datos de entrada)*/
// 1. ingresan 3000 toneladas de maiz al silo
// 2. al silo puede tener ingresos y descargas de maiz medido en toneladas

/*Problema */
//1. saber el stock del silo antes y despues de ingresar maiz
//2. saber el stock del silo antes y despues de retirar maiz

/*Solucion*/
//1. crear una variable llamada silo y asignarle el valor 0 (el silo esta vacio)
//2. crear una funcion llamda "stockMaiz" que reciba la variable silo como parametro e imprima su stock
//3. crear una funcion llamda "ingresoMaiz" que reciba las variable silo e ingreso como parametro; dentro de la funcion:
//3.1 asigna el valor de silo + ingreso a la variable silo
//3.2 llama a la funcion "stockMaiz" pasandole la variable silo como parametro (muestra el stock actual)
//3.3 retorna silo
//4. crear una funcion llamada "retiroMaiz" que reciba las variables silo y retiro como parametro; dentro de la funcion:
//4.1 asigna el valor de silo - retiro a la variable silo
//4.2 llama a la funcion "stockMaiz" pasandole la variable silo como parametro (muestra el stock actual)
//4.4 retorna silo
//6. llamar a la funcion "stockMaiz" antes de hacer un ingreso o una descarga de maiz para verificar su stock
//5. llamar a la funcion "ingresoMaiz" con la variable silo y "las toneladas que se deseen ingresar" como parametros, cada vez que ingresen maiz al silo
//7. llamar a la funcion "retiroMaiz" con las variables silo y "las toneladas que se deseen retirar" como parametro, cada vez que retiren maiz del silo

// el silo comienza vacio
var silo = 0;

function stockMaiz(silo) {
  if (silo > 0) {
    console.log(`Hay ${silo} toneladas de maiz en el silo`);
  } else {
    console.log("El silo esta vacio");
  }
}

function ingresoMaiz(silo, ingreso) {
  silo = silo + ingreso;
  stockMaiz(silo);
  return silo;
}

function retiroMaiz(silo, retiro) {
  silo = silo - retiro;
  stockMaiz(silo);
  return silo;
}

// se comprueba si el silo esta vacio
stockMaiz(silo);

// se ingresan 3000 toneladas de maiz al silo y se muestra el stock actualizado
silo = ingresoMaiz(silo, 3000);

// se comprueba el stock del silo
stockMaiz(silo);

// se retiran 250 toneladas de maiz del silo y se muestra el stock actualizado
silo = retiroMaiz(silo, 250);
