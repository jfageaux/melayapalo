import SectionPreamble from "./SectionPreamble";
import { credentials } from "@/lib/content";

export default function WhyMelaya() {
  return (
    <section className="bg-void px-8 sm:px-12 lg:px-16 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <SectionPreamble eyebrow="Credentials" />
          <h2 className="display-heading font-display text-ash text-5xl sm:text-6xl lg:text-7xl font-bold">
            Why Train<br />
            with <em className="italic text-copper">Melaya</em>
          </h2>
        </div>

        <ul className="divide-y divide-ash/10">
          {credentials.map(({ label, detail }) => (
            <li
              key={label}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-6"
            >
              <span className="font-display text-ash text-2xl sm:text-3xl font-bold">{label}</span>
              <span className="font-body text-dust text-sm tracking-[0.12em] uppercase">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
