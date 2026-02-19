
const KEY = "antiSaturator_tasks";

export function initStorage(defaultTasks) {
  if (!localStorage.getItem(KEY)) {
    localStorage.setItem(KEY, JSON.stringify(defaultTasks));
  }
}

export function getTasks() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function deleteTask(id) {
  const tasks = getTasks();
  const filtered = tasks.filter(t => t.id !== id);
  localStorage.setItem(KEY, JSON.stringify(filtered));
}

export function resetTasks(defaultTasks) {
  localStorage.setItem(KEY, JSON.stringify(defaultTasks));
}

export function creeLocalStorage(table) {
  localStorage.setItem("antiSaturator_tasks", JSON.stringify(table));
}
export function afficherLocalStorage() {
  const data = JSON.parse(localStorage.getItem("array"));
  return data || [];
} 