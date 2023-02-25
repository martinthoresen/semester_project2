import { API_BASE_URL } from "../constants/constants";
import { getListings } from "../fetch/getListings";

const listingsArray = await getListings(API_BASE_URL + "/auction/listings");

listingsArray.forEach((element) => {
  generateListingContent(element);
});
