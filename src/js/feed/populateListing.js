const listingContainer = document.querySelector("#listings-container");
export function populateListing(listing) {
  const singleListing = document.createElement("div");
  listingContainer.appendChild(singleListing);
  singleListing.innerHTML = `<div class="card p-3 mb-5 container" id="listing-card">
  <a href="/post/index.html?id=${listing.id}" class="text-decoration-none text-black d-flex flex-lg-row">
    <img class="img-fluid w-25" src="${listing.media}" />
    <div class="p-3">
      <h3>${listing.title}</h3>
      <p>${listing.body}</p>
      <p>Tags: ${listing.tags}</p>
    </div>
    <div class="p-3">
      <p>Seller information:</p>
      <img src="${listing.seller}" />
      <p></p>
      <p></p>
    </div>
  </a>
</div>`;
}
