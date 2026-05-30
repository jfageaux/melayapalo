const credentials = [
  { label: "16 boxing bouts", detail: "real ring experience" },
  { label: "StrongFirst SFG II", detail: "kettlebell certified" },
  { label: "USAW-L1", detail: "strength background" },
  {
    label: "Fight-camp conditioning",
    detail: "without cringe gym-bro energy",
  },
  { label: "Long Beach based", detail: "virtual coaching available" },
];

export default function WhyMelaya() {
  return (
    <section className="bg-void px-8 sm:px-12 lg:px-16 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="w-10 h-px bg-copper mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">
            Credentials
          </p>
          <h2 className="font-display text-ash text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Why Train<br />
            with <em className="italic text-copper">Melaya</em>
          </h2>
        </div>

        {/* Credential list */}
        <ul className="divide-y divide-ash/10">
          {credentials.map(({ label, detail }, i) => (
            <li
              key={i}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-6"
            >
              <span className="font-display text-ash text-2xl sm:text-3xl font-bold">
                {label}
              </span>
              <span className="font-body text-dust text-sm tracking-[0.12em] uppercase">
                {detail}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
