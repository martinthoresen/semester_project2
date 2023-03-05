import { loadKey } from "../storage/local-storage.js";
import { displayMessage } from "../utils/displayMessage.js";

export async function putMedia(url, mediaUrl) {
  try {
    const token = loadKey("accessToken");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ avatar: mediaUrl }),
    });
    console.log(mediaUrl);
    console.log(response.body);
    if (response.ok) {
      const messageContainer = document.querySelector("#message-container");
      displayMessage(messageContainer, "Avatar has been updated!", "success");
    }
  } catch (error) {
    console.log(error);
  }
}
