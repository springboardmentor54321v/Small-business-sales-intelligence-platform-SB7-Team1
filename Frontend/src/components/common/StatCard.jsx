function StatCard({ label, value, helper, accent = 'cyan' }) {
  const accentStyles =
    accent === 'emerald'
      ? 'from-emerald-400/20 to-emerald-500/5 text-emerald-200'
      : accent === 'amber'
        ? 'from-amber-400/20 to-amber-500/5 text-amber-200'
        : 'from-cyan-400/20 to-cyan-500/5 text-cyan-200';

  return (
    <article className={`rounded-3xl border border-white/10 bg-gradient-to-br p-5 ${accentStyles}`}>
      <p className="text-sm text-slate-300">{label}</p>
      <h4 className="mt-2 text-3xl font-semibold text-white">{value}</h4>
      <p className="mt-2 text-sm text-slate-300">{helper}</p>
    </article>
  );
}

export default StatCard;