import { checkListingOwner } from "../auth/checkListingOwner.js";
import { API_BASE_URL } from "../constants/constants.js";
import { deleteListing } from "../fetch/deleteListing.js";
import { refresh } from "../utils/refreshPage.js";

export function displayAuthorizedButtons(listing, parent) {
  var isOwner = checkListingOwner(listing);
  const authorizedButtons = document.createElement("div");
  const listingCard = parent.querySelector("#listing-card");
  if (isOwner === true) {
    listingCard.appendChild(authorizedButtons);
    authorizedButtons.innerHTML = `
      <button id="delete-listing-id-${listing.id}" class="btn btn-danger">Delete Listing</button>`;
  } else {
  }

  const deleteButton = document.querySelector(`#delete-listing-id-${listing.id}`);
  if (deleteButton) {
    deleteButton.addEventListener("click", (event) => {
      event.preventDefault();
      var deleteUrl = API_BASE_URL + `/auctions/listings/${listing.id}`;
      deleteListing(deleteUrl);
      refresh();
    });
  }
}
