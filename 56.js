/*56. Crea una variable llamada `cali cacion` y asígnale un valor numérico entre 0 y 100.
Utiliza una estructura condicional `if...else if...else` para mostrar en la consola si la
cali cación es "Excelente," "Aprobado," o "Reprobado" según un rango de cali caciones.*/
var calificacion = 90;

/*
Excelente == 100
Aprobado >= 60
Reprobado < 60
*/

if (calificacion == 100) {
  console.log("Como diria el señor Burns 'Excelente'");
} else {
  if (calificacion >= 60) {
    console.log("Aprobado");
  } else {
    if (calificacion < 60) {
      console.log("Reprobado");
    } else {
      console.log("No se que es eso");
    }
  }
}
