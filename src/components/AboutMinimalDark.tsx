import Icon from "@/components/ui/icon";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "8,500+", label: "Patients Helped" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "3", label: "UK Locations" },
];

const pillars = [
  { icon: "Ear", text: "Precision Diagnostics" },
  { icon: "Stethoscope", text: "Bespoke Treatment" },
  { icon: "ShieldCheck", text: "Lifetime Aftercare" },
  { icon: "Users", text: "Specialist Team" },
];

export default function AboutMinimalDark() {
  return (
    <section id="about" className="font-dm bg-[#141920] overflow-hidden">

      {/* ── Top: centered headline ── */}
      <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-28 pb-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
          <div className="h-px w-8 bg-[#C4975A]" />
        </div>

        <h2 className="font-cormorant text-[clamp(3rem,7vw,6.5rem)] font-semibold text-white leading-[1.05] mb-10">
          Twenty years of<br />
          <em className="italic text-[#C4975A]">restoring</em> hearing.
        </h2>

        <p className="text-white/50 text-base lg:text-xl leading-relaxed max-w-2xl mx-auto mb-14">
          We believe every person deserves to hear the world fully. From our Edinburgh clinic founded in 2004 to three locations across Scotland today, that mission has never changed.
        </p>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#C4975A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C4975A]" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#C4975A]" />
        </div>

        {/* Pillars */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {pillars.map((p) => (
            <div key={p.text} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-white/70 text-sm hover:border-[#C4975A] hover:text-white transition-colors duration-200">
              <Icon name={p.icon} size={14} className="text-[#C4975A]" fallback="Check" />
              {p.text}
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-4 bg-[#C4975A] text-white rounded-xl font-semibold text-sm hover:bg-[#b38449] transition-colors duration-200 flex items-center gap-2 group">
            Book a Free Consultation
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="px-8 py-4 border border-white/20 text-white/80 rounded-xl font-medium text-sm hover:bg-white/5 hover:border-white/40 transition-colors duration-200">
            Meet Our Team
          </button>
        </div>
      </div>

      {/* ── Cinematic full-width photo ── */}
      <div className="relative w-full h-[60vw] max-h-[620px] min-h-[300px] overflow-hidden">
        <img
          src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/d2d8a4ed-b50f-450e-b72b-623ec5452193.jpg"
          alt="Our clinic"
          className="w-full h-full object-cover"
        />
        {/* Fade edges into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141920]/60 via-transparent to-[#141920]/80" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#141920] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#141920] to-transparent" />

        {/* Centered quote overlay */}
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <blockquote className="text-center max-w-xl">
            <p className="font-cormorant text-white text-3xl lg:text-5xl italic leading-snug mb-4">
              "We don't just fit hearing aids — we restore your world."
            </p>
            <cite className="text-[#C4975A] text-sm not-italic tracking-widest uppercase">
              Dr. Sarah Linden · Founder & Lead Audiologist
            </cite>
          </blockquote>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
            {stats.map((s) => (
              <div key={s.label} className="px-8 py-10 text-center group hover:bg-white/5 transition-colors duration-200">
                <p className="font-cormorant text-5xl font-bold text-white leading-none group-hover:text-[#C4975A] transition-colors duration-300">
                  {s.value}
                </p>
                <p className="text-white/40 text-xs mt-3 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
