import { API_BASE_URL } from "../constants/constants.js";
import { getUser } from "../fetch/getUser.js";
import { loadKey } from "../storage/local-storage.js";
import { putMedia } from "../fetch/putMedia.js";

const profileContainer = document.querySelector("#profile-container");
const name = loadKey("data");
const userData = await getUser(API_BASE_URL + `/auction/profiles/${name.name}`);
console.log(userData);

profileContainer.innerHTML = `              
<div class="row ">
<div class="col-lg-6 bg-light  d-flex flex-column">
<img src="${userData.avatar}" class="card-img" alt="Your profile picture" onerror="this.alt='No avatar uploaded'">
<label for="avatar-link">Update avatar link</label>
<input type="text" class="form-control my-2" id="avatar-link" name="avatar-link" />
<button class="btn btn-primary" id="upload-avatar">Change Avatar</button>
<p id="message-container"></p>
</div>
<div class="col-lg-6 bg-light d-flex flex-column">
<p class="text-secondary">Hello,</p>
<h2>${userData.name}</h2>
<hr />
<p>Your Credits: ${userData.credits}</p>
</div>
</div>`;

const changeAvatar = document.querySelector("#upload-avatar");

const userName = userData.name;
const targetUrl = API_BASE_URL + `/auction/profiles/${userName}/media`;
console.log(targetUrl);

changeAvatar.addEventListener("click", (event) => {
  event.preventDefault();
  const avatarUrlInput = document.querySelector("#avatar-link");
  const avatarUrl = avatarUrlInput.value;
  putMedia(targetUrl, avatarUrl);
});
