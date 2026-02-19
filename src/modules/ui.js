
export function showTaskSection() {
  document.getElementById("quizSection").classList.add("hidden");
  document.getElementById("taskSection").classList.remove("hidden");
}

export function showQuiz() {
  document.getElementById("quizSection").classList.remove("hidden");
  document.getElementById("taskSection").classList.add("hidden");
}

export function updateEnergyUI(energy) {
  const percentage = (energy / 10) * 100;
  document.getElementById("energyProgress").style.width = percentage + "%";
  document.getElementById("energyValue").textContent = energy + "/10";
}

export function renderTaskSimple(task, sorter) {
  const container = document.getElementById("taskContainer");

  if (!task) {
    container.innerHTML = `
      <div class="task-empty">
        <p> Bravo Acune Tache</p>
      </div>
    `;
    document.getElementById("finishBtn").disabled = true;
    return;
  }

  document.getElementById("finishBtn").disabled = false;

  const reason = sorter.generateReason(task);
  const scorePercent = sorter.getScorePercentage(task.score);

  container.innerHTML = `
    <div class="task-box-simple">
      <h3>${escapeHtml(task.title)}</h3>
      
      <div class="task-reason-simple">
        <p class="reason-label"> Pourquoi maintenant ?</p>
        <p class="reason-text">Cette tâche est <strong>${reason}</strong></p>
      </div>

      <div class="task-details">
        <div class="detail-item">
          <span class="detail-label">Urgence</span>
          <span class="detail-value">${task.urgency}/5</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Importance</span>
          <span class="detail-value">${task.importance}/5</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Effort</span>
          <span class="detail-value">${task.effort}/5</span>
        </div>
        <div class="detail-item">
          <span class="detail-label">Score</span>
          <span class="detail-value">${scorePercent}%</span>
        </div>
      </div>
    </div>
  `;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}