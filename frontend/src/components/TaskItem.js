import React from 'react';

function TaskItem({ task, onDelete, onToggle }) {
  const isDone = task.status === 'completed';
  const isOverdue = task.dueDate && !isDone && new Date(task.dueDate) < new Date().setHours(0, 0, 0, 0);

  return (
    <div className={`task-card priority-${task.priority || 'medium'} ${isDone ? 'done' : ''}`}>
      <button className="check-btn" onClick={() => onToggle(task)} aria-label="Toggle complete">
        {isDone ? '✓' : ''}
      </button>
      <div className="task-main">
        <span className="task-title">{task.title}</span>
        {task.dueDate && (
          <span className={`due-date ${isOverdue ? 'overdue' : ''}`}>
            {isOverdue ? 'Overdue: ' : 'Due '}
            {new Date(task.dueDate).toLocaleDateString()}
          </span>
        )}
      </div>
      <span className="priority-tag">{task.priority || 'medium'}</span>
      <button className="delete-btn" onClick={() => onDelete(task._id)} aria-label="Delete task">
        ×
      </button>
    </div>
  );
}
export default TaskItem;