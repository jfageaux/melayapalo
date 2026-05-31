import Cta from "./Cta";
import { CONTACT_EMAIL, mailto } from "@/lib/email";

export default function FooterCTA() {
  return (
    <footer className="bg-void">
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
              <Cta href={mailto("Work with Melaya — Let's Talk")} className="px-10">
                Work with Melaya
              </Cta>
              <Cta variant="ghost" href={mailto("Book a Consult")} className="px-10">
                Book a Consult
              </Cta>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-ash/20 text-sm tracking-[0.2em] uppercase">Melaya Palo</span>
          <p className="font-body text-ash/15 text-xs">
            © {new Date().getFullYear()} Melaya Palo. All rights reserved.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-body text-ash/20 text-xs hover:text-ash/50 transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
