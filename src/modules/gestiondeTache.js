
import { creeLocalStorage, getTasks } from "./storage.js";

let table = getTasks() || [];

const tache = document.getElementById("tache");
const description = document.getElementById("description");
const urgence = document.getElementById("urgence");
const importance = document.getElementById("importance");
const effort = document.getElementById("effort");
const ajouter = document.getElementById("ajouter");

ajouter.addEventListener("click", () => {
  const u = Number(urgence.value);
  const i = Number(importance.value);
  const e = Number(effort.value);

  if (u < 1 || u > 5 || i < 1 || i > 5 || e < 1 || e > 5) {
    alert("Le nombre doit être entre 1 et 5");
    return;
  }

  let newTask = {
    id: Date.now(),
    title: tache.value,
    description: description.value,
    urgency: u,
    importance: i,
    effort: e
  };

  table.push(newTask);
  creeLocalStorage(table);
  AfficherInfoDeTache(table);
  CalculStatistiques();

  tache.value = "";
  description.value = "";
  urgence.value = 5;
  importance.value = 5;
  effort.value = 5;
});


function AfficherInfoDeTache(arr) {
  const Container = document.getElementById("Container");
  Container.innerHTML = "";

  arr.forEach(n => {
    Container.innerHTML += `
      <div class="card">
        <h4>${n.title}</h4>
        <p>${n.description}</p>
        <button class="btn-delete" data-id="${n.id}">Supprimer</button>
      </div>
    `;
  });
}

function Supprimer(id) {
  table = table.filter(item => item.id !== id);
  creeLocalStorage(table);
  AfficherInfoDeTache(table);
  CalculStatistiques();
}

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn-delete");
  if (btn) {
    const id = Number(btn.dataset.id);
    Supprimer(id);
  }
});


const statUrgence = document.getElementById("statUrgence");
const statImportance = document.getElementById("statImportance");
const statEffort = document.getElementById("statEffort");

function CalculStatistiques() {
  if (!statUrgence) return; 

  if (table.length === 0) {
    statUrgence.textContent = "Moyenne Urgence : 0";
    statImportance.textContent = "Moyenne Importance : 0";
    statEffort.textContent = "Moyenne Effort : 0";
    return;
  }

  let totalUrgence = 0;
  let totalImportance = 0;
  let totalEffort = 0;

  table.forEach(task => {
    totalUrgence += task.urgency;
    totalImportance += task.importance;
    totalEffort += task.effort;
  });

  statUrgence.textContent =  (totalUrgence / table.length).toFixed(2);
  statImportance.textContent =  (totalImportance / table.length).toFixed(2);
  statEffort.textContent =  (totalEffort / table.length).toFixed(2);
}

AfficherInfoDeTache(table);
CalculStatistiques();

const btnAdd = document.querySelector(".btn-add");
const formSection = document.getElementById("formSection");
const btnAnnuler = document.getElementById("annuler");

btnAdd.addEventListener("click", () => {
  formSection.classList.remove("hidden");
});

btnAnnuler.addEventListener("click", () => {
  formSection.classList.add("hidden");
});
