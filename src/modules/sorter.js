let skippedIds = [];

export function getTopTask(tasks, energy) {
  const available = tasks.filter(t => !skippedIds.includes(t.id));

  if (!available.length) return null;

  const scored = available.map(task => {
    const energyFactor = energy < 4 
      ? (6 - task.effort) 
      : task.effort;

    const score =
      task.urgency * 0.4 +
      task.importance * 0.4 +
      energyFactor * 0.2;

    return { ...task, score };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored[0] || null;
}