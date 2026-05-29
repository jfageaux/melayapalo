export default function MembersHero() {
  return (
    <section className="bg-void pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Atmospheric background text */}
      <span
        aria-hidden
        className="absolute -right-8 bottom-0 font-display font-bold text-ash/[0.025] select-none pointer-events-none leading-none uppercase"
        style={{ fontSize: "clamp(6rem, 20vw, 20rem)" }}
      >
        MEMBERS
      </span>

      <div className="max-w-7xl mx-auto relative">
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-1.5 h-1.5 bg-copper animate-pulse" />
          <span className="font-body text-copper text-xs tracking-[0.2em] uppercase">
            Coming Soon
          </span>
        </div>

        <div className="w-10 h-px bg-copper mb-8" />

        <h1 className="font-display text-ash text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.0] mb-7">
          Your Training,<br />
          <em className="italic text-copper">Your Terms.</em>
        </h1>

        <p className="font-body text-ash/50 text-xl leading-relaxed max-w-2xl mb-10">
          The members area is where the deep work lives — full fight camp programs, weekly
          training videos, nutrition frameworks, mindset work, and a community of athletes
          who take their performance seriously.
        </p>

        <a
          href="mailto:melayapalo@gmail.com?subject=Members Waitlist — Add Me"
          className="inline-block bg-copper text-ash font-body text-xs tracking-[0.15em] uppercase px-10 py-4 hover:bg-rust transition-colors"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
