export function saveFavoriteZodiac(sign) {
  localStorage.setItem("astra_favorite_zodiac", sign);
}

export function getFavoriteZodiac() {
  return localStorage.getItem("astra_favorite_zodiac");
}

export function saveTheme(theme) {
  localStorage.setItem("astra_theme", theme);
}

export function getTheme() {
  return localStorage.getItem("astra_theme") || "dark";
}