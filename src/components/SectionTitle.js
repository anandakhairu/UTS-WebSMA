export default function SectionTitle({ children, sub }) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-3xl font-bold text-ink">{children}</h2>
      {sub && <p className="mt-1 max-w-2xl text-slate-600">{sub}</p>}
      <div className="mt-3 h-1 w-16 rounded bg-accent" />
    </div>
  );
}
