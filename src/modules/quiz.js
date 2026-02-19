export function calculateEnergy() {
  const physical = +document.getElementById("physical").value;
  const mental = +document.getElementById("mental").value;
  const motivation = +document.getElementById("motivation").value;

  return Math.round((physical + mental + motivation) / 3);
}

export function setupQuizSliders() {
  const sliders = [
    { input: 'physical', display: 'physicalValue' },
    { input: 'mental', display: 'mentalValue' },
    { input: 'motivation', display: 'motivationValue' }
  ];

  sliders.forEach(({ input, display }) => {
    const inputEl = document.getElementById(input);
    const displayEl = document.getElementById(display);
    inputEl.addEventListener('input', (e) => {
      displayEl.textContent = e.target.value;
    });
  });
}