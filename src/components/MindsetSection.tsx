const lessons = [
  {
    number: "01",
    title: "Show Up Before You Feel Ready",
    desc: "The discipline to begin is the hardest part. We talk about building the habit before the motivation arrives.",
  },
  {
    number: "02",
    title: "Resilience Is a Practice",
    desc: "Resilience isn't a personality trait — it's something you train. Learn the daily rituals that build it.",
  },
  {
    number: "03",
    title: "Identity Over Outcome",
    desc: "You are not chasing a number on a scale. You are building who you are. Everything else follows.",
  },
  {
    number: "04",
    title: "The Reset Protocol",
    desc: "What to do after a bad week, a missed workout, or a hard day. How to come back without shame.",
  },
];

export default function MindsetSection() {
  return (
    <section className="bg-ash py-28 px-6 relative overflow-hidden">
      {/* Atmospheric background text */}
      <span
        aria-hidden
        className="parallax-drift absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-fog/70 select-none pointer-events-none leading-none uppercase"
        style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
      >
        MIND
      </span>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-20">
          <div className="w-10 h-px bg-copper mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
            Mindset & Resilience
          </p>
          <h2 className="font-display text-void text-5xl sm:text-6xl font-bold leading-tight mb-5">
            The Mental Side<br />
            <em className="italic text-dust">of the Work</em>
          </h2>
          <p className="font-body text-dust text-lg leading-relaxed">
            Performance is as much mental as it is physical. Members get access to
            Melaya&apos;s mindset lesson series — grounded, direct, and built for real performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 border-t border-void/10">
          {lessons.map((l, i) => (
            <div
              key={l.number}
              className={`flex gap-6 p-8 border-b border-void/10 hover:bg-fog/40 transition-colors ${
                i % 2 === 0 ? "sm:border-r" : ""
              }`}
            >
              <span className="font-display text-4xl font-bold text-fog leading-none shrink-0 pt-1">
                {l.number}
              </span>
              <div>
                <h3 className="font-display text-void text-xl font-semibold mb-3 leading-snug">
                  {l.title}
                </h3>
                <p className="font-body text-dust text-sm leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
