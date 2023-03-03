import { loadKey } from "../storage/local-storage.js";
import { displayMessage } from "../utils/displayMessage.js";
const newListingContainer = document.querySelector("#new-listing-container");

export async function postFetchWithToken(url, listing) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(listing),
    });
    if (response.ok) {
      console.log(response);
      displayMessage(newListingContainer, "Post has been uploaded!", "success");
    }
  } catch (error) {
    console.log(error);
    displayMessage(newListingContainer, json.errors[0].message, "danger");
  }
}
