import SectionPreamble from "./SectionPreamble";
import { mindsetLessons } from "@/lib/content";

export default function MindsetSection() {
  return (
    <section className="bg-ash py-24 lg:py-32 px-6 relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none hidden lg:block">
        <span
          className="absolute right-0 top-16 font-display font-bold text-fog/70 leading-none uppercase"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
        >
          MIND
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-2xl mb-20">
          <SectionPreamble eyebrow="Mindset & Resilience" light />
          <h2 className="display-heading font-display text-void text-5xl sm:text-6xl font-bold mb-6">
            The Mental Side<br />
            <em className="italic text-copper">of the Work</em>
          </h2>
          <p className="font-body text-dust-ink text-lg leading-relaxed">
            Performance is as much mental as it is physical. Members get access to
            Melaya&rsquo;s mindset lesson series — grounded, direct, and built for real performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 border-t border-void/10">
          {mindsetLessons.map((l, i) => (
            <div
              key={l.number}
              className={`flex gap-6 p-8 border-b border-void/10 hover:bg-fog/40 transition-colors ${i % 2 === 0 ? "sm:border-r" : ""}`}
            >
              <span className="font-display text-4xl font-bold text-copper leading-none shrink-0 pt-1 lining-nums tabular-nums">
                {l.number}
              </span>
              <div>
                <h3 className="font-display text-void text-2xl font-semibold mb-3 leading-snug">{l.title}</h3>
                <p className="font-body text-dust-ink text-sm leading-relaxed">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
