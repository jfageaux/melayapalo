import type { ReactNode } from "react";

const BUTTON_BASE =
  "group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";

const BUTTON_VARIANTS = {
  /* white pill — for dark sections */
  light: "bg-paper text-ink hover:bg-signal-deep hover:text-white",
  /* red pill */
  signal: "bg-signal-deep text-white hover:bg-signal-press",
  /* outlined — for dark sections */
  ghostLight:
    "ring-1 ring-inset ring-white/25 text-paper hover:bg-white/10 hover:ring-white/40",
  /* white pill that darkens — for the red banner */
  onSignal: "bg-white text-ink hover:bg-ink hover:text-white",
} as const;

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof BUTTON_VARIANTS;
  className?: string;
};

export function Button({ href, children, variant = "light", className }: ButtonProps) {
  return (
    <a href={href} className={`${BUTTON_BASE} ${BUTTON_VARIANTS[variant]} ${className ?? ""}`}>
      <span>{children}</span>
      <svg
        aria-hidden
        viewBox="0 0 16 16"
        className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.5 8h13M9.5 3l5 5-5 5" />
      </svg>
    </a>
  );
}

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: "dark" | "light" | "onSignal";
};

export function Eyebrow({ children, className, tone = "dark" }: EyebrowProps) {
  const toneClass =
    tone === "light"
      ? "text-white/60"
      : tone === "onSignal"
        ? "text-white"
        : "text-ink/70";
  return (
    <p
      className={`flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.32em] ${toneClass} ${className ?? ""}`}
    >
      <span
        className={`h-px w-7 shrink-0 ${tone === "onSignal" ? "bg-white" : "bg-signal"}`}
        aria-hidden
      />
      {children}
    </p>
  );
}

type GhostWordProps = {
  word: string;
  tone?: "light" | "dark" | "onSignal";
  className?: string;
};

export function GhostWord({ word, tone = "light", className }: GhostWordProps) {
  const toneClass =
    tone === "light" ? "ghost-light" : tone === "dark" ? "ghost-dark" : "ghost-on-signal";
  return (
    <span aria-hidden className={`ghost ${toneClass} ${className ?? ""}`}>
      {word}
    </span>
  );
}
