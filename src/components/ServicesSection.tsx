import Icon from "@/components/ui/icon";
import { useState } from "react";

const services = [
  {
    id: "hearing-tests",
    icon: "Activity",
    tag: "Diagnostics",
    title: "Hearing Tests",
    subtitle: "Full audiological assessment",
    description:
      "Our comprehensive hearing evaluations use the latest diagnostic equipment to map your exact hearing profile. We test across all frequencies, assess speech clarity, and identify the type and degree of any hearing loss — all in a single comfortable appointment.",
    bullets: [
      "Pure-tone audiometry",
      "Speech recognition testing",
      "Middle ear assessment",
      "Results explained same day",
    ],
    image: "https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/513cef93-cf42-47d5-b6fb-560b48eaaa37.jpg",
    duration: "60 min",
    price: "From £75",
  },
  {
    id: "hearing-aids",
    icon: "Ear",
    tag: "Treatment",
    title: "Hearing Aids",
    subtitle: "Fitted, tuned & supported",
    description:
      "We partner with the world's leading hearing aid manufacturers to offer the most natural, discreet solutions available. From invisible-in-canal devices to rechargeable behind-the-ear models, every aid is precisely programmed to your unique hearing map.",
    bullets: [
      "All major brands available",
      "Invisible & rechargeable options",
      "Fine-tuning & follow-ups included",
      "Lifetime aftercare programme",
    ],
    image: "https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/cdf30609-b6f6-46b4-abe2-00001e8336b8.jpg",
    duration: "90 min",
    price: "From £895",
  },
  {
    id: "tinnitus",
    icon: "BrainCircuit",
    tag: "Therapy",
    title: "Tinnitus Treatment",
    subtitle: "Relief & long-term management",
    description:
      "Tinnitus affects millions of people, yet it's widely misunderstood. Our specialists use a combination of sound therapy, counselling, and the latest tinnitus retraining techniques to help you reduce the impact of ringing, buzzing, or humming sounds.",
    bullets: [
      "Tinnitus Retraining Therapy (TRT)",
      "Sound masking devices",
      "Cognitive behavioural support",
      "Personalised management plan",
    ],
    image: null,
    duration: "75 min",
    price: "From £95",
  },
  {
    id: "earwax",
    icon: "Droplets",
    tag: "Procedure",
    title: "Earwax Removal",
    subtitle: "Safe microsuction technique",
    description:
      "Blocked ears can cause muffled hearing, discomfort, and tinnitus. Our specialists use microsuction — the gold standard in earwax removal — to safely clear blockages without water or syringing, giving you instant relief.",
    bullets: [
      "Microsuction & manual removal",
      "No water or syringing",
      "Both ears treated same visit",
      "Instant results",
    ],
    image: null,
    duration: "30 min",
    price: "From £55",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <section id="services" className="bg-white font-dm py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C4975A]" />
              <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">
                What We Offer
              </span>
            </div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-semibold text-[#1E3A8A] leading-[1.1]">
              Our Services
            </h2>
          </div>
          <p className="text-[#718096] max-w-sm leading-relaxed text-sm lg:text-base">
            Every service is delivered by certified audiologists using the latest clinical technology — tailored to you.
          </p>
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {services.map((sv, i) => (
            <button
              key={sv.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-[#1E3A8A] text-white shadow-md"
                  : "bg-[#F1F5F9] text-[#4A5568] hover:bg-[#EBF0FB] hover:text-[#1E3A8A]"
              }`}
            >
              <Icon name={sv.icon} size={15} fallback="Circle" />
              {sv.title}
            </button>
          ))}
        </div>

        {/* Active service panel */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left — details */}
          <div className="bg-[#F8FAFF] rounded-3xl p-8 lg:p-12 flex flex-col justify-between border border-[#E2EAF8]">
            <div>
              {/* Tag + icon */}
              <div className="flex items-center justify-between mb-8">
                <span className="bg-[#EBF0FB] text-[#1E3A8A] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide uppercase">
                  {s.tag}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A] flex items-center justify-center">
                  <Icon name={s.icon} size={22} className="text-white" fallback="Circle" />
                </div>
              </div>

              <h3 className="font-cormorant text-4xl font-semibold text-[#1E3A8A] mb-2">{s.title}</h3>
              <p className="text-[#C4975A] text-sm font-medium mb-6">{s.subtitle}</p>
              <p className="text-[#4A5568] leading-relaxed mb-8">{s.description}</p>

              {/* Bullets */}
              <ul className="space-y-3 mb-10">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EBF0FB] flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={11} className="text-[#1E3A8A]" />
                    </div>
                    <span className="text-sm text-[#4A5568]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom meta + CTA */}
            <div>
              <div className="flex items-center gap-6 py-5 border-t border-b border-[#E2EAF8] mb-7">
                <div className="flex items-center gap-2 text-sm text-[#718096]">
                  <Icon name="Clock" size={15} className="text-[#1E3A8A]" />
                  {s.duration}
                </div>
                <div className="w-px h-5 bg-[#E2E8F0]" />
                <div className="flex items-center gap-2 text-sm text-[#718096]">
                  <Icon name="Tag" size={15} className="text-[#1E3A8A]" />
                  {s.price}
                </div>
              </div>
              <button className="w-full py-4 bg-[#1E3A8A] text-white rounded-xl font-semibold text-sm hover:bg-[#162d6e] transition-colors duration-200 flex items-center justify-center gap-2 group">
                Book This Service
                <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          </div>

          {/* Right — image or illustrated card */}
          {s.image ? (
            <div className="rounded-3xl overflow-hidden min-h-[400px] lg:min-h-0 relative group">
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 via-transparent to-transparent" />
              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-4 inline-flex items-center gap-4 shadow-lg">
                  <div className="w-9 h-9 rounded-xl bg-[#EBF0FB] flex items-center justify-center">
                    <Icon name={s.icon} size={18} className="text-[#1E3A8A]" fallback="Circle" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E3A8A] text-sm">{s.title}</p>
                    <p className="text-[#718096] text-xs">{s.duration} · {s.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl bg-[#1E3A8A] min-h-[400px] lg:min-h-0 relative overflow-hidden flex flex-col justify-between p-10">
              {/* Decorative rings */}
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full border border-white/10 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full border border-white/10 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center mb-8">
                  <Icon name={s.icon} size={30} className="text-white" fallback="Circle" />
                </div>
                <h3 className="font-cormorant text-4xl font-semibold text-white mb-4">{s.title}</h3>
                <p className="text-white/70 leading-relaxed">{s.description}</p>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-4 mt-10">
                <div className="bg-white/10 rounded-2xl p-5">
                  <Icon name="Clock" size={18} className="text-[#A8C0F8] mb-2" />
                  <p className="text-white font-semibold">{s.duration}</p>
                  <p className="text-white/50 text-xs mt-0.5">Appointment</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5">
                  <Icon name="Tag" size={18} className="text-[#A8C0F8] mb-2" />
                  <p className="text-white font-semibold">{s.price}</p>
                  <p className="text-white/50 text-xs mt-0.5">Starting from</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* All services quick list */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((sv, i) => (
            <button
              key={sv.id}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-2xl border transition-all duration-200 ${
                active === i
                  ? "border-[#1E3A8A] bg-[#EBF0FB]"
                  : "border-[#E2E8F0] bg-white hover:border-[#A8C0F8]"
              }`}
            >
              <Icon
                name={sv.icon}
                size={20}
                className={active === i ? "text-[#1E3A8A] mb-3" : "text-[#A0AEC0] mb-3"}
                fallback="Circle"
              />
              <p className={`font-semibold text-sm ${active === i ? "text-[#1E3A8A]" : "text-[#2D3748]"}`}>
                {sv.title}
              </p>
              <p className="text-[#718096] text-xs mt-1">{sv.price}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
