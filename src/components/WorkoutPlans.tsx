const plans = [
  {
    icon: "◈",
    title: "Structure That Sticks",
    body: "Every program is built around fight camp principles — periodized training blocks that build strength, conditioning, and endurance in phases. No guesswork, no filler.",
  },
  {
    icon: "◈",
    title: "Intensity by Design",
    body: "Each session is calibrated to push without breaking you. We train hard, we train smart, and we recover with intention.",
  },
  {
    icon: "◈",
    title: "Real Progression",
    body: "Programs evolve as you do. You'll move through foundational conditioning, skill work, and peak weeks — always building toward something.",
  },
];

export default function WorkoutPlans() {
  return (
    <section className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
            Fight Camp Programs
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Programs Built for<br />
            <em className="italic text-stone">the Long Game</em>
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Melaya's training methodology draws from real fight camp preparation —
            translated into full-body programs you can do from your gym, garage, or living room.
            Every week has a purpose. Every phase has a goal.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="border-t-2 border-clay pt-8 pr-4"
            >
              <span className="text-clay text-2xl block mb-5">{plan.icon}</span>
              <h3 className="font-serif text-bark text-xl font-semibold mb-4">
                {plan.title}
              </h3>
              <p className="text-stone leading-relaxed text-sm">{plan.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-sand rounded-none p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-bark text-2xl font-semibold mb-2">
              What's included in every plan
            </h3>
            <p className="text-stone text-sm leading-relaxed">
              Weekly workout schedules · Video demonstrations · Rest & recovery protocols · Progression tracking
            </p>
          </div>
          <a
            href="mailto:melayapalo@gmail.com?subject=Fight Camp Program Inquiry"
            className="shrink-0 inline-block bg-bark text-cream text-sm font-medium tracking-widest uppercase px-8 py-4 text-center hover:opacity-80 transition-opacity"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
