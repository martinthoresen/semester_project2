import { loadKey } from "../storage/local-storage.js";

export async function putMedia(url, avatarUrl) {
  const token = loadKey("accessToken");
  try {
    const putData = {
      method: "PUT",
      avatar: avatarUrl,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, putData);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
