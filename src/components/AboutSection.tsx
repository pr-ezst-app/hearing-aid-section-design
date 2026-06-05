import Icon from "@/components/ui/icon";

const pillars = [
  {
    icon: "Ear",
    title: "Precise Hearing Assessments",
    desc: "We take the time to truly understand your hearing profile — no rush, no pressure.",
  },
  {
    icon: "HandHeart",
    title: "Gentle, Unhurried Care",
    desc: "Every appointment is designed around you. Your comfort and clarity matter most.",
  },
  {
    icon: "Leaf",
    title: "Natural Fit & Feel",
    desc: "Modern hearing aids that feel invisible and natural — not like a device, but like yourself.",
  },
];

const milestones = [
  { year: "2004", text: "Clinic founded with a single purpose: compassionate hearing care." },
  { year: "2011", text: "Expanded to a full audiology center with a specialist team." },
  { year: "2019", text: "Introduced the latest invisible hearing aid technologies." },
  { year: "Today", text: "Over 8,500 patients living with clearer, richer hearing." },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#FAF7F2] font-nunito overflow-hidden"
    >
      {/* ── TOP BAND ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-20">

          {/* Heading block */}
          <div className="flex-1">
            <p className="text-[#7C9E8A] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
              Who We Are
            </p>
            <h2 className="font-playfair text-5xl lg:text-[4rem] leading-[1.15] text-[#3D3330] font-medium">
              Hearing care that<br />
              <em className="italic text-[#7C9E8A]">feels like home.</em>
            </h2>
          </div>

          {/* Intro text */}
          <div className="flex-1 lg:pb-2">
            <p className="text-[#6B5E56] leading-[1.8] text-[1.05rem]">
              Since 2004, our clinic has been a quiet refuge for people navigating hearing loss.
              We believe in warmth over clinical coldness, and listening before prescribing.
              Every person who walks in is treated as family.
            </p>
          </div>
        </div>
      </div>

      {/* ── IMAGES + QUOTE BAND ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 pb-20">
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">

          {/* Main large image */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden h-[340px] lg:h-[480px] relative group">
            <img
              src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/533757a6-ee11-4ea9-a30d-0fe152346a34.jpg"
              alt="Our warm clinic space"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#F0EAE0]/20 to-transparent" />
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Doctor image */}
            <div className="rounded-3xl overflow-hidden flex-1 min-h-[200px] group">
              <img
                src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/e9f38773-b33e-4768-a6ce-fb7c3ca34f32.jpg"
                alt="Our lead audiologist"
                className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />
            </div>

            {/* Pull quote card */}
            <div className="bg-[#7C9E8A] rounded-3xl p-7 flex flex-col justify-between min-h-[160px]">
              <p className="font-playfair text-white text-xl italic leading-relaxed">
                "We don't just fit hearing aids — we restore the sounds that matter most."
              </p>
              <p className="text-white/70 text-sm font-nunito mt-4 font-medium">
                — Dr. Sarah Linden, Lead Audiologist
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── THREE PILLARS ── */}
      <div className="bg-[#F0EAE0]/60 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className="text-center text-[#7C9E8A] text-xs tracking-[0.25em] uppercase font-semibold mb-12">
            Our Approach
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-[#FAF7F2] rounded-3xl p-8 group hover:bg-[#7C9E8A] transition-colors duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EAF0EB] group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors duration-300">
                  <Icon
                    name={p.icon}
                    size={22}
                    className="text-[#7C9E8A] group-hover:text-white transition-colors duration-300"
                    fallback="Heart"
                  />
                </div>
                <h3 className="font-playfair text-xl text-[#3D3330] group-hover:text-white font-medium mb-3 transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-[#6B5E56] group-hover:text-white/80 text-sm leading-relaxed transition-colors duration-300">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TIMELINE ── */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — label + stats */}
          <div>
            <p className="text-[#7C9E8A] text-xs tracking-[0.25em] uppercase font-semibold mb-5">
              Our Journey
            </p>
            <h3 className="font-playfair text-4xl text-[#3D3330] font-medium leading-snug mb-10">
              Two decades of<br />listening closely.
            </h3>

            <div className="flex flex-wrap gap-4">
              {[
                { n: "20+", l: "Years" },
                { n: "8,500+", l: "Patients" },
                { n: "98%", l: "Satisfaction" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-[#EAF0EB] rounded-2xl px-6 py-4 text-center"
                >
                  <p className="font-playfair text-3xl font-semibold text-[#4A7360]">{s.n}</p>
                  <p className="text-[#7C9E8A] text-xs tracking-widest uppercase mt-1">{s.l}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 font-nunito font-semibold px-8 py-4 bg-[#3D3330] text-[#FAF7F2] rounded-2xl hover:bg-[#4A7360] transition-colors duration-300 text-sm tracking-wide flex items-center gap-2 group">
              Book a Free Consultation
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Right — timeline */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#D9D0C5]" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={m.year} className="relative flex gap-6 items-start">
                  <div className={`absolute -left-[1.35rem] top-1 w-3 h-3 rounded-full border-2 ${i === milestones.length - 1 ? 'bg-[#7C9E8A] border-[#7C9E8A]' : 'bg-[#FAF7F2] border-[#C4B8A8]'}`} />
                  <div>
                    <p className="font-playfair text-[#7C9E8A] font-semibold text-sm mb-1">{m.year}</p>
                    <p className="text-[#6B5E56] text-sm leading-relaxed">{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
