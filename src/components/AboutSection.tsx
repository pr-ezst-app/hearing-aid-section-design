import Icon from "@/components/ui/icon";

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "8,500+", label: "Patients Helped" },
  { value: "15", label: "Certified Specialists" },
  { value: "98%", label: "Satisfaction Rate" },
];

const values = [
  {
    icon: "Stethoscope",
    title: "Clinical Excellence",
    desc: "Board-certified audiologists with advanced diagnostics and evidence-based treatment protocols.",
  },
  {
    icon: "Heart",
    title: "Patient-Centered Care",
    desc: "We listen to your concerns, your lifestyle, and your goals before recommending any solution.",
  },
  {
    icon: "ShieldCheck",
    title: "Trusted Technology",
    desc: "Partnered with world-leading hearing aid brands — fitted, tuned, and supported by our team.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#F8F5F0] overflow-hidden py-24 lg:py-32"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#EBF0FB] opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#1E3A8A] opacity-5 -translate-x-1/2 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-sm tracking-[0.2em] uppercase font-dm font-medium">
            About Our Clinic
          </span>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — Text content */}
          <div>
            <h2 className="font-cormorant text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1E3A8A] mb-6">
              Decades of Expertise,{" "}
              <em className="italic text-[#2A5FBF]">One Mission</em>
              <br />— Better Hearing.
            </h2>

            <p className="font-dm text-[#4A5568] leading-relaxed text-lg mb-5">
              Founded in 2004, our clinic has been at the forefront of audiological care — combining cutting-edge diagnostic technology with compassionate, individualized treatment for every patient who walks through our doors.
            </p>
            <p className="font-dm text-[#4A5568] leading-relaxed mb-10">
              Whether you're experiencing mild hearing loss or seeking advanced hearing aid fitting, our multidisciplinary team delivers care that restores confidence, connection, and quality of life.
            </p>

            {/* Values */}
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="flex gap-4 items-start group">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white shadow-sm border border-[#E2E8F0] flex items-center justify-center group-hover:bg-[#1E3A8A] transition-colors duration-300">
                    <Icon
                      name={v.icon}
                      size={20}
                      className="text-[#1E3A8A] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <h4 className="font-dm font-semibold text-[#1E3A8A] mb-1">{v.title}</h4>
                    <p className="font-dm text-sm text-[#718096] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-6">
              <button className="font-dm font-medium px-7 py-3.5 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#162d6e] transition-colors duration-200 text-sm tracking-wide">
                Meet Our Team
              </button>
              <button className="font-dm font-medium text-[#1E3A8A] text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200">
                Book a Consultation
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>

          {/* RIGHT — Image collage */}
          <div className="relative h-[580px] lg:h-[680px]">

            {/* Large main image */}
            <div className="absolute top-0 right-0 w-[75%] h-[72%] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/25346a03-62d9-455a-9166-a8fb8bcd1b77.jpg"
                alt="Our clinic interior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/20 to-transparent" />
            </div>

            {/* Doctor portrait — bottom left */}
            <div className="absolute bottom-16 left-0 w-[48%] h-[54%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#F8F5F0]">
              <img
                src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/69d088fb-de26-45a0-86d0-b9e0dd0b48cc.jpg"
                alt="Our lead audiologist"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Hearing aid fitting — right bottom */}
            <div className="absolute bottom-0 right-0 w-[42%] h-[32%] rounded-2xl overflow-hidden shadow-lg border-4 border-[#F8F5F0]">
              <img
                src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/fab46a21-3160-42f9-b328-846cb5868e94.jpg"
                alt="Hearing aid fitting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating badge — experience */}
            <div className="absolute top-6 left-4 bg-white rounded-2xl shadow-lg px-5 py-4 border border-[#E2E8F0]">
              <p className="font-cormorant text-4xl font-bold text-[#1E3A8A] leading-none">20+</p>
              <p className="font-dm text-xs text-[#718096] mt-1 leading-tight">Years of<br/>trusted care</p>
            </div>

            {/* Floating badge — rating */}
            <div className="absolute bottom-28 right-4 bg-[#1E3A8A] rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Star" size={16} className="text-white fill-white" />
              </div>
              <div>
                <p className="font-dm text-white font-semibold text-sm">4.9 / 5.0</p>
                <p className="font-dm text-white/70 text-xs">Patient Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center py-8 px-4 rounded-2xl ${
                i === 0
                  ? "bg-[#1E3A8A] text-white"
                  : "bg-white border border-[#E2E8F0]"
              } shadow-sm`}
            >
              <p
                className={`font-cormorant text-5xl font-bold leading-none mb-2 ${
                  i === 0 ? "text-white" : "text-[#1E3A8A]"
                }`}
              >
                {s.value}
              </p>
              <p
                className={`font-dm text-sm ${
                  i === 0 ? "text-white/70" : "text-[#718096]"
                }`}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
