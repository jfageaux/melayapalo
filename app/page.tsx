import Image from "next/image";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Button, Eyebrow, GhostWord } from "@/components/ui";
import { CREDENTIALS, EMAIL, mailto, PACKAGE_INCLUDES, SUBJECTS } from "@/lib/content";

const TICKER_ITEMS = [
  "Perform with Resilience",
  "Fight Camp Programming",
  "Nutrition Strategy",
  "Mindset Coaching",
  "Long Beach, CA",
  "Virtual Coaching Available",
];

function Ticker() {
  const run = TICKER_ITEMS.map((item) => (
    <span key={item} className="flex items-center">
      <span className="px-7">{item}</span>
      <span className="size-1.5 rotate-45 bg-signal" />
    </span>
  ));
  return (
    <div
      aria-hidden
      className="marquee border-y border-ink/10 bg-paper py-4 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-ink/70"
    >
      <div className="marquee-track">
        {run}
        {run}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <GhostWord
        word="RESILIENCE"
        tone="light"
        className="bottom-[-0.08em] left-[-0.02em] text-[clamp(7rem,21vw,20rem)]"
      />
      <div className="mx-auto grid min-h-svh max-w-7xl items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12 lg:pb-28 lg:pt-36">
        <div className="relative z-10">
          <Reveal>
            <Eyebrow tone="light">Personal Training · Nutrition · Mindset</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-7 font-display text-[clamp(3.3rem,6.5vw,5.9rem)] font-extrabold leading-[0.94] tracking-[-0.03em]">
              Perform with
              <br />
              <span className="text-signal">Resilience.</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              Fight camp programming, nutrition strategy, and mindset coaching —
              built for athletes who want structure and real results.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-10">
              <Button href={mailto(SUBJECTS.heroStart)} variant="light">
                Work with Melaya
              </Button>
            </div>
          </Reveal>
          <Reveal delay={360}>
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7">
              {[
                ["16", "Boxing bouts"],
                ["SFG II", "StrongFirst"],
                ["USAW-L1", "Weightlifting"],
              ].map(([stat, label]) => (
                <div key={stat} className="flex flex-col">
                  <dt className="order-2 mt-1 font-mono text-[10px] uppercase tracking-[0.24em] text-white/45">
                    {label}
                  </dt>
                  <dd className="order-1 whitespace-nowrap font-display text-xl font-bold text-paper md:text-2xl">
                    {stat}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative z-10">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-[1.5rem] border border-signal/50 lg:block"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] ring-1 ring-white/10 lg:aspect-auto lg:h-[34rem] xl:h-[37rem]">
              <Image
                src="/hero-boxing.jpg"
                alt="Melaya Palo training on a heavy bag in silver boxing gloves"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[62%_center]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent"
              />
              <p className="absolute bottom-5 left-5 rounded-full bg-ink/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.26em] text-white/85 backdrop-blur-sm">
                Melaya Palo — Long Beach, CA
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Credentials</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Why Train with Melaya
            </h2>
          </Reveal>
        </div>

        <ul className="mt-14 border-t border-ink/10">
          {CREDENTIALS.map((credential, i) => (
            <Reveal as="li" key={credential.label} delay={i * 70}>
              <div className="group grid items-baseline gap-x-8 gap-y-1 border-b border-ink/10 py-6 md:grid-cols-[5rem_1fr_auto] md:py-7">
                <span
                  aria-hidden
                  className="font-mono text-xs text-ink/40 transition-colors duration-300 group-hover:text-signal-deep"
                >
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-tight transition-transform duration-300 group-hover:translate-x-1.5 md:text-[2rem]">
                  {credential.label}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink/70 md:text-right">
                  {credential.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="bg-paper-deep py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Coaching</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              One Package. Real Results.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg text-ink/60">
              Everything you need to build momentum — nothing you don&rsquo;t.
            </p>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <div className="relative mx-auto mt-14 max-w-2xl overflow-hidden rounded-[1.75rem] bg-ink p-9 text-paper shadow-2xl shadow-ink/25 md:p-14">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 size-72 rounded-full bg-signal/15 blur-3xl"
            />
            <div className="relative">
              <p className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-white/60">
                <span className="size-1.5 rounded-full bg-signal" aria-hidden />
                4-Week Coaching Package
              </p>
              <div className="mt-7 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-display text-7xl font-extrabold tracking-tight md:text-8xl">
                  $300
                </span>
                <span className="font-mono text-sm uppercase tracking-[0.2em] text-white/50">
                  / 4 weeks
                </span>
              </div>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
                A focused four weeks to reset, build, and move forward.
              </p>
              <ul className="mt-9 space-y-4 border-t border-white/10 pt-9">
                {PACKAGE_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-[15px] text-white/85">
                    <svg
                      aria-hidden
                      viewBox="0 0 16 16"
                      className="mt-1 size-3.5 shrink-0 text-signal"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M8 2v12M2 8h12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button
                  href={mailto(SUBJECTS.packageReady)}
                  variant="light"
                  className="w-full sm:w-auto"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={280}>
          <p className="mt-10 text-center text-sm text-ink/65">
            Questions?{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors hover:text-signal-deep"
            >
              Email Melaya
            </a>{" "}
            — she&rsquo;ll get back to you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <Ticker />
        <Credentials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
