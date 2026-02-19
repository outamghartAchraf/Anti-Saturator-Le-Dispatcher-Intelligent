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

export function skipTask(id) {
  if (!skippedIds.includes(id)) {
    skippedIds.push(id);
  }
}

export function resetSkipped() {
  skippedIds = [];
}

export function getScorePercentage(score) {
  return Math.round((score / 5) * 100);
}

export function generateReason(task) {
  const reasons = [];

  if (task.urgency >= 4) reasons.push('tres urgente');
  else if (task.urgency >= 3) reasons.push('urgente');

  if (task.importance >= 4) reasons.push('tres importante');
  else if (task.importance >= 3) reasons.push('importante');

  if (task.effort <= 2) reasons.push('peu exigeante');

  return reasons.length > 0 ? reasons.join(', ') : 'bien équilibree';
}
