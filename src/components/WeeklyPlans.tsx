import SectionPreamble from "./SectionPreamble";
import { weeks } from "@/lib/content";

export default function WeeklyPlans() {
  return (
    <section className="bg-void py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <SectionPreamble eyebrow="Structured Programming" />
          <h2 className="display-heading font-display text-ash text-5xl sm:text-6xl font-bold mb-6">
            Weekly Training Plans
          </h2>
          <p className="font-body text-ash/40 text-lg leading-relaxed">
            Every week is planned. Every session has a purpose. Members receive
            full weekly programs that follow a fight camp periodization model — layered
            for progressive adaptation over 4–8 week blocks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ash/8">
          {weeks.map((w) => (
            <div key={w.label} className="bg-void p-8 hover:bg-smoke transition-colors">
              <div className={`w-8 h-0.5 mb-6 ${w.accentClass}`} />
              <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-2">{w.label}</p>
              <h3 className="font-display text-ash text-2xl font-semibold mb-4">{w.phase}</h3>
              <p className="font-body text-ash/40 text-sm leading-relaxed mb-5">{w.focus}</p>
              <span className="font-body text-dust text-xs tracking-wide">{w.sessions}</span>
            </div>
          ))}
        </div>

        <p className="font-body text-ash/20 text-sm mt-8 text-center">
          Sample 7-week block. Member plans are customized to your schedule and goals.
        </p>
      </div>
    </section>
  );
}
