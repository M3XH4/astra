export default function HoroscopeCard({ selectedSign, signData, horoscope, meta, onCopy }) {
  if (!horoscope) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center">
        <p className="text-slate-300">Select a zodiac sign to reveal your horoscope.</p>
      </div>
    );
  }

  return (
    <article className="glass-card fade-slide rounded-3xl p-6 shadow-2xl md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="text-6xl">{signData?.icon}</div>
          <h3 className="mt-4 text-4xl font-bold text-yellow-400">{selectedSign}</h3>
          <p className="mt-2 text-sm text-slate-400">{horoscope.date || "Today"}</p>
        </div>

        <button
          onClick={onCopy}
          className="rounded-2xl bg-yellow-400 px-5 py-3 font-bold text-slate-950 transition hover:scale-[1.03] focus-ring"
        >
          Copy Horoscope
        </button>
      </div>

      <p className="mt-8 text-lg leading-9 text-slate-100">
        {horoscope.horoscope}
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Info label="Mood" value={meta.mood} />
        <Info label="Lucky Number" value={meta.luckyNumber} />
        <Info label="Lucky Color" value={signData?.color || "#FBBF24"} />
        <Info label="Compatibility" value={meta.compatibility} />
      </div>
    </article>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
}