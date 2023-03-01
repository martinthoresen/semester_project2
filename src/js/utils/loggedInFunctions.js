import { loadKey } from "../storage/local-storage.js";

const logOut = document.querySelector("#loggedin-logout");
const yourProfile = document.querySelector("#loggedin-profile");
const newListing = document.querySelector("#loggedin-newlisting");
const credit = document.querySelector("#loggedin-credit");
const logIn = document.querySelector("#loggedin-login");

export function isLoggedIn() {
  const token = loadKey("accessToken");
  if (!token) {
    logOut.innerHTML = "";
    yourProfile.innerHTML = "";
    newListing.innerHTML = "";
    credit.innerHTML = "";
    logIn.innerHTML = "Log in";
  } else {
    console.log("User is logged in.");
  }
}
