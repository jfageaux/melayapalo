import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Reveal } from "@/components/reveal";
import { Button, Eyebrow, GhostWord } from "@/components/ui";
import {
  CHECKINS,
  LESSONS,
  mailto,
  NUTRITION_ITEMS,
  PHASES,
  RECOVERY_ITEMS,
  SUBJECTS,
  VIDEOS,
  WAITLIST_BODY,
} from "@/lib/content";

const MEMBERS_DESCRIPTION =
  "Fight camp video library, weekly training programs, nutrition guidance, mindset lessons, and member check-ins. Coming soon.";

export const metadata: Metadata = {
  title: "Members | Melaya Palo",
  description: MEMBERS_DESCRIPTION,
  openGraph: {
    title: "Members | Melaya Palo",
    description: MEMBERS_DESCRIPTION,
    type: "website",
    images: ["/hero-boxing.jpg"],
  },
};

function MembersHero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <GhostWord
        word="MEMBERS"
        tone="light"
        className="bottom-[-0.08em] right-[-0.02em] text-[clamp(7rem,23vw,22rem)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-28 pt-40 md:pb-36 md:pt-48">
        <Reveal>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
            <span className="relative flex size-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            Coming Soon
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl font-display text-[clamp(3.2rem,8vw,6.5rem)] font-extrabold leading-[0.94] tracking-[-0.03em]">
            Your Training, <span className="text-signal">Your Terms.</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            The members area is where the deep work lives — full fight camp
            programs, weekly training videos, nutrition frameworks, mindset work,
            and a community of athletes who take their performance seriously.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10">
            <Button href={mailto(SUBJECTS.waitlist)} variant="signal">
              Join the Waitlist
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <span className="flex size-14 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-signal group-hover:ring-signal">
      <svg aria-hidden viewBox="0 0 16 16" className="ml-0.5 size-4 text-white" fill="currentColor">
        <path d="M4 2.5v11l9-5.5-9-5.5Z" />
      </svg>
    </span>
  );
}

