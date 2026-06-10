import SectionPreamble from "./SectionPreamble";
import { nutritionTabs } from "@/lib/content";

export default function NutritionRecovery() {
  return (
    <section className="bg-fog py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionPreamble eyebrow="Members Content" light />
        <div className="grid lg:grid-cols-2 gap-20">
          {nutritionTabs.map((tab) => (
            <div key={tab.label}>
              <h2 className="display-heading font-display text-void text-4xl sm:text-5xl font-bold mb-8">{tab.label}</h2>
              <ul className="space-y-0">
                {tab.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-void/10 py-5 last:border-0"
                  >
                    <span className="text-void/40 text-sm shrink-0 mt-0.5">—</span>
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
