import { API_BASE_URL } from "../constants/constants.js";
import { postFetchWithToken } from "../fetch/postListing.js";

const createPost = document.querySelector("#create-listing");
createPost.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = event.target;
  const title = formData.title.value;
  const description = formData.description.value;
  const tagsString = formData.tags.value;
  const tags = tagsString.split(",");
  const media = formData.media.value;
  const endsAt = formData.endsAt.value;
  const post = {
    title,
    description,
    tags,
    media,
    endsAt,
  };
  postFetchWithToken(API_BASE_URL + "/auction/listings", post);
});
