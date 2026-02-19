export function calculateEnergy() {
  const physical = +document.getElementById("physical").value;
  const mental = +document.getElementById("mental").value;
  const motivation = +document.getElementById("motivation").value;

  return Math.round((physical + mental + motivation) / 3);
}
