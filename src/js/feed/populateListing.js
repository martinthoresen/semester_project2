export const listingContainer = document.querySelector("#listings-container");

export function populateListing(listing) {
  const singleListing = document.createElement("div");
  listingContainer.appendChild(singleListing);
  singleListing.innerHTML = `<div class="card p-3 mb-5 container" id="listing-card">
  <a href="/post/index.html?id=${listing.id}" class="text-decoration-none text-black">
  <div class="d-flex flex-column flex-md-row justify-content-between">
    <img class="listing-image" src="${listing.media}" />
    <div>
      <h3>${listing.title}</h3>
      <p>${listing.description}</p>
      <p>Tags: ${listing.tags}</p>
    </div>
    <div>
      <p>Seller information:</p>
      <img class="seller-avatar" src="${listing.seller.avatar}" />
      <p>${listing.seller.name}</p>
    </div>
   </div> 
  </a>
</div>`;
}
