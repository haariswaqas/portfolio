import React, { useEffect, useRef, useState } from "react";
import ProjectList from "./ProjectList";
import VideoModal from "./VideoModal";
import { projects } from "./data/projectsData";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  // close modal on ESC
  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setShowVideoModal(null);
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A192F] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <header className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#64FFDA] font-mono text-xl">03.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6]">
                Featured Projects
              </h2>
              <div className="flex-1 h-px bg-[#233554] ml-4"></div>
            </div>
            <p className="text-[#8892B0] text-lg mt-4">
              A showcase of complex, full-stack applications demonstrating
              technical depth and problem-solving.
            </p>
          </header>

          <ProjectList projects={projects} setShowVideoModal={setShowVideoModal} />
        </div>

        {showVideoModal !== null && (
          <VideoModal
            project={projects[showVideoModal]}
            onClose={() => setShowVideoModal(null)}
          />
        )}
      </div>
    </section>
  );
}
