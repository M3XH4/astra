import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Horoscope", "Compatibility", "Zodiac Signs"];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4">
        <a href="#home" className="flex items-center gap-3 focus-ring rounded-xl">
          <img src="/astra-logo.png" alt="Astra Logo" className="h-12 w-12" />
          <div>
            <h1 className="text-2xl font-bold text-yellow-400">Astra</h1>
            <p className="text-xs text-slate-400">Your Daily Cosmic Guide</p>
          </div>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm text-slate-300 transition hover:text-yellow-400 focus-ring rounded-lg"
            >
              {link}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden rounded-xl border border-white/10 px-4 py-2 text-slate-100 focus-ring"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
              className="block rounded-xl px-4 py-3 text-slate-300 hover:bg-white/10 hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}