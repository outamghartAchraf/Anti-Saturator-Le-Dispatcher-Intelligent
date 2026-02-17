let table = [];

const tache = document.getElementById("tache");
const description = document.getElementById("description");
const urgence = document.getElementById("urgence");
const importance = document.getElementById("importance");
const effort = document.getElementById("effort");
const ajouter = document.getElementById("ajouter");


ajouter.addEventListener("click", () => {

  let newTask = {
    id: Date.now(),
    tache: tache.value,
    description: description.value,
    urgence: urgence.value,
    importance: importance.value,
    effort: effort.value
  };
    

   if (
  urgence.value < 1 || urgence.value > 5 || importance.value < 1 || importance.value > 5 ||
     effort.value < 1 || effort.value > 5)
    {
  alert("Le nombre doit être entre 1 et 5");
    return ;
    }
  table.push(newTask);

  AfficherInfoDeTache(table);

  alert("element est ajouter");

  tache.value = "";
  description.value = "";
  urgence.value = "";
  importance.value = "";
  effort.value = "";


})


