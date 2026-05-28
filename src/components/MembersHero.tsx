export default function MembersHero() {
  return (
    <section className="bg-bark pt-32 pb-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-clay/20 border border-clay/30 px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-clay animate-pulse" />
          <span className="text-clay text-xs font-medium tracking-widest uppercase">
            Coming Soon
          </span>
        </div>

        <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Your Training,<br />
          <em className="italic text-clay">Your Terms.</em>
        </h1>

        <p className="text-cream/60 text-xl leading-relaxed max-w-2xl mb-10">
          The members area is where the deep work lives — full fight camp programs, weekly
          training videos, nutrition frameworks, mindset work, and a community of women
          who take their training seriously.
        </p>

        <a
          href="mailto:melayapalo@gmail.com?subject=Members Waitlist — Add Me"
          className="inline-block bg-clay text-cream text-sm font-medium tracking-widest uppercase px-10 py-4 hover:opacity-80 transition-opacity"
        >
          Join the Waitlist
        </a>
      </div>
    </section>
  );
}
