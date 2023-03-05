import { CountDownTimer } from "../utils/countdown.js";
export const listingContainer = document.querySelector("#listings-container");

export function populateListing(listing) {
  const singleListing = document.createElement("div");
  const created = new Date(listing.created);
  const localCreated = created.toLocaleString("no-NO", { timeZone: "UTC" });
  const updated = new Date(listing.updated);
  const localUpdated = updated.toLocaleString("no-NO", { timeZone: "UTC" });
  const endsAt = new Date(listing.endsAt);
  const localEndsAt = endsAt.toLocaleString("no-NO", { timeZone: "UTC" });
  listingContainer.appendChild(singleListing);
  singleListing.innerHTML = `<div class="card mb-5" id="listing-card">
  <a href="/listing/index.html?id=${listing.id}" class="text-decoration-none text-black">
  <div class="d-flex flex-column flex-md-row justify-content-between">
    <img class="listing-image" src="${listing.media}" />
    <div class="container d-flex row">
      <h2>${listing.title}</h2>
      <p class="mt-3">${listing.description}</p>
      <p class="align-self-end">Tags: ${listing.tags}</p>
    </div>
    <div>
      <div>
      <p class="text-secondary">created: ${localCreated}</p>
      <p class="text-secondary">updated: ${localUpdated}</p>
      <p class="text-secondary">ends at: ${localEndsAt}</p>
      <p id="${listing.id}"></p>
      </div>
      <p>Seller information:</p>
      <img class="seller-avatar" src="${listing.seller.avatar}" />
      <p>${listing.seller.name}</p>

    </div>
   </div> 
  </a>
</div>`;
  CountDownTimer(endsAt, listing.id);
}
