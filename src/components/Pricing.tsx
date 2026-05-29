export default function Pricing() {
  return (
    <section className="bg-sand py-24 px-5" id="pricing">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
            Coaching
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl font-bold leading-tight mb-4">
            One Package. Real Results.
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Everything you need to build momentum — nothing you don&apos;t.
          </p>
        </div>

        <div className="bg-bark text-cream p-10 sm:p-14">
          <div className="mb-8">
            <h3 className="font-serif text-2xl font-semibold text-cream mb-2">
              4-Week Coaching Package
            </h3>
            <p className="text-cream/60 text-sm mb-6">
              A focused four weeks to reset, build, and move forward.
            </p>
            <div className="flex items-end gap-2">
              <span className="font-serif text-5xl font-bold text-clay">$300</span>
              <span className="text-cream/50 text-sm mb-1">/ 4 weeks</span>
            </div>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "4-week personalized training program",
              "1 × 50-minute initial meet & greet / assessment",
              "Weekly 30-minute video check-in & goal session",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm leading-snug text-cream/80">
                <span className="text-clay mt-0.5 shrink-0">—</span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:melayapalo@gmail.com?subject=${encodeURIComponent("4-Week Package — I'm Ready")}`}
            className="block text-center text-sm font-medium tracking-widest uppercase py-4 bg-clay text-cream transition-opacity hover:opacity-80"
          >
            Get Started
          </a>
        </div>

        <p className="text-center text-stone text-sm mt-8 opacity-70">
          Questions?{" "}
          <a href="mailto:melayapalo@gmail.com" className="underline hover:text-bark">
            Email Melaya
          </a>{" "}
          — she&apos;ll get back to you.
        </p>
      </div>
    </section>
  );
}
