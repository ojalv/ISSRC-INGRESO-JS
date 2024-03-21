/*143. Formulario de Registro:
Diseña un formulario de registro en HTML con campos como nombre, correo electrónico y
contraseña. Utiliza JavaScript para validar los campos y mostrar mensajes de error. Aplica
estilos CSS para resaltar los campos incorrectos.*/
const form = document.getElementById("register-form");
const userName = document.getElementById("first-name");
const userLastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const formInfo = document.getElementById("form-inputs-info");

// flags que indican si los inputs son validos
let userNameOk = false;
let userLastNameOk = false;
let emailOk = false;
let passwordOk = false;

/* Funciones de valiacion */

function validateName(name) {
  // Expresión regular que coincide con cualquier caracter que no sea letra, numero o espacio
  let regex = /[^\w\s]/;
  return !regex.test(name);
}
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

/* Listeners */

// Listener del submit del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // evitamos el comportamiento por defecto

  /*Si todos los inputs del formulario son validos*/
  if (userNameOk && userLastNameOk && emailOk && passwordOk) {
    alert("formulario enviado"); //indicamos al usuario que el formulario fue enviado (con todos los campos validos)
  }
});

// Listener del input del nombre
userName.addEventListener("keyup", () => {
  formInfo.classList.remove("inactive");
  if (validateName(userName.value)) {
    document.querySelector("#name-status").classList.add("inactive");
    userNameOk = true;
  } else {
    document.querySelector("#name-status").classList.remove("inactive");
    document.querySelector("#name-status").innerText =
      "nombre invalido: no utilice caracteres especiales";
    userNameOk = false;
  }
});

// Listener del input del apellido
userLastName.addEventListener("keyup", () => {
  formInfo.classList.remove("inactive");
  if (validateName(userLastName.value)) {
    document.querySelector("#last-name-status").classList.add("inactive");
    userLastNameOk = true;
  } else {
    document.querySelector("#last-name-status").classList.remove("inactive");
    document.querySelector("#last-name-status").innerText =
      "apellido invalido: no utilice caracteres especiales ni numeros";
    userLastNameOk = false;
  }
});

// Listener del input del email
email.addEventListener("keyup", () => {
  formInfo.classList.remove("inactive");
  if (validateEmail(email.value)) {
    document.querySelector("#email-status").classList.add("inactive");
    emailOk = true;
  } else {
    document.querySelector("#email-status").classList.remove("inactive");
    document.querySelector("#email-status").innerText =
      "email invalido: por favor ingrese un email valido";
    emailOk = false;
  }
});

// Listener del input de la contraseña
password.addEventListener("keyup", () => {
  formInfo.classList.remove("inactive");
  if (validatePassword(password.value)) {
    document.querySelector("#password-status").classList.add("inactive");
    passwordOk = true;
  } else {
    document.querySelector("#password-status").classList.remove("inactive");
    document.querySelector("#password-status").innerText =
      "contraseña invalida: la contraseña debe tener al menos 8 caracteres, una mayuscula y 2 numeros";
    passwordOk = false;
  }
});
