import { useState, useMemo } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterPriority, setFilterPriority] = useState('All');
  const [sortBy, setSortBy] = useState('none');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  
  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(tasks.map((t) => (t.id === editingTask.id ? { ...taskData, id: t.id } : t)));
    } else {
      setTasks([...tasks, { ...taskData, id: crypto.randomUUID() }]);
    }
    closeModal();
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('Are you want to delete the task?')) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  const openModal = (task = null) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTask(null);
    setIsModalOpen(false);
  };

  
  const filteredTasks = useMemo(() => {
    let result = [...tasks];

    
    if (searchQuery) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    if (filterStatus !== 'All') {
      result = result.filter((task) => task.status === filterStatus);
    }

    
    if (filterPriority !== 'All') {
      result = result.filter((task) => task.priority === filterPriority);
    }

    
    if (sortBy === 'earliest') {
      result.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    } else if (sortBy === 'latest') {
      result.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
    }

    return result;
  }, [tasks, searchQuery, filterStatus, filterPriority, sortBy]);

  
  const counts = useMemo(() => {
    return {
      total: tasks.length,
      pending: tasks.filter((t) => t.status === 'Pending').length,
      inProgress: tasks.filter((t) => t.status === 'In Progress').length,
      completed: tasks.filter((t) => t.status === 'Completed').length,
    };
  }, [tasks]);

  return (
    <div className="app-container">
      <Sidebar counts={counts} />
      <main className="main-content">
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          filterPriority={filterPriority}
          setFilterPriority={setFilterPriority}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onAddTask={() => openModal()}
        />
        <TaskList
          tasks={filteredTasks}
          onEdit={openModal}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          hasActiveFilters={
            searchQuery !== '' || filterStatus !== 'All' || filterPriority !== 'All'
          }
          totalTasksCount={tasks.length}
        />
      </main>

      {isModalOpen && (
        <TaskForm
          onClose={closeModal}
          onSave={handleSaveTask}
          initialTask={editingTask}
        />
      )}
    </div>
  );
}

export default App;