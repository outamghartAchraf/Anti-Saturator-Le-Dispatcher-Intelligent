
import { calculateEnergy, setupQuizSliders } from "./modules/quiz.js";
import { getTasks, initStorage, deleteTask, resetTasks } from "./modules/storage.js";
import { getTopTask, skipTask, resetSkipped, generateReason, getScorePercentage } from "./modules/sorter.js";

import {showTaskSection, showQuiz, updateEnergyUI, renderTaskSimple } from "./modules/ui.js";
import { mockTasks } from "./data/mockTasks.js";

let currentEnergy = 5;
let currentTask = null;

 
initStorage(mockTasks);

setupQuizSliders();


function updateTask() {
  const tasks = getTasks();
  const topTask = getTopTask(tasks, currentEnergy);
  currentTask = topTask;
  renderTaskSimple(currentTask, { generateReason, getScorePercentage });
}

// ==================== QUIZ ====================
document.getElementById("startBtn").addEventListener("click", () => {
  currentEnergy = calculateEnergy();
  resetSkipped();
  showTaskSection();
  updateEnergyUI(currentEnergy);
  updateTask();
});

// ==================== ACTIONS TÂCHE ====================
document.getElementById("finishBtn").addEventListener("click", () => {
  if (currentTask) {
    deleteTask(currentTask.id);
    updateTask();
  }
});

// ==================== RÉINITIALISATION ====================
document.getElementById("resetBtn").addEventListener("click", () => {
  if (confirm("Réinitialiser tout ?")) {
    resetTasks(mockTasks);
    resetSkipped();
    showQuiz();
    currentEnergy = 5;
  }
});

document.getElementById("skipBtn").addEventListener("click", () => {
  if (currentTask) {
    skipTask(currentTask.id);
    updateTask();
  }
});
