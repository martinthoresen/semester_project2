import { API_BASE_URL } from "../constants/constants.js";
import { getUser } from "../fetch/getUser.js";
import { loadKey } from "../storage/local-storage.js";
import { putMedia } from "../fetch/putMedia.js";

const profileContainer = document.querySelector("#profile-container");
const name = loadKey("data");
const userData = await getUser(API_BASE_URL + `/auction/profiles/${name.name}`);
console.log(userData);

profileContainer.innerHTML = `              
<div class="row justify-content-between">
<div class="col-lg-6 bg-light py-5 justify-content-evenly d-flex flex-column">
<img src="${userData.avatar}" alt="Your profile picture" onerror="this.alt='No avatar uploaded'">
<label for="avatar-link">Update avatar link</label>
<input type="text" class="form-control my-2" id="avatar-link" name="avatar-link" />
<button class="btn btn-primary" id="upload-avatar">Change Avatar</button>
</div>
<div class="col bg-light py-5 col-lg-3 mx-1">
<p class="text-secondary">Hello,</p>
<h2>${userData.name}</h2>
<hr />
<p>Your Credits: ${userData.credits}</p>
</div>
</div>`;

const changeAvatar = document.querySelector("#upload-avatar");
const avatarUrlInput = document.querySelector("#avatar-link");
const userName = userData.name;
const targetUrl = `/auction/profiles/${userName}/media`;

changeAvatar.addEventListener("click", (event) => {
  event.preventDefault();

  putMedia(targetUrl, avatarUrlInput);
});
