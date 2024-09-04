import { registerUser } from "../register/registerUser.js";
import { API_BASE_URL } from "../../constants/constants.js";
import { displayMessage } from "../../utils/displayMessage.js";
import { refresh } from "../../utils/refreshPage.js";

export const registerUrl = `${API_BASE_URL}/auction/auth/register`;

const registerForm = document.querySelector("#register-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const securityPassword = document.querySelector("#security-password");

const registerContainer = document.querySelector("#register-container");

const nameErrorContainer = document.querySelector("#name-error-container");
const emailErrorContainer = document.querySelector("#email-error-container");
const passwordErrorContainer = document.querySelector("#password-error-container");
const securityPasswordErrorContainer = document.querySelector("#security-pass-error-container");

const isNameValid = () => {
  let valid = false;
  let regEx = /^(?=.{4,16}$)[a-zA-Z0-9_]+$/;

  if (regEx.test(name.value)) {
    valid = true;
  } else {
    valid = false;
  }
  return valid;
};

const isPasswordValid = () => {
  let valid = false;
  if (password.value.length <= 7) {
    valid = false;
  } else {
    valid = true;
  }

  console.log(password.value.length);
  return valid;
};

const isSecurityPasswordValid = () => {
  let valid = false;

  const passwordToMatch = password.value.trim();
  const securityPasswordToMatch = securityPassword.value.trim();
  if (passwordToMatch === securityPasswordToMatch) {
    valid = true;
  }
  return valid;
};

const isEmailValid = () => {
  let valid = false;

  if (email.value.includes("noroff.no" || "stud.noroff.no")) {
    valid = true;
  } else {
  }
  return valid;
};

registerForm.addEventListener("submit", (event) => {
  nameErrorContainer.innerHTML = "";
  emailErrorContainer.innerHTML = "";
  passwordErrorContainer.innerHTML = "";
  securityPasswordErrorContainer.innerHTML = "";
  registerContainer.innerHTML = "";
  event.preventDefault();
  const formData = new FormData(event.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  let isFormValid = isEmailValid() && isPasswordValid() && isSecurityPasswordValid() && isNameValid();

  if (isFormValid === true) {
    registerUser(registerUrl, formProps);
    displayMessage(registerContainer, `Registration success! You can now head to the <a href="/login">log in page.</a>`, "success");
  } else {
    displayMessage(registerContainer, "Please check your inputs, and try again.", "danger");
  }
  if (isNameValid() === false) {
    displayMessage(nameErrorContainer, "Invalid username, please check if it matches the requirements.", "danger");
  }
  if (isEmailValid() === false) {
    displayMessage(emailErrorContainer, "Invalid email, please check if it is a valid Noroff email.", "danger");
  }
  if (isPasswordValid() === false) {
    displayMessage(passwordErrorContainer, "Password is less than 8 characters.", "danger");
  }
  if (isSecurityPasswordValid() === false) {
    displayMessage(securityPasswordErrorContainer, "Password doesn't match", "danger");
  }
});
