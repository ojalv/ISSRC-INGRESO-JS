email = document.getElementById("email");
const invalidEmail = document.getElementById("invalid-email");
const validEmail = document.getElementById("valid-email");

function validateEmail(email) {
  // Expresión regular para validar un correo electrónico
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

email.addEventListener("keyup", () => {
  if (validateEmail(email.value)) {
    validEmail.classList.remove("inactive");
    invalidEmail.classList.add("inactive");
  } else {
    validEmail.classList.add("inactive");
    invalidEmail.classList.remove("inactive");
  }
});
