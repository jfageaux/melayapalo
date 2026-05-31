import SectionPreamble from "./SectionPreamble";
import Cta from "./Cta";
import { videos } from "@/lib/content";
import { mailto } from "@/lib/email";

const difficultyColor: Record<string, string> = {
  Beginner: "bg-copper/15 text-copper",
  Intermediate: "bg-rust/15 text-rust",
  "All Levels": "bg-dust/20 text-dust",
};

export default function WorkoutLibrary() {
  return (
    <section className="bg-ash py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionPreamble eyebrow="Members Only" />
            <h2 className="font-display text-void text-5xl font-bold leading-[1.15] pb-1">
              Workout Library
            </h2>
          </div>
          <p className="font-body text-dust text-sm max-w-xs">
            New videos added weekly. Filter by category, difficulty, or duration.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.title} className="group bg-fog/50 flex flex-col overflow-hidden">
              <div className="relative bg-void/8 aspect-video flex items-center justify-center">
                <div className="w-14 h-14 border border-copper/40 flex items-center justify-center group-hover:border-copper group-hover:bg-copper/10 transition-colors">
                  <span className="text-copper text-lg ml-1">▶</span>
                </div>
                <span className="absolute top-3 right-3 font-body text-xs text-dust bg-ash/80 px-2 py-1">
                  {v.duration}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`font-body text-xs tracking-wide px-2 py-0.5 ${difficultyColor[v.difficulty] ?? "bg-dust/20 text-dust"}`}>
                    {v.difficulty}
                  </span>
                  <span className="font-body text-xs text-dust uppercase tracking-wider">{v.category}</span>
                </div>
                <h3 className="font-display text-void font-semibold text-xl mb-2 leading-snug">{v.title}</h3>
                <p className="font-body text-dust text-sm leading-relaxed flex-1">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-void/10 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-6 h-px bg-copper shrink-0 mt-1" />
          <div>
            <p className="font-display text-void font-semibold text-xl mb-1">
              Full library unlocks with membership.
            </p>
            <p className="font-body text-dust text-sm">
              30+ videos and growing — fight camp sessions, skill work, recovery, and performance mindset.
            </p>
          </div>
          <Cta href={mailto("Members Waitlist — Add Me")} className="sm:ml-auto shrink-0 px-6 py-3">
            Join Waitlist
          </Cta>
        </div>
      </div>
    </section>
  );
}
