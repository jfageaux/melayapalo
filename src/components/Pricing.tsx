import SectionPreamble from "./SectionPreamble";
import { pricingFeatures } from "@/lib/content";
import { CONTACT_EMAIL, mailto } from "@/lib/email";

export default function Pricing() {
  return (
    <section className="bg-fog py-28 px-6" id="pricing">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-10 h-px bg-copper mx-auto mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">Coaching</p>
          <h2 className="font-display text-void text-5xl sm:text-6xl font-bold leading-tight mb-4">
            One Package.<br />Real Results.
          </h2>
          <p className="font-body text-dust text-lg leading-relaxed">
            Everything you need to build momentum — nothing you don&apos;t.
          </p>
        </div>

        <div className="bg-void text-ash p-10 sm:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-28 h-28 border-b border-l border-ash/5" />

          <div className="mb-8">
            <SectionPreamble eyebrow="4-Week Coaching Package" />
            <div className="flex items-end gap-3 mb-3">
              <span
                className="font-display font-bold text-copper leading-none"
                style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}
              >
                $300
              </span>
              <span className="font-body text-ash/30 text-sm mb-2">/ 4 weeks</span>
            </div>
            <p className="font-body text-ash/30 text-sm">A focused four weeks to reset, build, and move forward.</p>
          </div>

          <div className="h-px bg-ash/10 mb-8" />

          <ul className="space-y-5 mb-10">
            {pricingFeatures.map((f) => (
              <li key={f} className="flex items-start gap-4 font-body text-sm text-ash/70 leading-snug">
                <span className="text-copper shrink-0 mt-0.5">—</span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href={mailto("4-Week Package — I'm Ready")}
            className="block text-center font-body text-xs tracking-[0.15em] uppercase py-4 bg-copper text-ash hover:bg-rust transition-colors"
          >
            Get Started
          </a>
        </div>

        <p className="text-center font-body text-dust text-sm mt-8">
          Questions?{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-copper hover:underline">
            Email Melaya
          </a>{" "}
          — she&apos;ll get back to you.
        </p>
      </div>
    </section>
  );
}
