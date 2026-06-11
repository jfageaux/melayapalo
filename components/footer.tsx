import { Reveal } from "@/components/reveal";
import { Button, Eyebrow } from "@/components/ui";
import { EMAIL, mailto, SUBJECTS } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow tone="light" className="justify-center">
              Get in touch
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
              Ready to Start?
              <br />
              <span className="text-signal">Let&rsquo;s Build.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
              Send Melaya a message. No pressure, no sales pitch — just a real
              conversation.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href={mailto(SUBJECTS.footerTalk)} variant="light">
                Work with Melaya
              </Button>
              <Button href={mailto(SUBJECTS.consult)} variant="ghostLight">
                Book a Consult
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:mt-32 md:flex-row md:justify-between">
          <p className="font-display text-sm font-extrabold tracking-[0.18em]">
            MELAYA PALO
          </p>
          <p className="text-xs text-white/55">
            © {year} Melaya Palo. All rights reserved.
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="font-mono text-xs tracking-wide text-white/55 transition-colors hover:text-signal"
          >
            {EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
