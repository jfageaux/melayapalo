export const EMAIL = "melayapalo@gmail.com";

export function mailto(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, "%20")}`;
}

export const SUBJECTS = {
  consult: "Book a Consult",
  heroStart: "Work with Melaya — Let's Get Started",
  packageReady: "4-Week Package — I'm Ready",
  footerTalk: "Work with Melaya — Let's Talk",
  waitlist: "Members Waitlist — Add Me",
} as const;

export const WAITLIST_BODY =
  "Hey Melaya, I'd love to be on the waitlist for the members area. Let me know when it launches!";

export const CREDENTIALS = [
  { label: "16 boxing bouts", detail: "real ring experience" },
  { label: "StrongFirst SFG II", detail: "kettlebell certified" },
  { label: "USAW-L1", detail: "strength background" },
  { label: "Fight-camp conditioning", detail: "without cringe gym-bro energy" },
  { label: "Long Beach based", detail: "virtual coaching available" },
];

export const PACKAGE_INCLUDES = [
  "4-week personalized training program",
  "An initial 50 minute meet & greet / assessment",
  "Weekly 30-minute video check-in & goal session",
];

export const VIDEOS = [
  {
    title: "Fight Camp Day 1 — Foundation",
    duration: "32 min",
    difficulty: "Beginner",
    category: "Conditioning",
    description:
      "Full-body foundation session to build your base. Shadowboxing, core, and footwork.",
  },
  {
    title: "Upper Body Strength Block",
    duration: "28 min",
    difficulty: "Intermediate",
    category: "Strength",
    description:
      "Shoulders, back, and arms with boxing-specific resistance training.",
  },
  {
    title: "Footwork & Agility",
    duration: "20 min",
    difficulty: "All Levels",
    category: "Skill",
    description:
      "Speed ladder, lateral movement, and defensive positioning drills.",
  },
  {
    title: "Core Power Series — Week 2",
    duration: "25 min",
    difficulty: "Intermediate",
    category: "Core",
    description:
      "Rotational power, anti-rotation stability, and fighter-specific core work.",
  },
  {
    title: "Active Recovery & Mobility",
    duration: "18 min",
    difficulty: "All Levels",
    category: "Recovery",
    description:
      "Hip flexors, thoracic spine, shoulder mobility — essential for fight camp longevity.",
  },
  {
    title: "Mindset Reset — 10 Minutes",
    duration: "10 min",
    difficulty: "All Levels",
    category: "Mindset",
    description:
      "Breathwork, intention-setting, and visualization before a hard training block.",
  },
];

export const PHASES = [
  {
    weeks: "Week 1–2",
    phase: "Foundation",
    focus: "Movement patterns, aerobic base, core stability",
    volume: "4 sessions/week",
    sessions: 4,
  },
  {
    weeks: "Week 3–4",
    phase: "Build",
    focus: "Strength loading, conditioning volume, skill drills",
    volume: "5 sessions/week",
    sessions: 5,
  },
  {
    weeks: "Week 5–6",
    phase: "Peak",
    focus: "High-intensity intervals, fight camp simulation",
    volume: "5 sessions/week",
    sessions: 5,
  },
  {
    weeks: "Week 7",
    phase: "Taper & Recover",
    focus: "Active recovery, mobility, mindset reset",
    volume: "3 sessions/week",
    sessions: 3,
  },
];

export const NUTRITION_ITEMS = [
  "Weekly meal focus guides",
  "Pre- and post-training fueling",
  "Macro targets by training phase",
  "Grocery list templates",
  "Eating on the go strategies",
];

export const RECOVERY_ITEMS = [
  "Post-session cooldown flows",
  "Sleep & nervous system protocols",
  "Foam rolling & soft tissue routines",
  "Deload week structure",
  "HRV & body awareness basics",
];

export const LESSONS = [
  {
    number: "01",
    title: "Show Up Before You Feel Ready",
    description:
      "The discipline to begin is the hardest part. We talk about building the habit before the motivation arrives.",
  },
  {
    number: "02",
    title: "Resilience Is a Practice",
    description:
      "Resilience isn't a personality trait — it's something you train. Learn the daily rituals that build it.",
  },
  {
    number: "03",
    title: "Identity Over Outcome",
    description:
      "You are not chasing a number on a scale. You are building who you are. Everything else follows.",
  },
  {
    number: "04",
    title: "The Reset Protocol",
    description:
      "What to do after a bad week, a missed workout, or a hard day. How to come back without shame.",
  },
];

export const CHECKINS = [
  {
    title: "Weekly Progress Form",
    description:
      "Submit how your week went — training, nutrition, energy, mood. Melaya reads every one.",
    icon: "clipboard",
  },
  {
    title: "Video Check-In (Select Plans)",
    description:
      "Bi-weekly video calls for Fight Camp and Full Resilience members to review and adjust programming.",
    icon: "video",
  },
  {
    title: "Form Review",
    description:
      "Submit a short training video for technique feedback and coaching notes.",
    icon: "target",
  },
  {
    title: "Monthly Recap",
    description:
      "End-of-month summary with your progress, a reflection prompt, and updated goals for the next block.",
    icon: "calendar",
  },
] as const;
