import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Stethoscope",
    title: "Advanced Diagnostics",
    text: "Full audiological testing in certified soundproof suites — results explained same day.",
  },
  {
    icon: "Ear",
    title: "Custom Hearing Aids",
    text: "Fitted, tuned, and programmed to your exact hearing profile — invisible options available.",
  },
  {
    icon: "ShieldCheck",
    title: "Lifetime Aftercare",
    text: "Every patient receives ongoing support, free fine-tuning, and annual check-ups.",
  },
  {
    icon: "Users",
    title: "Specialist Team",
    text: "Board-certified audiologists with 20+ years of combined clinical experience.",
  },
];

const stats = [
  { value: "20+", label: "Years" },
  { value: "8,500+", label: "Patients" },
  { value: "98%", label: "Satisfaction" },
];

export default function AboutSection() {
  return (
    <section id="about" className="font-dm bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
        </div>

        {/* ── Main layout: photo left, content right ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

          {/* Photo */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/e44f4ad6-13b0-4cb4-82db-8603fd185952.jpg"
              alt="Our clinic"
              className="w-full h-[480px] object-cover"
            />
            {/* Stats floating card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl flex items-center justify-between">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center flex-1 ${i !== stats.length - 1 ? "border-r border-[#E2E8F0]" : ""}`}>
                  <p className="font-cormorant text-3xl font-bold text-[#1E3A8A]">{s.value}</p>
                  <p className="text-[#718096] text-xs mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
            {/* Rating badge */}
            <div className="absolute top-6 left-6 bg-[#1E3A8A] text-white rounded-2xl px-4 py-3 shadow-lg">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={11} className="text-[#C4975A] fill-[#C4975A]" />
                ))}
              </div>
              <p className="font-semibold text-sm">4.9 / 5.0</p>
              <p className="text-white/60 text-xs">500+ reviews</p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2 className="font-cormorant text-5xl lg:text-[3.4rem] font-semibold text-[#1E3A8A] leading-[1.08] mb-6">
              Restoring hearing —<br />
              <em className="italic text-[#C4975A]">and lives</em> — since 2004.
            </h2>
            <p className="text-[#718096] leading-relaxed text-base lg:text-lg mb-10 max-w-md">
              Founded in Edinburgh, our clinic was built on one belief: every person deserves to hear the world fully. Two decades on, that mission still drives everything we do.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-7 py-3.5 bg-[#1E3A8A] text-white rounded-xl font-semibold text-sm hover:bg-[#162d6e] transition-colors duration-200 flex items-center gap-2 group">
                Book Free Consultation
                <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-7 py-3.5 border border-[#1E3A8A] text-[#1E3A8A] rounded-xl font-medium text-sm hover:bg-[#EBF0FB] transition-colors duration-200">
                Meet Our Team
              </button>
            </div>
          </div>
        </div>

        {/* ── Features grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-[#F8FAFF] border border-[#E2EAF8] rounded-2xl p-7 hover:bg-[#1E3A8A] hover:border-[#1E3A8A] transition-all duration-300 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EBF0FB] group-hover:bg-white/15 flex items-center justify-center mb-6 transition-colors duration-300">
                <Icon
                  name={f.icon}
                  size={20}
                  className="text-[#1E3A8A] group-hover:text-white transition-colors duration-300"
                  fallback="Check"
                />
              </div>
              <h3 className="font-semibold text-[#1E3A8A] group-hover:text-white text-sm mb-2 transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-[#718096] group-hover:text-white/70 text-xs leading-relaxed transition-colors duration-300">
                {f.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
