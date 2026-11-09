import TaskItem from './TaskItem';

export default function TaskList({
  tasks,
  onEdit,
  onDelete,
  onStatusChange,
  hasActiveFilters,
  totalTasksCount,
}) {
  if (tasks.length === 0) {
    if (totalTasksCount === 0) {
      return (
        <div className="empty-state">
          <h3>No tasks yet</h3>
          <p>Click the "Add Task" button to get started.</p>
        </div>
      );
    } else if (hasActiveFilters) {
      return (
        <div className="empty-state">
          <h3>No matching tasks found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      );
    }
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}