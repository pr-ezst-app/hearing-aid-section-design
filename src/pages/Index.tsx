import { useState } from "react";
import AboutSection from "@/components/AboutSection";
import AboutStoryScroll from "@/components/AboutStoryScroll";
import AboutCardGrid from "@/components/AboutCardGrid";
import AboutMinimalDark from "@/components/AboutMinimalDark";
import ServicesSection from "@/components/ServicesSection";

const layouts = [
  { id: "split", label: "Split Screen" },
  { id: "story", label: "Story Scroll" },
  { id: "grid", label: "Card Grid" },
  { id: "dark", label: "Minimal Dark" },
];

const Index = () => {
  const [layout, setLayout] = useState("split");

  return (
    <main className="min-h-screen font-dm">

      {/* Layout switcher — dev preview bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 bg-white/90 backdrop-blur-md border border-[#E2E8F0] rounded-2xl shadow-xl px-2 py-2">
        <span className="text-[#718096] text-xs font-medium px-3 border-r border-[#E2E8F0] mr-1">About Layout</span>
        {layouts.map((l) => (
          <button
            key={l.id}
            onClick={() => setLayout(l.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              layout === l.id
                ? "bg-[#1E3A8A] text-white shadow"
                : "text-[#4A5568] hover:bg-[#F1F5F9]"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {layout === "split" && <AboutSection />}
      {layout === "story" && <AboutStoryScroll />}
      {layout === "grid" && <AboutCardGrid />}
      {layout === "dark" && <AboutMinimalDark />}

      <ServicesSection />
    </main>
  );
};

export default Index;
