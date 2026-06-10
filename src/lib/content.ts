export const credentials = [
  { label: "16 boxing bouts", detail: "real ring experience" },
  { label: "StrongFirst SFG II", detail: "kettlebell certified" },
  { label: "USAW-L1", detail: "strength background" },
  { label: "Fight-camp conditioning", detail: "without cringe gym-bro energy" },
  { label: "Long Beach based", detail: "virtual coaching available" },
];

export const pricingFeatures = [
  "4-week personalized training program",
  "An initial 50 minute meet & greet / assessment",
  "Weekly 30-minute video check-in & goal session",
];

export type Video = {
  title: string;
  duration: string;
  difficulty: string;
  category: string;
  desc: string;
};

export const videos: Video[] = [
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

export type Week = {
  label: string;
  phase: string;
  focus: string;
  sessions: string;
  accentClass: string;
};

export const weeks: Week[] = [
  {
    label: "Week 1–2",
    phase: "Foundation",
    focus: "Movement patterns, aerobic base, core stability",
    sessions: "4 sessions/week",
    accentClass: "bg-copper",
  },
  {
    label: "Week 3–4",
    phase: "Build",
    focus: "Strength loading, conditioning volume, skill drills",
    sessions: "5 sessions/week",
    accentClass: "bg-dust",
  },
  {
    label: "Week 5–6",
    phase: "Peak",
    focus: "High-intensity intervals, fight camp simulation",
    sessions: "5 sessions/week",
    accentClass: "bg-rust",
  },
  {
    label: "Week 7",
    phase: "Taper & Recover",
    focus: "Active recovery, mobility, mindset reset",
    sessions: "3 sessions/week",
    accentClass: "bg-fog",
  },
];

export type NutritionTab = {
  label: string;
  items: string[];
};

export const nutritionTabs: NutritionTab[] = [
  {
    label: "Nutrition",
    items: [
      "Weekly meal focus guides",
      "Pre- and post-training fueling",
      "Macro targets by training phase",
      "Grocery list templates",
      "Eating on the go strategies",
    ],
  },
  {
    label: "Recovery",
    items: [
      "Post-session cooldown flows",
      "Sleep & nervous system protocols",
      "Foam rolling & soft tissue routines",
      "Deload week structure",
      "HRV & body awareness basics",
    ],
  },
];

export type MindsetLesson = {
  number: string;
  title: string;
  desc: string;
};

export const mindsetLessons: MindsetLesson[] = [
  {
    number: "01",
    title: "Show Up Before You Feel Ready",
    desc: "The discipline to begin is the hardest part. We talk about building the habit before the motivation arrives.",
  },
  {
    number: "02",
    title: "Resilience Is a Practice",
    desc: "Resilience isn’t a personality trait — it’s something you train. Learn the daily rituals that build it.",
  },
  {
    number: "03",
    title: "Identity Over Outcome",
    desc: "You are not chasing a number on a scale. You are building who you are. Everything else follows.",
  },
  {
    number: "04",
    title: "The Reset Protocol",
    desc: "What to do after a bad week, a missed workout, or a hard day. How to come back without shame.",
  },
];

export type CheckIn = {
  title: string;
  desc: string;
};

export const checkIns: CheckIn[] = [
  {
    title: "Weekly Progress Form",
    desc: "Submit how your week went — training, nutrition, energy, mood. Melaya reads every one.",
  },
  {
    title: "Video Check-In (Select Plans)",
    desc: "Bi-weekly video calls for Fight Camp and Full Resilience members to review and adjust programming.",
  },
  {
    title: "Form Review",
    desc: "Submit a short training video for technique feedback and coaching notes.",
  },
  {
    title: "Monthly Recap",
    desc: "End-of-month summary with your progress, a reflection prompt, and updated goals for the next block.",
  },
];
