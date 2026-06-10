import Icon from "@/components/ui/icon";
import { useState } from "react";

const features = [
  { icon: "Stethoscope", title: "Advanced Diagnostics", text: "Full audiological testing in certified soundproof suites — results explained same day." },
  { icon: "Ear", title: "Custom Hearing Aids", text: "Fitted, tuned, and programmed to your exact hearing profile — invisible options available." },
  { icon: "ShieldCheck", title: "Lifetime Aftercare", text: "Every patient receives ongoing support, free fine-tuning, and annual check-ups." },
  { icon: "Users", title: "Specialist Team", text: "Board-certified audiologists with 20+ years of combined clinical experience." },
];

const stats = [
  { value: "20+", label: "Years" },
  { value: "8,500+", label: "Patients" },
  { value: "98%", label: "Satisfaction" },
];

// ── A) TRUST & PROFESSIONAL ──
// Checklist rows on a blue-tinted band
function FeaturesTrust() {
  return (
    <div className="bg-[#F0F4FF] rounded-2xl px-8 py-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-5">
      {features.map((f) => (
        <div key={f.title} className="flex items-start gap-4">
          <div className="mt-0.5 w-6 h-6 rounded-full bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
            <Icon name="Check" size={13} className="text-white" />
          </div>
          <div>
            <p className="font-semibold text-[#1E3A8A] text-sm">{f.title}</p>
            <p className="text-[#64748B] text-xs mt-0.5 leading-relaxed">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── B) WARM & WELCOMING ──
// Soft coloured cards with white icon backgrounds
function FeaturesWarm() {
  const palette = [
    { bg: "bg-[#FFF7ED]", border: "border-[#FDE8C8]", icon: "text-[#C4975A]" },
    { bg: "bg-[#EFF6FF]", border: "border-[#BFDBFE]", icon: "text-[#3B82F6]" },
    { bg: "bg-[#F0FDF4]", border: "border-[#BBF7D0]", icon: "text-[#22C55E]" },
    { bg: "bg-[#FDF4FF]", border: "border-[#E9D5FF]", icon: "text-[#A855F7]" },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((f, i) => {
        const p = palette[i];
        return (
          <div key={f.title} className={`${p.bg} border ${p.border} rounded-2xl p-6 flex flex-col gap-4`}>
            <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
              <Icon name={f.icon} size={22} className={p.icon} fallback="Check" />
            </div>
            <div>
              <p className="font-semibold text-[#1E293B] text-sm mb-1">{f.title}</p>
              <p className="text-[#64748B] text-xs leading-relaxed">{f.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── C) BOLD & MODERN ──
// Dark band with gold numbers
function FeaturesBold() {
  return (
    <div className="bg-[#0F1C36] rounded-2xl overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
        {features.map((f, i) => (
          <div key={f.title} className="group px-7 py-8 hover:bg-white/5 transition-colors duration-200">
            <p className="font-cormorant text-5xl font-bold text-[#C4975A] leading-none mb-5 select-none">
              {String(i + 1).padStart(2, "0")}
            </p>
            <Icon name={f.icon} size={20} className="text-white/40 group-hover:text-[#C4975A] mb-4 transition-colors duration-200" fallback="Check" />
            <p className="font-semibold text-white text-sm mb-2">{f.title}</p>
            <p className="text-white/50 text-xs leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const variants = [
  { id: "trust", label: "Trust & Professional" },
  { id: "warm",  label: "Warm & Welcoming" },
  { id: "bold",  label: "Bold & Modern" },
];

export default function AboutSection() {
  const [variant, setVariant] = useState("trust");

  return (
    <section id="about" className="font-dm bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
        </div>

        {/* Photo + Text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/e44f4ad6-13b0-4cb4-82db-8603fd185952.jpg"
              alt="Our clinic"
              className="w-full h-[480px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl flex items-center justify-between">
              {stats.map((s, i) => (
                <div key={s.label} className={`text-center flex-1 ${i !== stats.length - 1 ? "border-r border-[#E2E8F0]" : ""}`}>
                  <p className="font-cormorant text-3xl font-bold text-[#1E3A8A]">{s.value}</p>
                  <p className="text-[#718096] text-xs mt-1 uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
            </div>
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

        {/* Style picker */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-[#A0AEC0] text-xs mr-1">Pick a style:</span>
          {variants.map((v) => (
            <button
              key={v.id}
              onClick={() => setVariant(v.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                variant === v.id
                  ? "bg-[#1E3A8A] text-white border-[#1E3A8A]"
                  : "text-[#4A5568] border-[#E2E8F0] hover:border-[#1E3A8A]"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>

        {variant === "trust" && <FeaturesTrust />}
        {variant === "warm"  && <FeaturesWarm />}
        {variant === "bold"  && <FeaturesBold />}

      </div>
    </section>
  );
}
