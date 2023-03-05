import { listingContainer } from "../feed/populateListing.js";
import { listingsArray } from "../feed/displayListings.js";
import { populateListing } from "./populateListing.js";

const searchSubmit = document.querySelector("#search-submit");
const searchInput = document.querySelector("#search-input");

function searchPosts(listing, keyword) {
  let searchedPosts = listing.filter((listing) => listing.title.includes(keyword.toLowerCase()));

  searchedPosts.forEach((element) => {
    populateListing(element);
  });
}
searchSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  listingContainer.innerHTML = "";
  const searchValue = searchInput.value.toLowerCase();
  searchPosts(listingsArray, searchValue);
});