function WorkoutLibrary() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow>Members Only</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                Workout Library
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-xs text-sm leading-relaxed text-ink/65 md:text-right">
              New videos added weekly. Filter by category, difficulty, or
              duration.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.map((video, i) => (
            <Reveal key={video.title} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-2xl bg-white ring-1 ring-ink/[0.07] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-ink/10">
                <div className="stripes-dark relative flex aspect-video items-center justify-center bg-ink">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-8xl font-extrabold tracking-tight text-white/[0.05]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute left-3.5 top-3.5 rounded-full bg-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
                    {video.difficulty}
                  </span>
                  <PlayIcon />
                  <span className="absolute bottom-3.5 right-3.5 rounded-md bg-ink/70 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-signal-deep">
                    {video.category}
                  </p>
                  <h3 className="mt-2.5 font-display text-xl font-bold tracking-tight">
                    {video.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                    {video.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start gap-8 rounded-[1.75rem] bg-ink p-9 text-paper md:flex-row md:items-center md:justify-between md:p-12">
            <div>
              <h3 className="font-display text-2xl font-extrabold tracking-tight md:text-3xl">
                Full library unlocks with membership.
              </h3>
              <p className="mt-3 max-w-xl text-white/65">
                30+ videos and growing — fight camp sessions, skill work,
                recovery, and performance mindset.
              </p>
            </div>
            <Button href={mailto(SUBJECTS.waitlist)} variant="signal" className="shrink-0">
              Join Waitlist
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WeeklyPlans() {
  return (
    <section className="bg-paper-deep py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Structured Programming</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Weekly Training Plans
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Every week is planned. Every session has a purpose. Members receive
              full weekly programs that follow a fight camp periodization model —
              layered for progressive adaptation over 4–8 week blocks.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map((phase, i) => (
            <Reveal key={phase.phase} delay={i * 90}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-7 ring-1 ring-ink/[0.07]">
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.24em] text-signal-deep">
                  {phase.weeks}
                </p>
                <h3 className="mt-3 font-display text-2xl font-extrabold tracking-tight">
                  {phase.phase}
                </h3>
                <p className="mb-7 mt-3 text-sm leading-relaxed text-ink/65">
                  {phase.focus}
                </p>
                <div className="mt-auto border-t border-ink/10 pt-5">
                  <div className="flex gap-1.5" aria-hidden>
                    {Array.from({ length: 7 }).map((_, d) => (
                      <span
                        key={d}
                        className={`h-1 flex-1 rounded-full ${
                          d < phase.sessions ? "bg-signal" : "bg-ink/10"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/70">
                    {phase.volume}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <p className="mt-10 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink/70">
            Sample 7-week block. Member plans are customized to your schedule and
            goals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function NutritionRecovery() {
  const columns = [
    { title: "Nutrition", items: NUTRITION_ITEMS },
    { title: "Recovery", items: RECOVERY_ITEMS },
  ];
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow tone="light">Members Content</Eyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-20 gap-y-16 lg:grid-cols-2">
          {columns.map((column, c) => (
            <Reveal key={column.title} delay={c * 120}>
              <div>
                <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
                  {column.title}
                </h2>
                <ul className="mt-8">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-b border-white/10 py-4 text-[15px] text-white/80"
                    >
                      <svg
                        aria-hidden
                        viewBox="0 0 16 16"
                        className="size-3 shrink-0 text-signal"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      >
                        <path d="M8 2v12M2 8h12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mindset() {
  return (
    <section className="relative isolate overflow-hidden bg-paper py-24 text-ink md:py-32">
      <GhostWord
        word="MIND"
        tone="dark"
        className="right-[-0.04em] top-[-0.06em] text-[clamp(8rem,24vw,22rem)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Mindset &amp; Resilience</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              The Mental Side of the Work
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Performance is as much mental as it is physical. Members get access
              to Melaya&rsquo;s mindset lesson series — grounded, direct, and
              built for real performance.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {LESSONS.map((lesson, i) => (
            <Reveal key={lesson.number} delay={(i % 2) * 100}>
              <article className="h-full rounded-2xl bg-white p-8 ring-1 ring-ink/[0.07] transition-shadow duration-300 hover:shadow-lg hover:shadow-ink/5 md:p-10">
                <p className="font-mono text-sm font-medium text-signal-deep">
                  {lesson.number}
                </p>
                <h3 className="mt-4 font-display text-2xl font-extrabold tracking-tight md:text-[1.7rem]">
                  {lesson.title}
                </h3>
                <p className="mt-3.5 leading-relaxed text-ink/65">
                  {lesson.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHECKIN_ICONS: Record<string, React.ReactNode> = {
  clipboard: (
    <path d="M9 4h6m-6 0a2 2 0 0 0-2 2H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1a2 2 0 0 0-2-2m-6 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 12h6M9 16h4" />
  ),
  video: (
    <path d="M4 6.5h10a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 14 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm11.5 4 5-3v9l-5-3" />
  ),
  target: (
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 12h.01" />
  ),
  calendar: (
    <path d="M5 5.5h14A1.5 1.5 0 0 1 20.5 7v12a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19V7A1.5 1.5 0 0 1 5 5.5Zm-1.5 5h17M8 3v4m8-4v4" />
  ),
};

function CheckIns() {
  return (
    <section className="bg-paper-deep py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Accountability</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 font-display text-5xl font-extrabold tracking-tight md:text-6xl">
              Member Check-Ins
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-ink/60">
              Progress doesn&rsquo;t happen in isolation. Members are seen, heard,
              and coached — with consistent touchpoints built directly into the
              program.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CHECKINS.map((checkin, i) => (
            <Reveal key={checkin.title} delay={(i % 2) * 100}>
              <article className="flex h-full gap-6 rounded-2xl bg-white p-8 ring-1 ring-ink/[0.07]">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-ink text-signal">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="size-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {CHECKIN_ICONS[checkin.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-xl font-extrabold tracking-tight">
                    {checkin.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink/65">
                    {checkin.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WaitlistBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-signal-deep py-24 text-white md:py-32">
      <GhostWord
        word="FIRST."
        tone="onSignal"
        className="bottom-[-0.1em] left-1/2 -translate-x-1/2 text-[clamp(8rem,26vw,24rem)]"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <Eyebrow tone="onSignal" className="justify-center">
            Members Area — Opening Soon
          </Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-7xl">
            Be First in the Door.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white md:text-lg">
            The full members area — fight camp videos, weekly programs, nutrition
            frameworks, mindset lessons, and community — is coming. Get on the
            waitlist and you&rsquo;ll hear first when the doors open.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-5">
            <Button
              href={mailto(SUBJECTS.waitlist, WAITLIST_BODY)}
              variant="onSignal"
              className="focus-visible:outline-white"
            >
              Join the Waitlist
            </Button>
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white">
              No spam. Just a heads-up when it&rsquo;s ready.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function MembersPage() {
  return (
    <>
      <main>
        <MembersHero />
        <WorkoutLibrary />
        <WeeklyPlans />
        <NutritionRecovery />
        <Mindset />
        <CheckIns />
        <WaitlistBanner />
      </main>
      <Footer />
    </>
  );
}
