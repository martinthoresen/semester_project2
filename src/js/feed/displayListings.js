import { API_BASE_URL } from "../constants/constants.js";
import { getListings } from "../fetch/getListings.js";
import { populateListing } from "./populateListing.js";

const listingsArray = await getListings(API_BASE_URL + "/auction/listings");

listingsArray.forEach((element) => {
  populateListing(element);
});
