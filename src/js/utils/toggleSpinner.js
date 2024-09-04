export function toggleSpinner(listings) {
  const toggleSpinner = document.querySelector("#spinner");

  if (listings) {
    toggleSpinner.classList.add("d-none");
  } else {
    toggleSpinner.classList.remove("d-none");
  }
}
