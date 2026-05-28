const videos = [
  {
    title: "Fight Camp Day 1 — Foundation",
    duration: "32 min",
    difficulty: "Beginner",
    category: "Conditioning",
    desc: "Full-body foundation session to build your base. Shadowboxing, core, and footwork.",
  },
  {
    title: "Upper Body Strength Block",
    duration: "28 min",
    difficulty: "Intermediate",
    category: "Strength",
    desc: "Shoulders, back, and arms with boxing-specific resistance training.",
  },
  {
    title: "Footwork & Agility",
    duration: "20 min",
    difficulty: "All Levels",
    category: "Skill",
    desc: "Speed ladder, lateral movement, and defensive positioning drills.",
  },
  {
    title: "Core Power Series — Week 2",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Core",
    desc: "Rotational power, anti-rotation stability, and fighter-specific core work.",
  },
  {
    title: "Active Recovery & Mobility",
    duration: "18 min",
    difficulty: "All Levels",
    category: "Recovery",
    desc: "Hip flexors, thoracic spine, shoulder mobility — essential for fight camp longevity.",
  },
  {
    title: "Mindset Reset — 10 Minutes",
    duration: "10 min",
    difficulty: "All Levels",
    category: "Mindset",
    desc: "Breathwork, intention-setting, and visualization before a hard training block.",
  },
];

const difficultyColor: Record<string, string> = {
  Beginner: "bg-clay/15 text-clay",
  Intermediate: "bg-earth/15 text-earth",
  "All Levels": "bg-taupe/20 text-stone",
};

export default function WorkoutLibrary() {
  return (
    <section className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-clay text-xs font-medium tracking-widest uppercase mb-3">
              Members Only
            </p>
            <h2 className="font-serif text-bark text-4xl font-bold leading-tight">
              Workout Library
            </h2>
          </div>
          <p className="text-stone text-sm max-w-xs">
            New videos added weekly. Filter by category, difficulty, or duration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.title} className="group bg-sand flex flex-col overflow-hidden">
              {/* Video placeholder */}
              <div className="relative bg-earth/20 aspect-video flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-2 border-clay/40 flex items-center justify-center">
                  <span className="text-clay text-xl ml-1">▶</span>
                </div>
                <span className="absolute top-3 right-3 text-xs font-medium text-stone bg-cream/80 px-2 py-1">
                  {v.duration}
                </span>
              </div>

              {/* Meta */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium tracking-wide px-2 py-0.5 ${
                      difficultyColor[v.difficulty] ?? "bg-taupe/20 text-stone"
                    }`}
                  >
                    {v.difficulty}
                  </span>
                  <span className="text-xs text-taupe uppercase tracking-wider">
                    {v.category}
                  </span>
                </div>
                <h3 className="font-serif text-bark font-semibold text-base mb-2 leading-snug">
                  {v.title}
                </h3>
                <p className="text-stone text-sm leading-relaxed flex-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Locked overlay hint */}
        <div className="mt-8 bg-bark/5 border border-taupe/30 p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span className="text-clay text-2xl">🔒</span>
          <div>
            <p className="text-bark font-semibold text-sm">Full library unlocks with membership.</p>
            <p className="text-stone text-sm">30+ videos and growing — fight camp sessions, skill work, recovery, and performance mindset.</p>
          </div>
          <a
            href="mailto:melayapalo@gmail.com?subject=Members Waitlist — Add Me"
            className="sm:ml-auto shrink-0 inline-block bg-clay text-cream text-xs font-medium tracking-widest uppercase px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
