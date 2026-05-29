import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:min-h-svh">
      {/* Photo — top on mobile, right column on desktop */}
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

      {/* Text — bottom on mobile, left column on desktop */}
      <div className="order-2 lg:order-1 bg-bark flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 lg:py-24">
        <div className="max-w-md lg:ml-auto lg:pr-4">
          <p className="text-clay text-sm font-medium tracking-widest uppercase mb-4">
            Personal Training · Nutrition · Mindset
          </p>
          <h1 className="font-serif text-cream text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Perform with<br />
            <em className="not-italic text-clay">Resilience.</em>
          </h1>
          <p className="text-cream/80 text-lg sm:text-xl font-light leading-relaxed mb-10">
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
    </section>
  );
}
