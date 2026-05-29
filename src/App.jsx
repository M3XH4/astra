import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ZodiacGrid from "./components/zodiac-grid";
import HoroscopeCard from "./components/horoscope-card";
import CompatibilityCard from "./components/compatibility-card";
import QuickInsights from "./components/quick-insights";
import Loader from "./components/loader";
import Toast from "./components/toast";

import { zodiacSigns } from "./data/zodiac-signs";
import { fetchHoroscope } from "./services/horoscope-api";
import { getFavoriteZodiac, saveFavoriteZodiac } from "./utils/local-storage";
import {
  generateCompatibility,
  generateLuckyNumber,
  generateMood,
  getZodiacFromDate,
} from "./utils/zodiac-utils";

export default function App() {
  const [selectedSign, setSelectedSign] = useState("");
  const [horoscope, setHoroscope] = useState(null);
  const [birthdate, setBirthdate] = useState("");
  // const [activeTab, setActiveTab] = useState("Daily");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");

  const dashboardRef = useRef(null);

  const selectedSignData = useMemo(
    () => zodiacSigns.find((sign) => sign.name === selectedSign),
    [selectedSign]
  );

  const meta = useMemo(() => {
    if (!selectedSign) {
      return {
        mood: "—",
        luckyNumber: "—",
        compatibility: "—",
      };
    }

    return {
      mood: generateMood(selectedSign),
      luckyNumber: generateLuckyNumber(selectedSign),
      compatibility: generateCompatibility(selectedSign),
    };
  }, [selectedSign]);

  async function loadHoroscope(sign) {
    try {
      setLoading(true);
      setError("");
      setSelectedSign(sign);
      saveFavoriteZodiac(sign);

      const data = await fetchHoroscope(sign);
      setHoroscope(data);
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Unable to load horoscope. Please check your API key or try again later.");
    } finally {
      setLoading(false);
    }
  }

  function handleDetectZodiac() {
    if (!birthdate) {
      showToast("Please select your birthdate first.");
      return;
    }

    const sign = getZodiacFromDate(birthdate);
    loadHoroscope(sign);
    dashboardRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function handleCopy() {
    if (!horoscope || !selectedSign) return;

    navigator.clipboard.writeText(
      `Astra Horoscope — ${selectedSign}: ${horoscope.horoscope}`
    );

    showToast("Horoscope copied to clipboard.");
  }

  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(""), 2200);
  }

  useEffect(() => {
    const saved = getFavoriteZodiac();

    if (saved) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      loadHoroscope(saved);
    }
  }, []);

  return (
    <div className="stars star-bg min-h-screen text-slate-50">
      <Navbar />

      <main>
        <Hero
          onScroll={() =>
            dashboardRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />

        <section
          ref={dashboardRef}
          id="horoscope"
          className="mx-auto grid max-w-[1200px] gap-6 px-4 py-10 lg:grid-cols-12"
        >
          <aside className="glass-card rounded-3xl p-6 lg:col-span-4">
            <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
              User Overview
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {selectedSign || "Your Zodiac"}
            </h3>

            <div className="mt-6 grid gap-4">
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 text-white focus-ring"
                aria-label="Birthdate"
              />

              <button
                onClick={handleDetectZodiac}
                className="rounded-2xl bg-yellow-400 px-5 py-4 font-bold text-slate-950 transition hover:scale-[1.02] focus-ring"
              >
                Detect Zodiac
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <MiniStat label="Mood" value={meta.mood} />
              <MiniStat label="Lucky No." value={meta.luckyNumber} />
              <MiniStat label="Match" value={meta.compatibility} />
              <MiniStat label="Theme" value="Dark" />
            </div>
          </aside>

          <section className="lg:col-span-8">
            {/* <div className="mb-5 flex flex-wrap gap-3">
              {["Daily"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    if (tab !== "Daily") {
                      showToast(`${tab} horoscope is a future enhancement.`);
                    }
                  }}
                  className={`rounded-2xl px-5 py-3 text-sm font-bold transition focus-ring ${
                    activeTab === tab
                      ? "bg-yellow-400 text-slate-950"
                      : "glass-card text-slate-200 hover:bg-white/10"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div> */}

            {loading && <Loader />}

            {error && !loading && (
              <div className="rounded-3xl border border-red-500/40 bg-red-500/10 p-6 text-red-100">
                {error}
              </div>
            )}

            {!loading && !error && (
              <HoroscopeCard
                selectedSign={selectedSign}
                signData={selectedSignData}
                horoscope={horoscope}
                meta={meta}
                onCopy={handleCopy}
              />
            )}
          </section>
        </section>

        <ZodiacGrid
          signs={zodiacSigns}
          selectedSign={selectedSign}
          onSelect={(sign) => {
            loadHoroscope(sign);
            dashboardRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <section className="mx-auto max-w-[1200px] px-4 py-10">
          <QuickInsights />
        </section>

        <section className="mx-auto max-w-[1200px] px-4 py-10">
          <CompatibilityCard
            selectedSign={selectedSign}
            compatibility={meta.compatibility}
          />
        </section>
      </main>

      <footer className="mx-auto max-w-[1200px] px-4 py-10 text-center text-sm text-slate-400">
        © 2026 Astra. Discover What the Stars Reveal.
      </footer>

      <Toast message={toast} />
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <p className="mt-2 font-bold text-white">{value}</p>
    </div>
  );
}