import React from 'react';

function WeeklyChart({ tasks }) {
  // Build the last 7 calendar days, oldest to newest
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    days.push(d);
  }

  // Count how many tasks were completed on each of those days
  const counts = days.map((day) => {
    return tasks.filter((t) => {
      if (t.status !== 'completed' || !t.updatedAt) return false;
      const updated = new Date(t.updatedAt);
      return (
        updated.getFullYear() === day.getFullYear() &&
        updated.getMonth() === day.getMonth() &&
        updated.getDate() === day.getDate()
      );
    }).length;
  });

  const max = Math.max(...counts, 1); // avoid divide-by-zero if all counts are 0

  return (
    <div className="chart-card">
      <h3 className="chart-title">Completed this week</h3>
      <div className="chart-bars">
        {days.map((day, i) => (
          <div className="chart-col" key={i}>
            <div
              className="chart-bar"
              style={{ height: `${(counts[i] / max) * 60 + 6}px` }}
              title={`${counts[i]} completed`}
            />
            <span className="chart-label">
              {day.toLocaleDateString(undefined, { weekday: 'short' })[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WeeklyChart;