export function displayMessage(target, message, type) {
  target.innerHTML = message;
  target.classList.add(`text-${type}`);
}
