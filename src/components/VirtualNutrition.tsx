const pillars = [
  { label: "Fueling Strategy", desc: "Learn to eat for performance, recovery, and longevity — not restriction." },
  { label: "Macro Fundamentals", desc: "Understand protein, carbs, and fat in a way that actually makes sense." },
  { label: "Meal Timing", desc: "Know what to eat around training to maximize your output and recovery." },
  { label: "Sustainable Habits", desc: "Build a nutrition practice that travels, adapts, and lasts." },
];

export default function VirtualNutrition() {
  return (
    <section className="bg-void py-28 px-6 relative overflow-hidden">
      {/* Atmospheric background word */}
      <span
        aria-hidden
        className="parallax-drift absolute inset-0 flex items-center justify-center font-display font-bold text-ash/[0.03] select-none pointer-events-none leading-none uppercase"
        style={{ fontSize: "clamp(8rem, 22vw, 22rem)" }}
      >
        FUEL
      </span>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Copy */}
          <div>
            <div className="w-10 h-px bg-copper mb-8" />
            <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
              Virtual Nutrition Coaching
            </p>
            <h2 className="font-display text-ash text-5xl sm:text-6xl font-bold leading-tight mb-7">
              Food is<br />
              <em className="italic text-copper">Strategy.</em>
            </h2>
            <p className="font-body text-ash/50 text-lg leading-relaxed mb-10">
              You can&apos;t out-train a bad foundation. Melaya&apos;s virtual nutrition coaching
              meets you where you are — whether you&apos;re a beginner learning the basics
              or an athlete dialing in performance macros.
            </p>
            <a
              href="mailto:melayapalo@gmail.com?subject=Virtual Nutrition Coaching"
              className="inline-block border border-copper text-copper font-body text-xs tracking-[0.15em] uppercase px-8 py-4 hover:bg-copper hover:text-ash transition-colors"
            >
              Email Melaya
            </a>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-2 gap-px bg-ash/8">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="bg-void p-7 group hover:bg-smoke transition-colors"
              >
                <div className="w-6 h-px bg-copper mb-5 group-hover:w-10 transition-all duration-300" />
                <h4 className="font-display text-ash font-semibold text-xl mb-2 leading-snug">
                  {p.label}
                </h4>
                <p className="font-body text-ash/40 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
