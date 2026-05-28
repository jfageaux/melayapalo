const checkInTypes = [
  {
    icon: "◈",
    title: "Weekly Progress Form",
    desc: "Submit how your week went — training, nutrition, energy, mood. Melaya reads every one.",
  },
  {
    icon: "◈",
    title: "Video Check-In (Select Plans)",
    desc: "Bi-weekly video calls for Fight Camp and Full Resilience members to review and adjust programming.",
  },
  {
    icon: "◈",
    title: "Form Review",
    desc: "Submit a short training video for technique feedback and coaching notes.",
  },
  {
    icon: "◈",
    title: "Monthly Recap",
    desc: "End-of-month summary with your progress, a reflection prompt, and updated goals for the next block.",
  },
];

export default function MemberCheckIns() {
  return (
    <section className="bg-bark py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
              Accountability
            </p>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Member<br />
              <em className="italic text-clay">Check-Ins</em>
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed">
              Progress doesn't happen in isolation. Members are seen, heard, and
              coached — with consistent touchpoints built directly into the program.
            </p>
          </div>

          <div className="grid gap-6">
            {checkInTypes.map((c) => (
              <div key={c.title} className="flex gap-5 border-b border-earth pb-6 last:border-0 last:pb-0">
                <span className="text-clay text-lg shrink-0 mt-0.5">{c.icon}</span>
                <div>
                  <h3 className="font-serif text-cream font-semibold mb-1">{c.title}</h3>
                  <p className="text-cream/50 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
