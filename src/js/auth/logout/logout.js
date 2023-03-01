import { refresh } from "../../utils/refreshPage.js";
import { clearStorage } from "../../storage/local-storage.js";

const logoutButton = document.querySelector("#loggedin-logout");
logoutButton.addEventListener("click", (event) => {
  event.preventDefault();
  clearStorage();
});
