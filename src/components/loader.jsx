export default function Loader() {
  return (
    <div className="glass-card rounded-3xl p-8">
      <div className="mx-auto h-14 w-14 animate-spin rounded-full border-4 border-slate-700 border-t-yellow-400" />
      <p className="mt-4 text-center text-slate-300">Reading the stars...</p>

      <div className="mt-8 space-y-4">
        <div className="h-4 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
        <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
      </div>
    </div>
  );
}