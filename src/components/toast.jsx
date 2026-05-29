export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-900 px-6 py-4 text-sm text-white shadow-2xl">
      {message}
    </div>
  );
}