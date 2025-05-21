import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const section of sections) {
        const element = sectionRefs.current[section.id];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌀 Mouse Glow Effect: Follow mouse and center exactly
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex bg-[#11172f] text-[#94a2b8] font-sans scroll-smooth px-20 pt-12">
      {/* Sidebar (sticky) */}
      <aside className="hidden md:flex flex-col justify-between w-1/3 max-w-sm px-8 py-16 h-screen sticky top-0 ">
        <div>
          <h1 className="text-5xl font-bold mb-2 text-[#d5deee]">Abha Misaqi</h1>
          <h2 className="text-lg text-cyan-400 mb-6">Software Engineering & Data Science</h2>
          <p className="text-[#94a2b8] text-sm mb-12">
            I build thoughtful, data-driven tools that bridge engineering, research, and real-world impact.
          </p>
          <nav className="space-y-4 text-sm uppercase tracking-widest">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block transition-colors ${activeSection === section.id
                  ? "text-white font-semibold border-l-2 border-white pl-2"
                  : "text-gray-400 hover:text-cyan-400 pl-2"
                  }`}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex space-x-6 text-[#94a2b8] text-2xl">
          <a href="https://github.com/abhamercy" className="hover:text-white transition-colors duration-300"><FaGithub size={28} /></a>
          <a href="https://linkedin.com/in/abha-misaqi" className="hover:text-white transition-colors duration-300"><FaLinkedin size={28} /></a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 w-full px-8 py-16 space-y-32">
        {/* About */}
        <section id="about" ref={(el) => (sectionRefs.current["about"] = el)} className="max-w-3xl mx-auto scroll-mt-0 pt-0 pb-12">
          <p className="text-[#94a2b8] leading-relaxed text-lg">
            I’ve always been curious about the intersection of technology, data, and human behavior, which led me to pursue both Computer Science and Economics. Outside of class and internships, I’m passionate about building tools that make complex systems more intuitive — whether it’s designing an AI-assisted educational platform or streamlining developer workflows. I believe the best software is not just functional but empowering. In my free time, I enjoy painting, reading fiction, and exploring the role of ethics and storytelling in tech. I also enjoy learning about product design and user experience, and I'm particularly interested in how thoughtful design can make complex tools feel intuitive and inclusive. I'm currently exploring accessibility in web development and how AI can be leveraged to support educational equity and mental health. Whether I'm working with data pipelines or generative interfaces, I strive to keep empathy at the core of everything I build.
          </p>
        </section>

        {/* Experience */}
        <section
          id="experience"
          ref={(el) => (sectionRefs.current["experience"] = el)}
          className="max-w-4xl mx-auto scroll-mt-24 py-12"
        >
          {/* Oracle */}
          <div className="mb-12 flex gap-10">
            <p className="text-sm text-[#94a2b8] w-40">May 2024 — Aug 2024</p>
            <div className="bg-white/5 p-5 rounded-lg shadow-lg space-y-2 flex-1">
              <h3 className="text-cyan-300 font-semibold text-lg">Oracle</h3>
              <p className="text-[#d5deee] text-base">Database Developer Intern</p>
              <p className="text-[#94a2b8]">
                Implemented an AI-powered API Search Page using OCI GenAI and built a tiered Product Pricing and Realms report with advanced SQL/PLSQL in APEX.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">OCI</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">SQL</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">PLSQL</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">Oracle APEX</span>
              </div>
            </div>
          </div>

          {/* Credera */}
          <div className="mb-12 flex gap-10">
            <p className="text-sm text-[#94a2b8] w-40">May 2023 — Aug 2023</p>
            <div className="bg-white/5 p-5 rounded-lg shadow-lg space-y-2 flex-1">
              <h3 className="text-cyan-300 font-semibold text-lg">Credera</h3>
              <p className="text-[#d5deee] text-base">Data Analyst Intern</p>
              <p className="text-[#94a2b8]">
                Led international research in Buenos Aires on market strategy and built SQL pipelines and Tableau dashboards for leadership insights.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">SQL</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">Tableau</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">Market Research</span>
              </div>
            </div>
          </div>

          {/* Good Systems */}
          <div className="mb-12 flex gap-10">
            <p className="text-sm text-[#94a2b8] w-40">June 2022 — Feb 2023</p>
            <div className="bg-white/5 p-5 rounded-lg shadow-lg space-y-2 flex-1">
              <h3 className="text-cyan-300 font-semibold text-lg">Good Systems</h3>
              <p className="text-[#d5deee] text-base">Data Analyst Intern</p>
              <p className="text-[#94a2b8]">
                Worked with UT’s Policy Institute to analyze surveillance systems and reviewed 100+ hours of video using Python & R to visualize trends.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">R</span>
                <span className="bg-cyan-800 text-white px-2 py-1 rounded text-xs">Data Analysis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          ref={(el) => (sectionRefs.current["projects"] = el)}
          className="max-w-3xl mx-auto scroll-mt-32 min-h-screen"
        >
          <div className="space-y-6 text-gray-300">
            <div>
              <h3 className="text-cyan-300 font-semibold text-lg">DriftLens</h3>
              <p>Browser extension for AI-powered semantic web memory & search.</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold text-lg">EcoTrack</h3>
              <p>Carbon footprint + financial impact tracker built with React & Flask.</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold text-lg">CodeAssist</h3>
              <p>AI feedback system for code learning built using NLP + metacognition.</p>
            </div>
          </div>
        </section>
      </main>

      {/* 🔵 Cursor Glow Halo */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed z-50 rounded-full blur-[160px]"
        style={{
          width: "900px",
          height: "900px",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          opacity: 0.2,
          background: `
      radial-gradient(circle,
        #111d41 0%,
        #1a2a56 20%,
        #22346a 40%,
        #2b3e7d 60%,
        #11172f 80%,
        #11172f 100%)
    `
        }}
      ></div>



    </div>
  );
}
