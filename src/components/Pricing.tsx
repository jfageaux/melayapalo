const tiers = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    tagline: "Build the foundation.",
    features: [
      "Monthly workout program",
      "Video exercise library",
      "Weekly check-in form",
      "Email support",
    ],
    cta: "Start Here",
    highlighted: false,
  },
  {
    name: "Fight Camp",
    price: "$199",
    period: "/month",
    tagline: "Train like you mean it.",
    features: [
      "Everything in Starter",
      "Personalized fight camp programming",
      "Bi-weekly video check-ins",
      "Nutrition guidance",
      "Recovery protocols",
    ],
    cta: "Join Fight Camp",
    highlighted: true,
  },
  {
    name: "Full Resilience",
    price: "$349",
    period: "/month",
    tagline: "The complete experience.",
    features: [
      "Everything in Fight Camp",
      "Weekly 1:1 coaching call",
      "Custom nutrition plan",
      "Mindset & accountability sessions",
      "Priority response",
    ],
    cta: "Go All In",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-sand py-24 px-5" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
            Coaching Plans
          </p>
          <h2 className="font-serif text-bark text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Invest in Yourself
          </h2>
          <p className="text-stone text-lg leading-relaxed">
            Every tier is built around real results. Choose the level of support that fits where you are now.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col p-8 ${
                tier.highlighted
                  ? "bg-bark text-cream"
                  : "bg-cream text-bark border border-taupe/40"
              }`}
            >
              {tier.highlighted && (
                <span className="text-clay text-xs font-medium tracking-widest uppercase mb-6 block">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3
                  className={`font-serif text-xl font-semibold mb-1 ${
                    tier.highlighted ? "text-cream" : "text-bark"
                  }`}
                >
                  {tier.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    tier.highlighted ? "text-cream/60" : "text-stone"
                  }`}
                >
                  {tier.tagline}
                </p>
                <div className="flex items-end gap-1">
                  <span
                    className={`font-serif text-4xl font-bold ${
                      tier.highlighted ? "text-clay" : "text-bark"
                    }`}
                  >
                    {tier.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${
                      tier.highlighted ? "text-cream/50" : "text-stone"
                    }`}
                  >
                    {tier.period}
                  </span>
                </div>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className={`flex items-start gap-3 text-sm leading-snug ${
                      tier.highlighted ? "text-cream/80" : "text-stone"
                    }`}
                  >
                    <span className="text-clay mt-0.5 shrink-0">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:melayapalo@gmail.com?subject=${encodeURIComponent(
                  tier.name + " Plan — I'm Ready"
                )}`}
                className={`block text-center text-sm font-medium tracking-widest uppercase py-4 transition-opacity hover:opacity-80 ${
                  tier.highlighted
                    ? "bg-clay text-cream"
                    : "bg-bark text-cream"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-stone text-sm mt-8 opacity-70">
          Not sure where to start? <a href="mailto:melayapalo@gmail.com" className="underline hover:text-bark">Email Melaya</a> — she'll help you figure it out.
        </p>
      </div>
    </section>
  );
}
