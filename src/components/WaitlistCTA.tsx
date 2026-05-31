import Cta from "./Cta";
import { mailto } from "@/lib/email";

export default function WaitlistCTA() {
  return (
    <section className="bg-copper py-28 px-6 relative">
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <span
          className="absolute right-0 bottom-0 font-display font-bold text-rust/25 leading-none uppercase"
          style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
        >
          FIRST.
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <div className="w-10 h-px bg-ash/50 mb-8" />
          <p className="font-body text-ash/60 text-xs tracking-[0.2em] uppercase mb-6">
            Members Area — Opening Soon
          </p>
          <h2 className="display-heading font-display text-ash text-5xl sm:text-6xl lg:text-7xl font-bold mb-7">
            Be First in the Door.
          </h2>
          <p className="font-body text-ash/70 text-xl leading-relaxed max-w-xl mb-10">
            The full members area — fight camp videos, weekly programs, nutrition frameworks,
            mindset lessons, and community — is coming. Get on the waitlist and you&apos;ll hear
            first when the doors open.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <Cta
              variant="dark"
              href={mailto(
                "Members Waitlist — Add Me",
                "Hey Melaya, I'd love to be on the waitlist for the members area. Let me know when it launches!"
              )}
              className="px-12 py-5"
            >
              Join the Waitlist
            </Cta>
            <p className="font-body text-ash/50 text-xs self-center">
              No spam. Just a heads-up when it&apos;s ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
