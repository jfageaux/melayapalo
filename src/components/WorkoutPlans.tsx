const plans = [
  {
    num: "01",
    title: "Structure That Sticks",
    body: "Every program is built around fight camp principles — periodized training blocks that build strength, conditioning, and endurance in phases. No guesswork, no filler.",
  },
  {
    num: "02",
    title: "Intensity by Design",
    body: "Each session is calibrated to push without breaking you. We train hard, we train smart, and we recover with intention.",
  },
  {
    num: "03",
    title: "Real Progression",
    body: "Programs evolve as you do. You'll move through foundational conditioning, skill work, and peak weeks — always building toward something.",
  },
];

export default function WorkoutPlans() {
  return (
    <section className="bg-ash py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <div className="w-10 h-px bg-copper mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
            Fight Camp Programs
          </p>
          <h2 className="font-display text-void text-5xl sm:text-6xl font-bold leading-[1.15] pb-1 mb-6">
            Programs Built for<br />
            <em className="italic text-dust">the Long Game</em>
          </h2>
          <p className="font-body text-dust text-lg leading-relaxed">
            Melaya&apos;s training methodology draws from real fight camp preparation —
            translated into full-body programs you can do from your gym, garage, or living room.
            Every week has a purpose. Every phase has a goal.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-10 sm:gap-12">
          {plans.map((plan) => (
            <div key={plan.title} className="relative">
              <span className="font-display text-[6rem] font-bold text-fog leading-none select-none block -mb-4 -ml-1">
                {plan.num}
              </span>
              <div className="border-t border-void/15 pt-7">
                <h3 className="font-display text-void text-2xl font-semibold mb-4 leading-snug">
                  {plan.title}
                </h3>
                <p className="font-body text-dust text-sm leading-relaxed">{plan.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-20 bg-void p-8 sm:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <div className="w-8 h-px bg-copper mb-5" />
            <h3 className="font-display text-ash text-2xl font-semibold mb-2">
              What&apos;s included in every plan
            </h3>
            <p className="font-body text-ash/40 text-sm leading-relaxed">
              Weekly workout schedules · Video demonstrations · Rest & recovery protocols · Progression tracking
            </p>
          </div>
          <a
            href="mailto:melayapalo@gmail.com?subject=Fight Camp Program Inquiry"
            className="shrink-0 inline-block bg-copper text-ash font-body text-xs tracking-[0.15em] uppercase px-8 py-4 text-center hover:bg-rust transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
