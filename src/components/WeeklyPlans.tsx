const weeks = [
  {
    label: "Week 1–2",
    phase: "Foundation",
    focus: "Movement patterns, aerobic base, core stability",
    sessions: "4 sessions/week",
    accentClass: "bg-copper",
  },
  {
    label: "Week 3–4",
    phase: "Build",
    focus: "Strength loading, conditioning volume, skill drills",
    sessions: "5 sessions/week",
    accentClass: "bg-dust",
  },
  {
    label: "Week 5–6",
    phase: "Peak",
    focus: "High-intensity intervals, fight camp simulation",
    sessions: "5 sessions/week",
    accentClass: "bg-rust",
  },
  {
    label: "Week 7",
    phase: "Taper & Recover",
    focus: "Active recovery, mobility, mindset reset",
    sessions: "3 sessions/week",
    accentClass: "bg-fog",
  },
];

export default function WeeklyPlans() {
  return (
    <section className="bg-void py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="w-10 h-px bg-copper mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
            Structured Programming
          </p>
          <h2 className="font-display text-ash text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Weekly Training Plans
          </h2>
          <p className="font-body text-ash/40 text-lg leading-relaxed">
            Every week is planned. Every session has a purpose. Members receive
            full weekly programs that follow a fight camp periodization model — layered
            for progressive adaptation over 4–8 week blocks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ash/8">
          {weeks.map((w) => (
            <div key={w.label} className="bg-void p-8 hover:bg-smoke transition-colors">
              <div className={`w-8 h-0.5 mb-6 ${w.accentClass}`} />
              <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-2">
                {w.label}
              </p>
              <h3 className="font-display text-ash text-2xl font-semibold mb-4">
                {w.phase}
              </h3>
              <p className="font-body text-ash/40 text-sm leading-relaxed mb-5">{w.focus}</p>
              <span className="font-body text-dust text-xs tracking-wide">
                {w.sessions}
              </span>
            </div>
          ))}
        </div>

        <p className="font-body text-ash/20 text-sm mt-8 text-center">
          Sample 7-week block. Member plans are customized to your schedule and goals.
        </p>
      </div>
    </section>
  );
}
