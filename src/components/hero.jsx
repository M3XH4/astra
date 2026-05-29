export default function Hero({ onScroll }) {
  return (
    <section id="home" className="mx-auto max-w-[1200px] px-4 py-16 text-center md:py-24">
      <div className="fade-slide">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-yellow-400">
          Astrology Made Beautiful
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-extrabold leading-tight md:text-6xl">
          Discover Your Cosmic Journey
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Personalized horoscope insights tailored to your zodiac sign.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={onScroll}
            className="rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-slate-950 transition hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(251,191,36,0.35)] focus-ring"
          >
            Get Started
          </button>

          <a
            href="#zodiac-signs"
            className="rounded-2xl border border-white/10 px-8 py-4 font-bold text-slate-100 transition hover:scale-[1.03] hover:bg-white/10 focus-ring"
          >
            Explore Zodiac Signs
          </a>
        </div>
      </div>
    </section>
  );
}