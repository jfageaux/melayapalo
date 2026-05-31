export default function BookingSection() {
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
        <iframe
          src="https://calendly.com/johnnyfageaux/new-meeting?embed_domain=melayapalo.com&embed_type=Inline&hide_gdpr_banner=1"
          width="100%"
          height="700"
          frameBorder="0"
          title="Book a free consultation"
          className="min-w-[320px]"
        />
      </div>
    </section>
  );
}
