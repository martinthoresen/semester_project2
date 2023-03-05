import { checkListingOwner } from "../auth/checkListingOwner.js";
import { putFetchWithToken } from "../fetch/updateListing.js";
import { API_BASE_URL } from "../constants/constants.js";
import { CountDownTimer } from "../utils/countdown.js";
import { postBidWithToken } from "../fetch/makeBid.js";
import { deleteListing } from "../fetch/deleteListing.js";
import { displayAuthorizedButtons } from "../utils/authorizedButtons.js";
import { displayMessage } from "../utils/displayMessage.js";
import { refresh } from "../utils/refreshPage.js";
const specificListingContainer = document.querySelector("#specific-listing-container");

export function populateListingContent(listing) {
  const singleListing = document.createElement("div");
  const endsAt = new Date(listing.endsAt);
  specificListingContainer.appendChild(singleListing);

  document.title = `${listing.title} | The Midlands Auctionhouse`;
  singleListing.innerHTML = `<div class="card p-5 mb-5 border-0" id="post-card">
  <h3 class="card-title">${listing.title}</h3>
  <img src="${listing.media}" />
  <p class="text-black mt-2"> by: @${listing.seller.name}</p>
  <p class="my-2">${listing.description}</p>
  <p id="${listing.id}"></p>
  <form id="bid" class="d-flex flex-column gap-4 col-8 col-md-4 col-lg-5 col-xl-5 col-xxl-5 m-auto my-5">
  <div class="form-group">
    <label for="bid-value">Bid Amount</label>
    <input type="number" class="form-control" id="bid-value" name="bid-value" />
  </div>
  <button class="btn btn-primary" id="submit-bid">Submit Bid</button>
</form>
  <h2>Bids:</h2>
  <div id="bids-container"></div>
  </div>`;
  CountDownTimer(endsAt, listing.id);
  listing.bids.forEach((element) => {
    const bidsContainer = document.querySelector("#bids-container");
    const singleBid = document.createElement("div");
    singleBid.innerHTML = `
    <h4>${element.bidderName}</h4>
    <p>Bid amount: ${element.amount}</p>
    `;
    bidsContainer.appendChild(singleBid);
  });

  const submitBid = document.querySelector("#bid");
  submitBid.addEventListener("submit", (event) => {
    event.preventDefault();

    const bidValue = document.querySelector("#bid-value");
    const formattedBidValue = Number(bidValue.value);
    console.log(formattedBidValue);
    postBidWithToken(API_BASE_URL + "/auction/listings/" + listing.id + "/bids", formattedBidValue);
  });

  if (checkListingOwner(listing)) {
    singleListing.innerHTML = `<div class="card p-5 mb-5 bg-white shadow border-0" id="post-card">
    <h1 class="text-center" >Edit post</h1> 
    <form class="flex-column align-items-stretch gap-3 p-4 rounded-2 sticky-lg-top" id="create-post">
    <p id="${listing.id}"></p>
    <div class="form-group">
      <label for="title">Title</label>
      <input type="text" class="form-control" name="title" placeholder="Write a title for your listing..." required value="${listing.title}" />
    </div>
    <div class="form-group">
      <label for="description">Description</label>
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
    <button id="delete-listing" class="btn btn-primary bg-danger my-3">Delete Post</button>
    <p id="delete-container"></p>
  </form>
    </div>`;

    const listingId = listing.id;

    const updateListing = document.querySelector("#submit-edited-listing");
    const updateForm = document.querySelector("#create-post");

    updateListing.addEventListener("click", (event) => {
      event.preventDefault();
      const formData = updateForm;
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
      putFetchWithToken(API_BASE_URL + `/auction/listings/${listingId}`, post);
    });
  }
  const deleteListingButton = document.querySelector("#delete-listing");
  const deleteContainer = document.querySelector("#delete-container");
  deleteListingButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteListing(API_BASE_URL + `/auction/listings/${listing.id}`);
    displayMessage(deleteContainer, "Post has been deleted!", "success");
    window.location.replace("/listings");
  });
}
