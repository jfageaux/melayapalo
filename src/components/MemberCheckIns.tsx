const checkInTypes = [
  {
    title: "Weekly Progress Form",
    desc: "Submit how your week went — training, nutrition, energy, mood. Melaya reads every one.",
  },
  {
    title: "Video Check-In (Select Plans)",
    desc: "Bi-weekly video calls for Fight Camp and Full Resilience members to review and adjust programming.",
  },
  {
    title: "Form Review",
    desc: "Submit a short training video for technique feedback and coaching notes.",
  },
  {
    title: "Monthly Recap",
    desc: "End-of-month summary with your progress, a reflection prompt, and updated goals for the next block.",
  },
];

export default function MemberCheckIns() {
  return (
    <section className="bg-void py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="w-10 h-px bg-copper mb-8" />
            <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
              Accountability
            </p>
            <h2 className="font-display text-ash text-5xl sm:text-6xl font-bold leading-tight mb-7">
              Member<br />
              <em className="italic text-copper">Check-Ins</em>
            </h2>
            <p className="font-body text-ash/40 text-lg leading-relaxed">
              Progress doesn&apos;t happen in isolation. Members are seen, heard, and
              coached — with consistent touchpoints built directly into the program.
            </p>
          </div>

          <div>
            {checkInTypes.map((c, i) => (
              <div
                key={c.title}
                className={`py-8 ${i < checkInTypes.length - 1 ? "border-b border-ash/10" : ""}`}
              >
                <div className="flex gap-5">
                  <div className="w-5 h-px bg-copper shrink-0 mt-3.5" />
                  <div>
                    <h3 className="font-display text-ash font-semibold text-xl mb-2 leading-snug">
                      {c.title}
                    </h3>
                    <p className="font-body text-ash/40 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
