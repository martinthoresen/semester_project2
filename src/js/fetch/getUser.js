export async function getUser(url) {
  try {
    const getData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, getData);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
