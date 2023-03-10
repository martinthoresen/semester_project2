import { loadKey } from "../storage/local-storage.js";

const logOut = document.querySelector("#loggedin-logout");
const yourProfile = document.querySelector("#loggedin-profile");
const newListing = document.querySelector("#loggedin-newlisting");
const credit = document.querySelector("#loggedin-credit");
const logIn = document.querySelector("#loggedin-login");

export function isLoggedIn() {
  const userData = loadKey("data");
  const userCredit = userData.credits;
  const token = loadKey("accessToken");
  if (token) {
    logOut.innerHTML = "Log Out";
    yourProfile.innerHTML = "Profile";
    newListing.innerHTML = `<i class="fa-solid fa-plus small"></i> New Listing`;
    credit.innerHTML = `Your Credit: ${userCredit}`;
    logIn.innerHTML = "";
  } else {
    logIn.innerHTML = "Log In";
  }
}
