import { API_BASE_URL } from "../constants/constants.js";
import { getUser } from "../fetch/getUser.js";
import { loadKey } from "../storage/local-storage.js";

const profileContainer = document.querySelector("#profile-container");
const name = loadKey("data");
const userData = await getUser(API_BASE_URL + `/auction/profiles/${name.name}`);
console.log(userData);

profileContainer.innerHTML = `              <div class="container">
<img src="${userData.avatar}" alt="Your profile picture" class="card-img" />
<p class="text-secondary">Hello,</p>
<h2>${userData.name}</h2>
<hr />
<p>Your Credits: ${userData.credits}</p>
</div>`;
