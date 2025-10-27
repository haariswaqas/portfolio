import React from "react";
import { Play } from "lucide-react";

export default function ProjectDetails({ project, setShowVideoModal, index }) {
  return (
    <>
      <span className="inline-block bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-1 text-sm rounded-md">
        {project.category}
      </span>

      <h3 className="text-2xl md:text-3xl font-bold text-[#CCD6F6]">
        {project.title}
      </h3>

      <p className="text-[#8892B0] text-base leading-relaxed">
        {project.longDescription}
      </p>

      <div className="bg-[#112240] border border-[#233554] p-6 rounded-lg hover:border-[#64FFDA]/30 transition-colors">
        <h4 className="text-[#CCD6F6] font-semibold mb-4 flex items-center gap-2 text-lg">
          <span className="text-[#64FFDA]">✓</span> Key Features
        </h4>
        <ul className="grid md:grid-cols-2 gap-3">
          {(project.features || []).map((f, i) => (
            <li key={i} className="text-[#8892B0] text-sm flex items-start gap-2">
              <span className="text-[#64FFDA] mt-1 shrink-0">▹</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="text-[#CCD6F6] font-semibold mb-3 text-sm uppercase tracking-wide">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {(project.technologies || []).map((tech) => (
            <span
              key={tech}
              className="bg-[#112240] border border-[#64FFDA]/40 text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-colors px-3 py-1.5 text-sm font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.videoUrl && (
        <button
          onClick={() => setShowVideoModal(index)}
          className="flex items-center gap-2 border-2 border-[#64FFDA]/50 text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all hover:scale-105 px-6 py-2 rounded-md font-medium"
        >
          <Play size={18} /> Video Demo
        </button>
      )}
    </>
  );
}
