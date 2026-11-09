export default function SummaryCard({ title, count, color }) {
  return (
    <div className="summary-card" style={{ borderLeft: `4px solid ${color}` }}>
      <h4>{title}</h4>
      <p>{count}</p>
    </div>
  );
}