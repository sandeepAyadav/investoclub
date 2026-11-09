export default function Header({
  searchQuery, setSearchQuery,
  filterStatus, setFilterStatus,
  filterPriority, setFilterPriority,
  sortBy, setSortBy,
  onAddTask
}) {
  return (
    <header className="header">
      <div className="header-top">
        <h1>Task Dashboard</h1>
        <button onClick={onAddTask} className="btn-primary">+ Add Task</button>
      </div>
      
      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="All">All Priorities</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="none">Sort by Due Date</option>
          <option value="earliest">Earliest First</option>
          <option value="latest">Latest First</option>
        </select>
      </div>
    </header>
  );
}