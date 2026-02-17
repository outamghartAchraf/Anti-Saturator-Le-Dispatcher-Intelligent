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
  CalculStatistiques(); 

  alert("element est ajouter");

  tache.value = "";
  description.value = "";
  urgence.value = "";
  importance.value = "";
  effort.value = "";


})

function AfficherInfoDeTache(arr) {
  const Container = document.getElementById("Container");
  Container.innerHTML = "";

  arr.forEach(n => {

    Container.innerHTML += `
      <div class="bg-white shadow-xl rounded-2xl p-4 mb-4">
        <div class="flex justify-between items-start">

          <div>
            <h3 class="text-xl font-bold text-blue-600 mb-2">
              ${n.tache}
            </h3>

            <p class="text-gray-600 mb-4">
              ${n.description}
            </p>
          </div>

          <button 
            data-id="${n.id}"
            class="delete-btn w-[30px] h-[30px]">
            <img src="https://cdn-icons-png.flaticon.com/128/11042/11042772.png">
          </button>

        </div>

        <div class="grid grid-cols-3 gap-4 text-center mt-4">
          <div class="bg-red-100 text-red-600 py-2 rounded-xl">
            <p class="text-sm font-semibold">Urgence</p>
            <p class="text-lg font-bold">${n.urgence}</p>
          </div>

          <div class="bg-yellow-100 text-yellow-600 py-2 rounded-xl">
            <p class="text-sm font-semibold">Importance</p>
            <p class="text-lg font-bold">${n.importance}</p>
          </div>

          <div class="bg-green-100 text-green-600 py-2 rounded-xl">
            <p class="text-sm font-semibold">Effort</p>
            <p class="text-lg font-bold">${n.effort}</p>
          </div>
        </div>
      </div>
    `;
  });
}

function Supprimer(id) {        // function 
  table = table.filter(item => item.id !== id);   // filter par id 
  AfficherInfoDeTache(table);
 CalculStatistiques();      // thdite statistiques b3de supprimer
                     // afficher les taches mn jdide  
}
addEventListener("click", function (e) {      // mli nkliki ghadi iw933  dakxi li ltht    الحدث (event)
  const btn = e.target.closest(".delete-btn");   // العنصر اللي تكليكا عليه 

// على أقرب parent (أب)   closest()  => bdbtte li fihe class name delete-btn

   if (btn) {          //  ila tame 3amalia click 3la button         
    const id = Number(btn.dataset.id);  //ghadi i3tina id li mkhzone f id-data
    Supprimer(id);  // bach ntb9o f function dial Supprimer()
  }}
);



// ------------------------------statistique --------------------------------------------

let statUrgence =document.getElementById("statUrgence");
let statImportance =document.getElementById("statImportance");
let statEffort =document.getElementById("statEffort");


function CalculStatistiques() {


  let totalUrgence = 0;
  let totalImportance = 0;
  let totalEffort = 0;

  for (let i = 0; i < table.length; i++) {
    totalUrgence += Number(table[i].urgence);
    totalImportance += Number(table[i].importance);
    totalEffort += Number(table[i].effort);
  }
    if (table.length === 0) {
    statUrgence.textContent = "Moyenne Urgence : 0";
    statImportance.textContent = "Moyenne Importance : 0";
    statEffort.textContent = "Moyenne Effort : 0";
    return;
  }


 

  let moyenneDeUrgence = totalUrgence / table.length;
  let moyenneDeImportance = totalImportance / table.length;
  let moyenneDeEffort = totalEffort / table.length;

  statUrgence.textContent ="Moyenne Urgence : " + moyenneDeUrgence.toFixed(2) ;

  statImportance.textContent ="Moyenne Importance : " + moyenneDeImportance.toFixed(2);

  statEffort.textContent ="Moyenne Effort : " + moyenneDeEffort.toFixed(2);
}
 CalculStatistiques()

