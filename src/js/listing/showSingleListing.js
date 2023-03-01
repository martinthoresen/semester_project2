import { API_BASE_URL } from "../constants/constants.js";
import { getListings } from "../fetch/getListings.js";
import { populateListingContent } from "../listing/populateSingleListing.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const singleListing = await getListings(API_BASE_URL + "/auction/listings/" + id + "?_active=true&_seller=true");

populateListingContent(singleListing);
