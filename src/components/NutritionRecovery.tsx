const tabs = [
  {
    label: "Nutrition",
    items: [
      "Weekly meal focus guides",
      "Pre- and post-training fueling",
      "Macro targets by training phase",
      "Grocery list templates",
      "Eating on the go strategies",
    ],
  },
  {
    label: "Recovery",
    items: [
      "Post-session cooldown flows",
      "Sleep & nervous system protocols",
      "Foam rolling & soft tissue routines",
      "Deload week structure",
      "HRV & body awareness basics",
    ],
  },
];

export default function NutritionRecovery() {
  return (
    <section className="bg-fog py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          {tabs.map((tab) => (
            <div key={tab.label}>
              <div className="w-10 h-px bg-copper mb-8" />
              <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
                Members Content
              </p>
              <h2 className="font-display text-void text-4xl sm:text-5xl font-bold mb-10">
                {tab.label}
              </h2>
              <ul className="space-y-0">
                {tab.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-void/10 py-5 last:border-0"
                  >
                    <span className="text-copper text-sm shrink-0 mt-0.5">—</span>
                    <span className="font-body text-void/70 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
