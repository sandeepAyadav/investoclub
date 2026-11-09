export default function TaskItem({ task, onEdit, onDelete, onStatusChange }) {
  return (
    <div className="task-item">
      <div className="task-header">
        <h3>{task.title}</h3>
        <div className={`badge priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </div>
      </div>
      
      {task.description && <p className="task-desc">{task.description}</p>}
      
      <div className="task-meta">
        <span className="due-date">Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        <select 
          value={task.status} 
          onChange={(e) => onStatusChange(task.id, e.target.value)}
          className={`status-select status-${task.status.replace(/\s+/g, '-').toLowerCase()}`}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      
      <div className="task-actions">
        <button onClick={() => onEdit(task)} className="btn-edit">Edit</button>
        <button onClick={() => onDelete(task.id)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
}