import { loadKey } from "../storage/local-storage.js";

export async function getListings(url) {
  const token = loadKey("accessToken");
  try {
    const getData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}
