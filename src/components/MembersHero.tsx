import Cta from "./Cta";
import { mailto } from "@/lib/email";

export default function MembersHero() {
  return (
    <section className="bg-void pt-32 pb-24 px-6 relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          className="absolute -right-8 bottom-0 font-display font-bold text-ash/[0.025] leading-none uppercase"
          style={{ fontSize: "clamp(3.5rem, 20vw, 20rem)" }}
        >
          MEMBERS
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="inline-flex items-center gap-3 mb-10 animate-rise" style={{ animationDelay: "0.15s" }}>
          <span className="w-1.5 h-1.5 bg-copper animate-pulse" />
          <span className="font-body text-copper text-xs tracking-[0.2em] uppercase">Coming Soon</span>
        </div>

        <div className="w-10 h-px bg-copper mb-8 animate-fade" style={{ animationDelay: "0.05s" }} />

        <h1
          className="display-heading font-display text-ash text-6xl sm:text-7xl lg:text-[5.5rem] font-bold mb-7 animate-rise"
          style={{ animationDelay: "0.25s" }}
        >
          Your Training,<br />
          <em className="italic text-copper">Your Terms.</em>
        </h1>

        <p
          className="font-body text-ash/50 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10 animate-rise"
          style={{ animationDelay: "0.4s" }}
        >
          The members area is where the deep work lives — full fight camp programs, weekly
          training videos, nutrition frameworks, mindset work, and a community of athletes
          who take their performance seriously.
        </p>

        <Cta
          href={mailto("Members Waitlist — Add Me")}
          className="px-10 animate-rise"
          style={{ animationDelay: "0.52s" }}
        >
          Join the Waitlist
        </Cta>
      </div>
    </section>
  );
}
