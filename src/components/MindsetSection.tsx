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
    <section className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
            Mindset & Resilience
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl font-bold leading-tight mb-4">
            The Mental Side<br />
            <em className="italic text-stone">of the Work</em>
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Performance is as much mental as it is physical. Members get access to
            Melaya's mindset lesson series — grounded, direct, and built for real performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {lessons.map((l) => (
            <div key={l.number} className="flex gap-6">
              <span className="font-serif text-3xl font-bold text-sand shrink-0 leading-none pt-1">
                {l.number}
              </span>
              <div>
                <h3 className="font-serif text-bark text-lg font-semibold mb-2">
                  {l.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
