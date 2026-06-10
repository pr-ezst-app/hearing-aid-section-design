import Icon from "@/components/ui/icon";
import { useEffect, useRef, useState } from "react";

const values = [
  { icon: "Stethoscope", title: "Expert Diagnostics", text: "State-of-the-art audiological testing in our certified soundproof suites." },
  { icon: "ShieldCheck", title: "Lifetime Support", text: "Every patient receives ongoing care long after their first appointment." },
  { icon: "Heart", title: "Patient First", text: "We take time to truly listen — to you, not just your audiogram." },
  { icon: "Award", title: "Award-Winning", text: "Recognised as Scotland's top audiology clinic three years running." },
];

function useCountUp(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="bg-[#1E3A8A] rounded-3xl p-8 flex flex-col justify-between min-h-[160px]">
      <Icon name="TrendingUp" size={20} className="text-[#A8C0F8]" />
      <div>
        <p className="font-cormorant text-5xl font-bold text-white leading-none">
          {count}{suffix}
        </p>
        <p className="text-white/60 text-sm mt-2">{label}</p>
      </div>
    </div>
  );
}

export default function AboutCardGrid() {
  return (
    <section id="about" className="font-dm bg-[#F8FAFF] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Label */}
        <div className="flex items-center gap-3 mb-14">
          <div className="h-px w-8 bg-[#C4975A]" />
          <span className="text-[#C4975A] text-xs tracking-[0.25em] uppercase font-medium">About Us</span>
        </div>

        {/* ── Mosaic Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto gap-4">

          {/* Large photo card — spans 2 cols, 2 rows */}
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden relative min-h-[320px] lg:min-h-[420px] group">
            <img
              src="https://cdn.ezst.app/projects/d5a26abe-18bd-4a08-a1ed-2f43f30dcb6d/files/e682099f-ef7a-472d-91bc-5aa7b49f2ec3.jpg"
              alt="Our team"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="font-cormorant text-white text-2xl italic leading-snug mb-1">
                "Restoring hearing, restoring lives."
              </p>
              <p className="text-white/60 text-xs">— Dr. Sarah Linden, Founder</p>
            </div>
          </div>

          {/* Headline card */}
          <div className="col-span-2 bg-white rounded-3xl p-8 flex flex-col justify-center border border-[#E2EAF8]">
            <h2 className="font-cormorant text-4xl lg:text-5xl font-semibold text-[#1E3A8A] leading-[1.1]">
              Two decades of expertise — <em className="italic text-[#C4975A]">one unwavering mission.</em>
            </h2>
          </div>

          {/* Stat cards */}
          <StatCard value={20} suffix="+" label="Years of Experience" />
          <StatCard value={8500} suffix="+" label="Patients Helped" />

          {/* Mission text card */}
          <div className="col-span-2 bg-white rounded-3xl p-8 border border-[#E2EAF8] flex flex-col justify-between">
            <p className="text-[#4A5568] leading-relaxed text-base lg:text-lg mb-8">
              Founded in Edinburgh in 2004, our clinic was built on a simple belief: everyone deserves to hear the world fully. Today, across three locations, our team of certified audiologists deliver expert care — from diagnosis to long-term support.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 bg-[#1E3A8A] text-white rounded-xl font-semibold text-sm hover:bg-[#162d6e] transition-colors duration-200 flex items-center gap-2 group">
                Book Free Consultation
                <Icon name="ArrowRight" size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="px-6 py-3 border border-[#1E3A8A] text-[#1E3A8A] rounded-xl font-medium text-sm hover:bg-[#EBF0FB] transition-colors duration-200">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Value cards */}
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-3xl p-6 border border-[#E2EAF8] hover:border-[#1E3A8A] hover:shadow-md transition-all duration-200 group">
              <div className="w-10 h-10 rounded-xl bg-[#EBF0FB] flex items-center justify-center mb-5 group-hover:bg-[#1E3A8A] transition-colors duration-200">
                <Icon name={v.icon} size={18} className="text-[#1E3A8A] group-hover:text-white transition-colors duration-200" fallback="Check" />
              </div>
              <p className="font-semibold text-[#1E3A8A] text-sm mb-2">{v.title}</p>
              <p className="text-[#718096] text-xs leading-relaxed">{v.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
