import SectionPreamble from "./SectionPreamble";
import { checkIns } from "@/lib/content";

export default function MemberCheckIns() {
  return (
    <section className="bg-void py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <SectionPreamble eyebrow="Accountability" />
            <h2 className="display-heading font-display text-ash text-5xl sm:text-6xl font-bold mb-7">
              Member<br />
              <em className="italic text-copper">Check-Ins</em>
            </h2>
            <p className="font-body text-ash/40 text-lg leading-relaxed">
              Progress doesn&apos;t happen in isolation. Members are seen, heard, and
              coached — with consistent touchpoints built directly into the program.
            </p>
          </div>

          <div>
            {checkIns.map((c, i) => (
              <div
                key={c.title}
                className={`py-8 ${i < checkIns.length - 1 ? "border-b border-ash/10" : ""}`}
              >
                <div className="flex gap-5">
                  <div className="w-5 h-px bg-copper shrink-0 mt-3.5" />
                  <div>
                    <h3 className="font-display text-ash font-semibold text-xl mb-2 leading-snug">{c.title}</h3>
                    <p className="font-body text-ash/40 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
