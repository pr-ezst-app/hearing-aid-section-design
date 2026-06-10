import Icon from "@/components/ui/icon";
import { useState } from "react";

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

// ── Variant A: Numbered List ──
function FeaturesNumbered() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, i) => (
        <div key={f.title} className="group cursor-default">
          <p className="font-cormorant text-6xl font-bold text-[#E2EAF8] group-hover:text-[#C4975A] leading-none mb-4 transition-colors duration-300 select-none">
            {String(i + 1).padStart(2, "0")}
          </p>
          <div className="h-px w-10 bg-[#C4975A] mb-4" />
          <p className="font-semibold text-[#1E3A8A] text-sm mb-2">{f.title}</p>
          <p className="text-[#718096] text-xs leading-relaxed">{f.text}</p>
        </div>
      ))}
    </div>
  );
}

// ── Variant B: Icon + Divider Line ──
function FeaturesIconLine() {
  return (
    <div className="divide-y divide-[#E2EAF8]">
      {features.map((f) => (
        <div key={f.title} className="group flex items-center gap-6 py-5 hover:pl-2 transition-all duration-300">
          <div className="w-10 h-10 rounded-full border border-[#E2EAF8] group-hover:border-[#C4975A] group-hover:bg-[#FDF6EE] flex items-center justify-center flex-shrink-0 transition-all duration-300">
            <Icon name={f.icon} size={17} className="text-[#C4975A]" fallback="Check" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[#1E3A8A] text-sm">{f.title}</p>
            <p className="text-[#718096] text-xs mt-0.5 leading-relaxed">{f.text}</p>
          </div>
          <Icon name="ArrowRight" size={14} className="text-[#CBD5E0] group-hover:text-[#C4975A] flex-shrink-0 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
}

// ── Variant C: Highlight Tabs ──
function FeaturesHighlightTabs() {
  const [active, setActive] = useState(0);
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div>
        {features.map((f, i) => (
          <button
            key={f.title}
            onClick={() => setActive(i)}
            className="w-full text-left flex items-center gap-5 py-4 px-5 rounded-xl transition-all duration-200 group relative"
          >
            {/* Active bar */}
            <div className={`absolute left-0 top-3 bottom-3 w-[3px] rounded-full transition-all duration-300 ${active === i ? "bg-[#C4975A]" : "bg-transparent"}`} />
            <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 ${active === i ? "bg-[#1E3A8A]" : "bg-[#F1F5F9] group-hover:bg-[#EBF0FB]"}`}>
              <Icon name={f.icon} size={16} className={active === i ? "text-white" : "text-[#718096]"} fallback="Check" />
            </div>
            <p className={`font-semibold text-sm transition-colors duration-200 ${active === i ? "text-[#1E3A8A]" : "text-[#718096] group-hover:text-[#4A5568]"}`}>
              {f.title}
            </p>
          </button>
        ))}
      </div>
      <div className="bg-[#F8FAFF] border border-[#E2EAF8] rounded-2xl p-8 min-h-[160px] flex flex-col justify-center transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center mb-5">
          <Icon name={features[active].icon} size={22} className="text-white" fallback="Check" />
        </div>
        <p className="font-semibold text-[#1E3A8A] text-base mb-2">{features[active].title}</p>
        <p className="text-[#718096] text-sm leading-relaxed">{features[active].text}</p>
      </div>
    </div>
  );
}

// ── Switcher ──
const variants = [
  { id: "numbered", label: "Numbered" },
  { id: "iconline", label: "Icon + Line" },
  { id: "tabs", label: "Highlight Tabs" },
];

export default function AboutSection() {
  const [variant, setVariant] = useState("numbered");

  return (
    <section id="about" className="font-dm bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
        </div>

        {/* ── Main layout: photo left, content right ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">

          {/* Photo */}
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

        {/* ── Features variant switcher ── */}
        <div className="flex items-center gap-2 mb-8">
          <span className="text-[#A0AEC0] text-xs mr-2">Features style:</span>
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

        {/* ── Active features variant ── */}
        {variant === "numbered" && <FeaturesNumbered />}
        {variant === "iconline" && <FeaturesIconLine />}
        {variant === "tabs"     && <FeaturesHighlightTabs />}

      </div>
    </section>
  );
}
