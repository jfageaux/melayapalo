import Image from "next/image";
import Cta from "./Cta";
import { mailto } from "@/lib/email";

export default function Hero() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-svh">
      <div className="relative order-1 lg:order-2 h-[55vh] lg:h-auto">
        <Image
          src="/hero-boxing.jpg"
          alt="Melaya Palo training"
          fill
          priority
          className="object-cover object-[65%_15%]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="order-2 lg:order-1 bg-void relative overflow-hidden flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-16 lg:py-24">
        <span
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 -rotate-90 font-display text-ash/[0.04] text-[7rem] font-bold tracking-[0.6em] uppercase select-none pointer-events-none whitespace-nowrap translate-x-[40%]"
        >
          RESILIENCE
        </span>

        <div className="max-w-md lg:ml-auto lg:pr-6 relative">
          <div className="w-10 h-px bg-copper mb-8 animate-fade" style={{ animationDelay: "0.05s" }} />

          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5 animate-rise" style={{ animationDelay: "0.15s" }}>
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

          <div className="flex flex-col sm:flex-row gap-4 animate-rise" style={{ animationDelay: "0.52s" }}>
            <Cta href={mailto("Work with Melaya — Let's Get Started")}>Work with Melaya</Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
