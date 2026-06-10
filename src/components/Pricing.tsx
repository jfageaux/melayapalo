import SectionPreamble from "./SectionPreamble";
import Cta from "./Cta";
import { pricingFeatures } from "@/lib/content";
import { CONTACT_EMAIL, mailto } from "@/lib/email";

export default function Pricing() {
  return (
    <section className="bg-fog py-24 lg:py-32 px-6" id="pricing">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-10 h-px bg-copper mx-auto mb-8" />
          <p className="font-body text-rust text-xs tracking-[0.2em] uppercase mb-5">Coaching</p>
          <h2 className="display-heading font-display text-void text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            One Package.<br />Real Results.
          </h2>
          <p className="font-body text-dust-ink text-lg leading-relaxed">
            Everything you need to build momentum — nothing you don&rsquo;t.
          </p>
        </div>

        <div className="bg-void text-ash p-6 sm:p-14 relative">
          <div className="absolute top-4 right-4 w-10 h-10 sm:top-5 sm:right-5 sm:w-16 sm:h-16 border-t border-r border-copper/60" />

          <div className="mb-8">
            <SectionPreamble eyebrow="4-Week Coaching Package" />
            <div className="flex items-baseline gap-3 mb-3">
              <span
                className="font-display font-bold text-copper leading-none lining-nums"
                style={{ fontSize: "clamp(4rem, 10vw, 6rem)" }}
              >
                $300
              </span>
              <span className="font-body text-ash/50 text-sm">/ 4 weeks</span>
            </div>
            <p className="font-body text-ash/50 text-sm">A focused four weeks to reset, build, and move forward.</p>
          </div>

          <div className="h-px bg-ash/10 mb-8" />

          <ul className="space-y-5 mb-10">
            {pricingFeatures.map((f) => (
              <li key={f} className="flex items-start gap-4 font-body text-sm text-ash/70 leading-snug">
                <span className="text-ash/50 shrink-0 mt-0.5">—</span>
                {f}
              </li>
            ))}
          </ul>

          <Cta href={mailto("4-Week Package — I'm Ready")} className="w-full">
            Get Started
          </Cta>
        </div>

        <p className="text-center font-body text-dust-ink text-sm mt-8">
          Questions?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-rust underline decoration-transparent underline-offset-4 hover:decoration-rust transition-colors"
          >
            Email Melaya
          </a>{" "}
          — she&rsquo;ll get back to you.
        </p>
      </div>
    </section>
  );
}
