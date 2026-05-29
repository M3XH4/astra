export default function CompatibilityCard({ selectedSign, compatibility }) {
  const score = selectedSign ? 87 : 0;

  return (
    <section id="compatibility" className="glass-card rounded-3xl p-6">
      <h3 className="text-2xl font-bold">Compatibility</h3>
      <p className="mt-2 text-sm text-slate-400">
        A calming cosmic match based on zodiac energy.
      </p>

      <div className="mt-6 flex items-center gap-6">
        <div className="grid h-28 w-28 place-items-center rounded-full border-8 border-yellow-400 text-2xl font-bold">
          {score}%
        </div>

        <div>
          <p className="text-sm text-slate-400">Zodiac Pair</p>
          <p className="text-xl font-bold">
            {selectedSign || "—"} + {compatibility || "—"}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Strong emotional rhythm, shared curiosity, and balanced energy.
          </p>
        </div>
      </div>
    </section>
  );
}