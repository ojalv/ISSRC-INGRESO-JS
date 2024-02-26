/*59. Crea una variable `hora` y asígnale una hora en formato de 24 horas. Escribe una
estructura condicional para mostrar "Buenos días", "Buenas tardes" o "Buenas noches" en
función de la hora*/

var hora = 5;

if (hora >= 6 && hora < 13) {
  console.log("Buenos dias");
} else {
  if (hora >= 13 && hora < 20) {
    console.log("Buenas tardes");
  } else {
    if ((hora >= 20 && hora <= 24) || (hora >= 0 && hora < 6)) {
      console.log("Buenas Noches");
    }
  }
}
