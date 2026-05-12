export function readJson(key, fallback) {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    console.warn('localStorage čtení se nepovedlo:', error);
    return fallback;
  }
}

export function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('localStorage zápis se nepovedl:', error);
  }
}

export function removeItem(key) {
  localStorage.removeItem(key);
}
