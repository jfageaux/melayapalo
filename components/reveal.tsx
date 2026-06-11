"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span";
};

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const elRef = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        elRef.current = node;
      }}
      style={style}
      className={`reveal ${shown ? "is-shown" : ""} ${className ?? ""}`}
    >
      {children}
    </Tag>
  );
}
