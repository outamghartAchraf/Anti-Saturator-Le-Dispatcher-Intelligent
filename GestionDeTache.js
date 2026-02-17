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

  table.push(newTask);

  AfficherInfoDeTache(table);

  alert("element est ajouter");

  tache.value = "";
  description.value = "";
  urgence.value = "";
  importance.value = "";
  effort.value = "";
});

