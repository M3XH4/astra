export default function QuickInsights() {
  const items = [
    { title: "Love", text: "Open up with honesty and warmth.", icon: "💛" },
    { title: "Career", text: "Focus on one clear priority today.", icon: "✨" },
    { title: "Health", text: "Protect your peace and rest well.", icon: "🌙" },
    { title: "Finance", text: "Avoid impulse decisions today.", icon: "🪐" },
  ];

  return (
    <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="glass-card rounded-3xl p-5">
          <div className="text-3xl">{item.icon}</div>
          <h4 className="mt-4 text-xl font-bold">{item.title}</h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
        </div>
      ))}
    </section>
  );
}