import React from "react";

interface CtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost" | "dark";
}

export default function Cta({ variant = "primary", className = "", ...props }: CtaProps) {
  const variantClass = {
    primary: "bg-copper text-void hover:bg-rust hover:text-ash",
    ghost: "border border-ash/50 text-ash hover:bg-ash hover:text-void hover:border-ash",
    dark: "bg-void text-ash border border-ash/25 hover:bg-ash hover:text-void hover:border-ash",
  }[variant];

  return (
    <a
      className={`inline-block font-body text-xs tracking-[0.15em] uppercase text-center transition-all px-8 py-4 hover:-translate-y-0.5 active:translate-y-0 ${variantClass} ${className}`}
      {...props}
    />
  );
}
