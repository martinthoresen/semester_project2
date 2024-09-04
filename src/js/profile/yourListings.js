import { API_BASE_URL } from "../constants/constants.js";
import { getListings } from "../fetch/getListings.js";
import { loadKey } from "../storage/local-storage.js";

import { populateYourListings } from "./populateYourListings.js";

const loggedInUser = loadKey("data");
const url = API_BASE_URL + `/auction/profiles/${loggedInUser.name}/listings?_active=true&_seller=true`;
const listingsArray = await getListings(url);

listingsArray.forEach((element) => {
  populateYourListings(element);
});
