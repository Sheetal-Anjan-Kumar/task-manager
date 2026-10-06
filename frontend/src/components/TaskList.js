import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle }) {
  if (tasks.length === 0) {
    return <p className="empty-state">No tasks yet — add your first one above.</p>;
  }
  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t._id} task={t} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </div>
  );
}
export default TaskList;