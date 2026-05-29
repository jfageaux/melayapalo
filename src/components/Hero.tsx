"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = parallaxRef.current;
    if (!el) return;

    const update = () => {
      el.style.transform = `translateY(${-250 + window.scrollY * 0.2}px)`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section className="relative min-h-svh flex items-end pb-16 pt-24 overflow-hidden">
      {/* Background photo — scaled up so it has room to drift without showing edges */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 scale-[1.5] will-change-transform"
      >
        <Image
          src="/hero-boxing.jpg"
          alt="Melaya Palo training"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Warm overlay — graduated from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-bark/85 via-bark/40 to-bark/10" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
        <div className="max-w-xl">
          <p className="text-clay text-sm font-medium tracking-widest uppercase mb-4">
            Personal Training · Nutrition · Mindset
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Perform with<br />
            <em className="not-italic text-clay">Resilience.</em>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl font-light leading-relaxed mb-10 max-w-md">
            Fight camp programming, nutrition strategy, and mindset coaching —
            built for athletes who want structure and real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:melayapalo@gmail.com?subject=Work%20with%20Melaya%20%E2%80%94%20Let%27s%20Get%20Started"
              className="inline-block bg-clay text-cream text-sm font-medium tracking-widest uppercase px-8 py-4 text-center transition-opacity hover:opacity-85"
            >
              Work with Melaya
            </a>
            <a
              href="mailto:melayapalo@gmail.com?subject=Book a Consult"
              className="inline-block border border-cream/50 text-cream text-sm font-medium tracking-widest uppercase px-8 py-4 text-center transition-colors hover:bg-cream/10"
            >
              Book a Consult
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-cream text-xs tracking-widest uppercase rotate-90 origin-center">Scroll</span>
      </div>
    </section>
  );
}
