import { API_BASE_URL } from "../constants/constants.js";
export const loginUrl = `${API_BASE_URL}/auction/auth/login`;
import { saveKey } from "../storage/local-storage.js";
import { displayMessage } from "../utils/displayMessage.js";

const loginForm = document.querySelector("#login-form");
const loginContainer = document.querySelector("#login-container");

async function loginUser(url, data) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, postData);
    const json = await response.json();
    console.log(json);

    if (response.ok === true) {
      console.log(response);
      const accessToken = json.accessToken;
      saveKey("accessToken", accessToken);
      saveKey("data", data);
      window.location.replace("/listings");
    } else {
      displayMessage(loginContainer, json.errors[0].message, "danger");
    }
  } catch (error) {
    console.log(error);
  }
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData);
  const formProps = Object.fromEntries(formData);

  loginUser(loginUrl, formProps);
});
