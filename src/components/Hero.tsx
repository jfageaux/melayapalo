import Image from "next/image";
import Cta from "./Cta";
import { mailto } from "@/lib/email";

export default function Hero() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-svh pt-16">
      <div className="relative order-1 lg:order-2 h-[55vh] md:h-[65vh] lg:h-auto animate-fade">
        <Image
          src="/hero-boxing.jpg"
          alt="Melaya Palo training"
          fill
          priority
          className="object-cover object-[65%_30%] lg:object-[65%_15%] [filter:sepia(0.22)_saturate(0.82)_contrast(1.06)_brightness(0.96)]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div aria-hidden className="absolute inset-0 bg-copper/15 mix-blend-overlay pointer-events-none" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/30 lg:bg-gradient-to-r lg:from-void/60 lg:via-void/10 lg:to-transparent mix-blend-multiply pointer-events-none" />
      </div>

      <div className="order-2 lg:order-1 bg-void relative flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-24">
        <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <span
            className="absolute bottom-0 left-0 translate-y-[22%] font-display text-ash/[0.04] font-bold uppercase leading-none whitespace-nowrap"
            style={{ fontSize: "clamp(4rem, 10.5vw, 11rem)" }}
          >
            RESILIENCE
          </span>
        </div>

        <div className="max-w-md w-full mx-auto relative">
          <div className="w-10 h-px bg-copper mb-8 animate-fade" style={{ animationDelay: "0.05s" }} />

          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5 text-balance animate-rise" style={{ animationDelay: "0.15s" }}>
            Personal Training · Nutrition · Mindset
          </p>

          <h1
            className="display-heading font-display text-ash text-6xl sm:text-7xl lg:text-[5.5rem] font-bold mb-7 animate-rise"
            style={{ animationDelay: "0.25s" }}
          >
            Perform<br />
            with<br />
            <em className="italic text-copper">Resilience.</em>
          </h1>

          <p
            className="font-body text-ash/50 text-lg sm:text-xl leading-relaxed mb-10 animate-rise"
            style={{ animationDelay: "0.4s" }}
          >
            Fight camp programming, nutrition strategy, and mindset coaching —
            built for athletes who want structure and real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-rise" style={{ animationDelay: "0.52s" }}>
            <Cta href={mailto("Work with Melaya — Let's Get Started")}>Work with Melaya</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
