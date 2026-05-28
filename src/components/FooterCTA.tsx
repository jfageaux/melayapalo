export default function FooterCTA() {
  return (
    <footer className="bg-bark">
      {/* CTA Band */}
      <div className="py-20 px-5 border-b border-earth">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <h2 className="font-serif text-cream text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Ready to Start?
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed max-w-md">
              Send Melaya a message and let's build something together.
              No pressure, no sales pitch — just a real conversation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="mailto:melayapalo@gmail.com?subject=Work with Melaya — Let's Talk"
              className="inline-block bg-clay text-cream text-sm font-medium tracking-widest uppercase px-10 py-4 text-center hover:opacity-80 transition-opacity"
            >
              Work with Melaya
            </a>
            <a
              href="mailto:melayapalo@gmail.com?subject=Book a Consult"
              className="inline-block border border-cream/30 text-cream text-sm font-medium tracking-widest uppercase px-10 py-4 text-center hover:bg-cream/5 transition-colors"
            >
              Book a Consult
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif text-cream/40 text-sm tracking-widest uppercase">
            Melaya Palo
          </span>
          <p className="text-cream/30 text-xs">
            © {new Date().getFullYear()} Melaya Palo. All rights reserved.
          </p>
          <a
            href="mailto:melayapalo@gmail.com"
            className="text-cream/40 text-xs hover:text-cream/70 transition-colors"
          >
            melayapalo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
