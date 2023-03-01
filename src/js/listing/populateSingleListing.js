import { checkListingOwner } from "../auth/checkListingOwner.js";
import { putFetchWithToken } from "../fetch/updateListing.js";
import { API_BASE_URL } from "../constants/constants.js";
import { displayAuthorizedButtons } from "../utils/authorizedButtons.js";

const specificListingContainer = document.querySelector("#specific-listing-container");

export function populateListingContent(listing) {
  const singleListing = document.createElement("div");
  specificListingContainer.appendChild(singleListing);

  singleListing.innerHTML = `<div class="card p-5 mb-5 border-0" id="post-card">
  <h3 class="card-title">${listing.title}</h3>
  <img src="${listing.media}" />
  <p class="text-black mt-2"> by: @${listing.seller.name}</p>
  <p class="my-2">${listing.description}</p>
  </div>`;

  if (checkListingOwner(listing)) {
    singleListing.innerHTML = `<div class="card p-5 mb-5 bg-white shadow border-0" id="post-card">
    <h1 class="text-center" >Edit post</h1> 
    <form class="flex-column align-items-stretch gap-3 p-4 rounded-2 sticky-lg-top" id="create-post">
    ID: ${listing.id}
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" placeholder="Write a title for your listing..." required value="${listing.title}" />
    </div>
    <div class="form-group">
      <label for="descrription">Description</label>
      <textarea id="description" maxlength="150" name="description" cols="" rows="6" class="form-control" >${listing.description}</textarea>
    </div>
    <div class="form-group">
      <label for="listing-media">Media</label>
      <input type="text" class="form-control" name="media" value="${listing.media}" />
    </div>
    <div class="form-group">
      <label for="listing-tags">Tags</label>
      <input type="text" class="form-control" name="tags" value="${listing.tags}" />
    </div>
    <p id="message-container"></p>
    <button id="submit-edited-listing" class="btn btn-primary my-3">Submit changes</button>
  </form>
    </div>`;
    displayAuthorizedButtons(listing, singleListing);
    const listingId = listing.id;
    const updateListing = document.querySelector("#submit-edited-listing");
    updateListing.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = event.target;
      const title = formData.title.value;
      const description = formData.description.value;
      const tagsString = formData.tags.value;
      const tags = tagsString.split(",");
      const media = formData.media.value;
      const post = {
        title,
        description,
        tags,
        media,
      };
      console.log(listing.id);
      putFetchWithToken(API_BASE_URL + `/auction/listings/${listingId}`, post);
    });
  }
}
