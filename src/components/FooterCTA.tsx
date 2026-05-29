export default function FooterCTA() {
  return (
    <footer className="bg-void">
      {/* CTA band */}
      <div className="py-24 px-6 border-b border-ash/5">
        <div className="max-w-7xl mx-auto">
          <div className="w-10 h-px bg-copper mb-12" />
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <h2 className="font-display text-ash text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-5">
                Ready to Start?<br />
                <em className="italic text-copper">Let&apos;s Build.</em>
              </h2>
              <p className="font-body text-ash/35 text-lg leading-relaxed max-w-md">
                Send Melaya a message. No pressure, no sales pitch — just a real conversation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="mailto:melayapalo@gmail.com?subject=Work%20with%20Melaya%20%E2%80%94%20Let%27s%20Talk"
                className="inline-block bg-copper text-ash font-body text-xs tracking-[0.15em] uppercase px-10 py-4 text-center hover:bg-rust transition-colors"
              >
                Work with Melaya
              </a>
              <a
                href="mailto:melayapalo@gmail.com?subject=Book a Consult"
                className="inline-block border border-ash/20 text-ash font-body text-xs tracking-[0.15em] uppercase px-10 py-4 text-center hover:border-ash/40 transition-colors"
              >
                Book a Consult
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-ash/20 text-sm tracking-[0.2em] uppercase">
            Melaya Palo
          </span>
          <p className="font-body text-ash/15 text-xs">
            © {new Date().getFullYear()} Melaya Palo. All rights reserved.
          </p>
          <a
            href="mailto:melayapalo@gmail.com"
            className="font-body text-ash/20 text-xs hover:text-ash/50 transition-colors"
          >
            melayapalo@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
