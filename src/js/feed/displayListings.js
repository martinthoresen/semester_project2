import { API_BASE_URL } from "../constants/constants.js";
import { getListings } from "../fetch/getListings.js";
import { toggleSpinner } from "../utils/toggleSpinner.js";
import { populateListing } from "./populateListing.js";
import { listingContainer } from "./populateListing.js";

const url = API_BASE_URL + "/auction/listings?_active=true&_seller=true";

const listingsArray = await getListings(url);

toggleSpinner(listingContainer);
listingsArray.forEach((element) => {
  populateListing(element);
});
