const weeks = [
  {
    label: "Week 1–2",
    phase: "Foundation",
    focus: "Movement patterns, aerobic base, core stability",
    sessions: "4 sessions/week",
    color: "border-clay",
  },
  {
    label: "Week 3–4",
    phase: "Build",
    focus: "Strength loading, conditioning volume, skill drills",
    sessions: "5 sessions/week",
    color: "border-stone",
  },
  {
    label: "Week 5–6",
    phase: "Peak",
    focus: "High-intensity intervals, fight camp simulation",
    sessions: "5 sessions/week",
    color: "border-earth",
  },
  {
    label: "Week 7",
    phase: "Taper & Recover",
    focus: "Active recovery, mobility, mindset reset",
    sessions: "3 sessions/week",
    color: "border-taupe",
  },
];

export default function WeeklyPlans() {
  return (
    <section className="bg-earth py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
            Structured Programming
          </p>
          <h2 className="font-serif text-cream text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Weekly Training Plans
          </h2>
          <p className="text-cream/60 text-lg leading-relaxed">
            Every week is planned. Every session has a purpose. Members receive
            full weekly programs that follow a fight camp periodization model — layered
            for progressive adaptation over 4–8 week blocks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-bark/60">
          {weeks.map((w, i) => (
            <div
              key={w.label}
              className={`p-7 border-t-4 ${w.color} ${
                i < weeks.length - 1 ? "border-r border-r-bark/60" : ""
              } bg-bark/30`}
            >
              <p className="text-clay text-xs font-medium tracking-widest uppercase mb-2">
                {w.label}
              </p>
              <h3 className="font-serif text-cream text-xl font-semibold mb-4">
                {w.phase}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed mb-4">{w.focus}</p>
              <span className="text-clay/70 text-xs font-medium tracking-wide">
                {w.sessions}
              </span>
            </div>
          ))}
        </div>

        <p className="text-cream/40 text-sm mt-8 text-center">
          Sample 7-week block. Member plans are customized to your schedule and goals.
        </p>
      </div>
    </section>
  );
}
