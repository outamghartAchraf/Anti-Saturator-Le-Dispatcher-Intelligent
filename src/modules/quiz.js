
function calculer() {
  let sliders = document.querySelectorAll("input[type=range]");
  
  let somme = 0;

  sliders.forEach(slider => {
    somme += Number(slider.value);
  });



