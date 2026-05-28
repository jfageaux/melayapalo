const pillars = [
  { label: "Fueling Strategy", desc: "Learn to eat for performance, recovery, and longevity — not restriction." },
  { label: "Macro Fundamentals", desc: "Understand protein, carbs, and fat in a way that actually makes sense." },
  { label: "Meal Timing", desc: "Know what to eat around training to maximize your output and recovery." },
  { label: "Sustainable Habits", desc: "Build a nutrition practice that travels, adapts, and lasts." },
];

export default function VirtualNutrition() {
  return (
    <section className="bg-earth py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div>
            <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
              Virtual Nutrition Coaching
            </p>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Food is<br />
              <em className="italic text-clay">Strategy.</em>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              You can't out-train a bad foundation. Melaya's virtual nutrition coaching
              meets you where you are — whether you're a beginner learning the basics
              or an athlete dialing in performance macros.
            </p>
            <a
              href="mailto:melayapalo@gmail.com?subject=Virtual Nutrition Coaching"
              className="inline-block border border-clay text-clay text-sm font-medium tracking-widest uppercase px-8 py-4 hover:bg-clay hover:text-cream transition-colors"
            >
              Email Melaya
            </a>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((p) => (
              <div key={p.label} className="bg-bark/60 p-6">
                <h4 className="font-serif text-cream font-semibold text-lg mb-2">
                  {p.label}
                </h4>
                <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
