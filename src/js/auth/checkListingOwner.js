import { loadKey } from "../storage/local-storage.mjs";

export function checkListingOwner(listing) {
  var loggedInEmail = loadKey("data").email;
  var authorEmail = listing.seller.email;
  if (loggedInEmail === authorEmail) {
    var isOwner = true;
  } else {
    var isOwner = false;
  }
  return isOwner;
}
