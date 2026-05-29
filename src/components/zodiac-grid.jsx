export default function ZodiacGrid({ signs, selectedSign, onSelect }) {
  return (
    <section id="zodiac-signs" className="mx-auto max-w-[1200px] px-4 py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">Zodiac Quick Select</p>
        <h3 className="mt-2 text-3xl font-bold">Choose Your Sign</h3>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {signs.map((sign) => {
          const active = selectedSign === sign.name;

          return (
            <button
              key={sign.name}
              onClick={() => onSelect(sign.name)}
              className={`glass-card rounded-3xl p-5 text-left transition duration-200 hover:scale-[1.03] focus-ring ${
                active
                  ? "border-yellow-400 shadow-[0_0_32px_rgba(251,191,36,0.25)]"
                  : "hover:border-yellow-400/60 hover:shadow-[0_0_28px_rgba(109,40,217,0.28)]"
              }`}
            >
              <div className="text-5xl">{sign.icon}</div>
              <h4 className="mt-4 text-2xl font-bold">{sign.name}</h4>
              <p className="mt-1 text-sm text-slate-400">
                {sign.start} - {sign.end}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}