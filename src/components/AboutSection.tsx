import Icon from "@/components/ui/icon";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "8,500+", label: "Patients Helped" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  { icon: "Stethoscope", text: "Advanced diagnostics & testing" },
  { icon: "Ear", text: "Custom hearing aid fitting" },
  { icon: "Users", text: "Multidisciplinary specialist team" },
  { icon: "ShieldCheck", text: "Lifetime aftercare & support" },
];

export default function AboutSection() {
  return (
    <section id="about" className="font-dm overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[90vh]">

        {/* ── LEFT PANEL — Blue ── */}
        <div className="relative lg:w-1/2 bg-[#1E3A8A] px-10 py-20 lg:px-16 lg:py-24 flex flex-col justify-between">

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />

          {/* Decorative rings */}
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full border border-white/10 translate-x-1/2 translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-52 h-52 rounded-full border border-white/10 translate-x-1/2 translate-y-1/2 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#C4975A]" />
              <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">
                About Us
              </span>
            </div>

            <h2 className="font-cormorant text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.1] mb-8">
              We've been restoring<br />
              hearing —{" "}
              <em className="italic text-[#A8C0F8]">and lives</em>
              <br />— since 2004.
            </h2>

            <p className="text-white/70 leading-relaxed text-base lg:text-lg mb-12 max-w-md">
              Our clinic was founded on one belief: every person deserves to hear the world fully. Two decades later, that mission still drives everything we do — from first consultation to long-term care.
            </p>

            <ul className="space-y-4 mb-14">
              {values.map((v) => (
                <li key={v.text} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={v.icon} size={17} className="text-[#A8C0F8]" fallback="Check" />
                  </div>
                  <span className="text-white/80 text-sm">{v.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 bg-white text-[#1E3A8A] rounded-lg font-semibold text-sm hover:bg-[#EBF0FB] transition-colors duration-200">
                Book a Free Consultation
              </button>
              <button className="px-7 py-3.5 border border-white/30 text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors duration-200 flex items-center gap-2">
                Meet Our Team <Icon name="ArrowRight" size={15} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 mt-16 grid grid-cols-3 gap-4 border-t border-white/15 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-cormorant text-4xl font-bold text-white leading-none">{s.value}</p>
                <p className="text-white/50 text-xs mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL — Photo ── */}
        <div className="relative lg:w-1/2 min-h-[60vw] lg:min-h-0">
          <img
            src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/8a76a656-8930-4daa-95de-2e5ceac031ca.jpg"
            alt="Our clinic"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Edge blend */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#1E3A8A]/30 to-transparent pointer-events-none" />

          {/* Floating quote */}
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 lg:right-10 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-[#EBF0FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="Quote" size={18} className="text-[#1E3A8A]" />
              </div>
              <div>
                <p className="font-cormorant text-[#1E3A8A] text-xl italic leading-snug mb-3">
                  "We don't just fit hearing aids — we restore the sounds that matter most to you."
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#E2E8F0]" />
                  <p className="font-dm text-xs text-[#718096]">Dr. Sarah Linden, Lead Audiologist</p>
                </div>
              </div>
            </div>
          </div>

          {/* Star badge */}
          <div className="absolute top-8 right-8 bg-[#1E3A8A] text-white rounded-2xl px-5 py-4 shadow-xl">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="Star" size={12} className="text-[#C4975A] fill-[#C4975A]" />
              ))}
            </div>
            <p className="font-dm font-semibold text-sm">4.9 / 5.0</p>
            <p className="font-dm text-white/60 text-xs">500+ reviews</p>
          </div>
        </div>

      </div>
    </section>
  );
}
