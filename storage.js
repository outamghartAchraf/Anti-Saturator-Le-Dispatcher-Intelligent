export function creeLocalStorage(table) {
  localStorage.setItem("array", JSON.stringify(table));
}
export function afficherLocalStorage() {
  const data = JSON.parse(localStorage.getItem("array"));
  return data || [];
} 