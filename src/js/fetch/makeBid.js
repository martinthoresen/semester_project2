import { displayMessage } from "../utils/displayMessage.js";
import { loadKey } from "../storage/local-storage.js";
export async function postBidWithToken(url, amount) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: amount }),
    });
    if (response.ok) {
      const bidMessageContainer = document.querySelector("#bid-message-container");
      displayMessage(bidMessageContainer, "Your bid has been placed!", "success");
    }
  } catch (error) {
    displayMessage(bidMessageContainer, json.errors[0].message, "danger");
  }
}
