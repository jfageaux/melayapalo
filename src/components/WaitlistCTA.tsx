export default function WaitlistCTA() {
  return (
    <section className="bg-copper py-28 px-6 relative overflow-hidden">
      {/* Decorative background text */}
      <span
        aria-hidden
        className="parallax-drift absolute right-0 bottom-0 font-display font-bold text-rust/25 select-none pointer-events-none leading-none uppercase"
        style={{ fontSize: "clamp(6rem, 18vw, 18rem)" }}
      >
        FIRST.
      </span>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-3xl">
          <div className="w-10 h-px bg-ash/50 mb-8" />
          <p className="font-body text-ash/60 text-xs tracking-[0.2em] uppercase mb-6">
            Members Area — Opening Soon
          </p>
          <h2 className="font-display text-ash text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] mb-7">
            Be First in the Door.
          </h2>
          <p className="font-body text-ash/70 text-xl leading-relaxed max-w-xl mb-10">
            The full members area — fight camp videos, weekly programs, nutrition frameworks,
            mindset lessons, and community — is coming. Get on the waitlist and you&apos;ll hear
            first when the doors open.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <a
              href="mailto:melayapalo@gmail.com?subject=Members%20Waitlist%20%E2%80%94%20Add%20Me&body=Hey%20Melaya%2C%20I%27d%20love%20to%20be%20on%20the%20waitlist%20for%20the%20members%20area.%20Let%20me%20know%20when%20it%20launches!"
              className="inline-block bg-void text-ash font-body text-xs tracking-[0.15em] uppercase px-12 py-5 hover:bg-smoke transition-colors"
            >
              Join the Waitlist
            </a>
            <p className="font-body text-ash/50 text-xs self-center">
              No spam. Just a heads-up when it&apos;s ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
