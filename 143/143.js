/*143. Formulario de Registro:
Diseña un formulario de registro en HTML con campos como nombre, correo electrónico y
contraseña. Utiliza JavaScript para validar los campos y mostrar mensajes de error. Aplica
estilos CSS para resaltar los campos incorrectos.*/
const form = document.getElementById("register-form");
const userName = document.getElementById("first-name");
const userLastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formInfo = document.getElementById("form-info");
//nombre sin caracteres especiales
function validateName(name) {
  // Expresión regular que coincide con cualquier caracter que no sea letra, numero o espacio
  let regex = /[^\w\s]/;
  return !regex.test(name);
}
//email valido
function validateEmail(email) {
  // Expresión regular para validar un correo electrónico
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//contraseña segura (al menos 8 caracteres; al menos una mayuscula; al menos 2 numeros)
function validatePassword(password) {
  // Expresión regular que verifica si la contraseña cumple con los requisitos
  let regex = /^(?=.*[A-Z])(?=.*\d.*\d).{8,}$/;
  return regex.test(password);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

userName.addEventListener("keyup", (event) => {
  if (validateName(userName.value)) {
    console.log("nombre valido");
  } else {
    console.log("nombre invalido");
  }
});

userLastName.addEventListener("keyup", (event) => {
  if (validateName(userLastName.value)) {
    console.log("apellido valido");
  } else {
    console.log("apellido invalido");
  }
});

email.addEventListener("keyup", (event) => {
  if (validateEmail(email.value)) {
    console.log("email valido");
  } else {
    console.log("email invalido");
  }
});

password.addEventListener("keyup", (event) => {
  if (validatePassword(password.value)) {
    console.log("pass valida");
  } else {
    console.log("pass invalida");
  }
});
