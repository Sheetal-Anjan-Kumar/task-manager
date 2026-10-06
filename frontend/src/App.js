import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import WeeklyChart from './components/WeeklyChart';
import { getTasks, createTask, updateTask, deleteTask } from './api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = async (data) => {
    await createTask(data);
    loadTasks();
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  const handleToggle = async (task) => {
    const newStatus = task.status === 'completed' ? 'pending' : 'completed';
    await updateTask(task._id, { status: newStatus });
    loadTasks();
  };

  const pendingCount = tasks.filter((t) => t.status === 'pending').length;
  const completedCount = tasks.filter((t) => t.status === 'completed').length;

  return (
    <div className="page">
      <Header />

      <main className="page-content">
        <div className="app-card">
          <div className="stats-bar">
            <div className="stat">
              <span className="stat-number">{tasks.length}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat">
              <span className="stat-number stat-pending">{pendingCount}</span>
              <span className="stat-label">Pending</span>
            </div>
            <div className="stat">
              <span className="stat-number stat-completed">{completedCount}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>

          <WeeklyChart tasks={tasks} />

          <TaskForm onAdd={handleAdd} />

          {tasks.length > 0 && completedCount === tasks.length ? (
            <p className="celebration">🎉 All done! Nothing pending.</p>
          ) : (
            <TaskList tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;