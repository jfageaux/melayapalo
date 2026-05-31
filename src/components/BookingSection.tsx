"use client";

import { useEffect } from "react";

export default function BookingSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="booking" className="bg-ash py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="w-10 h-px bg-copper mx-auto mb-8" />
          <p className="font-body text-copper text-xs tracking-[0.2em] uppercase mb-5">Free Consultation</p>
          <h2 className="font-display text-void text-5xl sm:text-6xl font-bold leading-tight mb-6">
            Book Your Free<br />Consultation
          </h2>
          <p className="font-body text-dust text-lg leading-relaxed max-w-xl mx-auto">
            Choose a time that works for you. No pressure — just a quick call to talk goals, training, and nutrition.
          </p>
        </div>

        {/* Replace this with Melaya's Calendly URL later. */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/johnnyfageaux/new-meeting"
          style={{ minWidth: "320px", height: "700px" }}
        />
      </div>
    </section>
  );
}
