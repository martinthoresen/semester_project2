const bidContainer = document.querySelector("#bid-container");
import { displayMessage } from "../utils/displayMessage.js";
import { loadKey } from "../storage/local-storage.js";
export async function postBidWithToken(url, amount) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Amount: amount,
      },
    });
    if (response.ok) {
      console.log(response);
      displayMessage(bidContainer, "Your bid has been placed!", "success");
    }
  } catch (error) {
    console.log(error);
    console.log(response);
    displayMessage(bidContainer, json.errors[0].message, "danger");
  }
}
