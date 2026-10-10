export default function PageTitle({ children, sub }) {
  return (
    <div className="mb-8">
      <h1 className="leading-[1.5]">
        <span className="box-decoration-clone bg-accent px-3 py-1 font-display text-3xl font-extrabold text-ink md:text-4xl">
          {children}
        </span>
      </h1>
      {sub && <p className="mt-3 max-w-2xl text-slate-600">{sub}</p>}
    </div>
  );
}