import Icon from "@/components/ui/icon";

const milestones = [
  { year: "2004", text: "Founded by Dr. Sarah Linden in Edinburgh with a single consulting room." },
  { year: "2010", text: "Expanded to three locations across Scotland, serving 2,000+ patients annually." },
  { year: "2017", text: "Launched our Tinnitus Retraining Programme — now one of the UK's most recognised." },
  { year: "2024", text: "20 years on — 8,500+ patients helped and still driven by the same mission." },
];

const stats = [
  { value: "20+", label: "Years" },
  { value: "8,500+", label: "Patients" },
  { value: "98%", label: "Satisfaction" },
  { value: "3", label: "Locations" },
];

export default function AboutStoryScroll() {
  return (
    <section id="about" className="font-dm bg-white overflow-hidden">

      {/* ── Top: Oversized mission statement ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
        </div>

        <h2 className="font-cormorant text-[clamp(2.8rem,6vw,5.5rem)] font-semibold text-[#1E3A8A] leading-[1.05] mb-12 max-w-5xl">
          Every sound you've been missing — <em className="italic text-[#C4975A]">we're here to bring it back.</em>
        </h2>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E2E8F0] border border-[#E2E8F0] rounded-2xl overflow-hidden mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-8 py-6 text-center">
              <p className="font-cormorant text-5xl font-bold text-[#1E3A8A] leading-none">{s.value}</p>
              <p className="text-[#718096] text-xs mt-2 uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Full-bleed team photo ── */}
      <div className="relative w-full h-[55vw] max-h-[580px] min-h-[280px] overflow-hidden">
        <img
          src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/e682099f-ef7a-472d-91bc-5aa7b49f2ec3.jpg"
          alt="Our team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#1E3A8A]/60" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-14">
          <p className="font-cormorant text-white text-2xl lg:text-4xl italic max-w-2xl leading-snug">
            "A team united by one goal: restoring your connection to the world of sound."
          </p>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">Our Story</span>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[5.5rem] top-0 bottom-0 w-px bg-[#E2E8F0] hidden lg:block" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-12 group">
                {/* Year */}
                <div className="flex items-center gap-6 lg:w-36 flex-shrink-0">
                  <span className="font-cormorant text-3xl font-bold text-[#1E3A8A] leading-none">{m.year}</span>
                  {/* Dot on line */}
                  <div className="hidden lg:flex w-4 h-4 rounded-full border-2 border-[#1E3A8A] bg-white items-center justify-center ml-auto relative z-10">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                  </div>
                </div>
                {/* Text */}
                <div className="lg:pt-1 lg:pb-8 flex-1 border-b border-[#F1F5F9] lg:border-0 pb-8">
                  <p className="text-[#4A5568] leading-relaxed text-base lg:text-lg">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap gap-4">
          <button className="px-8 py-4 bg-[#1E3A8A] text-white rounded-xl font-semibold text-sm hover:bg-[#162d6e] transition-colors duration-200 flex items-center gap-2 group">
            Book a Free Consultation
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button className="px-8 py-4 border border-[#1E3A8A] text-[#1E3A8A] rounded-xl font-medium text-sm hover:bg-[#EBF0FB] transition-colors duration-200">
            Meet Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
