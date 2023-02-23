export function saveKey(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

export function loadKey(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    throw new Error("Undefined token");
  }
}

export function removeKey(key) {
  try {
    return JSON.parse(localStorage.removeItem(key));
  } catch {
    throw new Error("Undefined token");
  }
}

export function clearStorage() {
  try {
    return JSON.parse(localStorage.clear());
  } catch {
    refresh();
  }
}
