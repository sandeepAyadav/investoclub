import SummaryCard from './SummaryCard';

export default function Sidebar({ counts }) {
  return (
    <aside className="sidebar">
      <h2>Overview</h2>
      <div className="summary-cards">
        <SummaryCard title="Total Tasks" count={counts.total} color="#3b82f6" />
        <SummaryCard title="Pending" count={counts.pending} color="#f59e0b" />
        <SummaryCard title="In Progress" count={counts.inProgress} color="#8b5cf6" />
        <SummaryCard title="Completed" count={counts.completed} color="#10b981" />
      </div>
    </aside>
  );
}