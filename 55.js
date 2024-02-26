/*55. Crea una variable llamada `color` y asígnale el nombre de un color. Utiliza una serie
de declaraciones `if...else if` para determinar si el color es "Rojo," "Verde," o "Azul," y
muestra un mensaje correspondiente en la consola.*/

var color = "azu";

if (color == "rojo") {
  console.log("Color rojo");
} else {
  if (color == "verde") {
    console.log("color verde");
  } else {
    if (color == "azul") {
      console.log(`color azul`);
    } else {
      console.log(
        "No tengo idea de que color es este, tal vez ni siquiera sea un color"
      );
    }
  }
}
