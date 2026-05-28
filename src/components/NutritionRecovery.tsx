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
    <section className="bg-sand py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {tabs.map((tab) => (
            <div key={tab.label}>
              <p className="text-clay text-xs font-medium tracking-widest uppercase mb-4">
                Members Content
              </p>
              <h2 className="font-serif text-bark text-3xl sm:text-4xl font-bold mb-6">
                {tab.label}
              </h2>
              <ul className="space-y-4">
                {tab.items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-clay mt-1 shrink-0 text-sm">—</span>
                    <span className="text-stone text-base leading-relaxed">{item}</span>
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
