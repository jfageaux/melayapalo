import React from "react";

interface CtaProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "ghost" | "dark";
}

export default function Cta({ variant = "primary", className = "", ...props }: CtaProps) {
  const variantClass = {
    primary: "bg-copper text-ash hover:bg-rust",
    ghost: "border border-ash/30 text-ash hover:border-ash/60",
    dark: "bg-void text-ash hover:bg-smoke",
  }[variant];

  return (
    <a
      className={`inline-block font-body text-xs tracking-[0.15em] uppercase text-center transition-colors px-8 py-4 ${variantClass} ${className}`}
      {...props}
    />
  );
}
