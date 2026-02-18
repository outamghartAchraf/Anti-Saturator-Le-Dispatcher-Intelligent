
function calculer() {
  let sliders = document.querySelectorAll("input[type=range]");
  
  let somme = 0;

  sliders.forEach(slider => {
    somme += Number(slider.value);
  });

  let moyenne = somme / sliders.length;

  document.getElementById("result").innerHTML =
    "Somme : " + somme + "<br>Moyenne : " + moyenne.toFixed(2);
}

