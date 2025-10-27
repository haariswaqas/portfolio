import React from "react";
import { Play } from "lucide-react";

export default function VideoModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#112240] rounded-lg overflow-hidden shadow-2xl border border-[#64FFDA]/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 transition-all hover:scale-110 border border-[#64FFDA]/50"
        >
          <svg
            className="w-6 h-6 text-[#64FFDA]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-[#0A192F] px-6 py-4 border-b border-[#233554]">
          <h3 className="text-xl font-bold text-[#CCD6F6] flex items-center gap-2">
            <Play size={20} className="text-[#64FFDA]" />
            {project.title}
          </h3>
          <p className="text-[#8892B0] text-sm mt-1">Project Demo Video</p>
        </div>

        <div className="relative bg-black aspect-video">
          <video
            className="w-full h-full"
            controls
            playsInline
            src={project.videoUrl}
          />
        </div>

        <div className="bg-[#0A192F] px-6 py-3 text-center">
          <p className="text-[#8892B0] text-sm">
            Press <span className="text-[#64FFDA] font-mono">ESC</span> or click outside to close
          </p>
        </div>
      </div>
    </div>
  );
}
