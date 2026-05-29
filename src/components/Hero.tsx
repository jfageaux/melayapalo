"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imgWrapRef.current;
    if (!el) return;
    let raf: number;

    const tick = () => {
      el.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-svh">
      {/* Photo — top on mobile, right column on desktop */}
      <div className="relative order-1 lg:order-2 h-[55vh] lg:h-auto overflow-hidden">
        {/* Extra height so edges stay hidden as the image translates down */}
        <div
          ref={imgWrapRef}
          style={{
            position: "absolute",
            top: -200,
            left: 0,
            right: 0,
            bottom: -200,
            willChange: "transform",
          }}
        >
          <Image
            src="/hero-boxing.jpg"
            alt="Melaya Palo training"
            fill
            priority
            className="object-cover object-[65%_15%]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Text — bottom on mobile, left column on desktop */}
      <div className="order-2 lg:order-1 bg-void relative overflow-hidden flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        {/* Oversized decorative text */}
        <span
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 font-display text-ash/[0.04] text-[7rem] font-bold tracking-[0.6em] uppercase select-none pointer-events-none whitespace-nowrap translate-x-[40%]"
        >
          RESILIENCE
        </span>

        <div className="max-w-md lg:ml-auto lg:pr-6 relative">
          {/* Copper rule */}
          <div
            className="w-10 h-px bg-copper mb-8 animate-fade"
            style={{ animationDelay: "0.05s" }}
          />

          <p
            className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5 animate-rise"
            style={{ animationDelay: "0.15s" }}
          >
            Personal Training · Nutrition · Mindset
          </p>

          <h1
            className="font-display text-ash text-6xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.0] mb-7 animate-rise"
            style={{ animationDelay: "0.25s" }}
          >
            Perform<br />
            with<br />
            <em className="italic text-copper">Resilience.</em>
          </h1>

          <p
            className="font-body text-ash/50 text-base sm:text-lg leading-relaxed mb-10 animate-rise"
            style={{ animationDelay: "0.4s" }}
          >
            Fight camp programming, nutrition strategy, and mindset coaching —
            built for athletes who want structure and real results.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 animate-rise"
            style={{ animationDelay: "0.52s" }}
          >
            <a
              href="mailto:melayapalo@gmail.com?subject=Work%20with%20Melaya%20%E2%80%94%20Let%27s%20Get%20Started"
              className="inline-block bg-copper text-ash font-body text-xs tracking-[0.15em] uppercase px-8 py-4 text-center hover:bg-rust transition-colors"
            >
              Work with Melaya
            </a>
            <a
              href="mailto:melayapalo@gmail.com?subject=Book a Consult"
              className="inline-block border border-ash/30 text-ash font-body text-xs tracking-[0.15em] uppercase px-8 py-4 text-center hover:border-ash/60 transition-colors"
            >
              Book a Consult
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
