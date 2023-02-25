export async function getListings(url) {
  try {
    const getData = {
      method: "GET",
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
