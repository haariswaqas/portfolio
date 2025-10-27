import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  screenshots = [],
  currentImage,
  setCurrentImage,
  getImageUrl,
}) {
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImage(
      currentImage === 0 ? screenshots.length - 1 : currentImage - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImage((currentImage + 1) % screenshots.length);
  };

  return (
    <div className="relative group cursor-pointer">
      <div className="absolute inset-0 bg-[#64FFDA] opacity-20 group-hover:opacity-0 transition-opacity rounded-lg z-10 pointer-events-none" />
      <div className="relative rounded-lg overflow-hidden border border-[#233554] group-hover:border-[#64FFDA]/50 transition-all duration-300 shadow-2xl">
        <img
          src={getImageUrl(screenshots[currentImage])}
          alt={`Screenshot ${currentImage + 1}`}
          className="w-full h-[400px] object-cover transition-transform duration-500"
        />

        {/* Controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={prevImage}
            className="p-3 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 hover:scale-110 transition-all border border-[#64FFDA]/50"
          >
            <ChevronLeft className="text-[#64FFDA]" size={24} />
          </button>
          <button
            onClick={nextImage}
            className="p-3 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 hover:scale-110 transition-all border border-[#64FFDA]/50"
          >
            <ChevronRight className="text-[#64FFDA]" size={24} />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImage(i);
              }}
              className={`h-2 rounded-full transition-all ${
                currentImage === i
                  ? "bg-[#64FFDA] w-8"
                  : "bg-white/50 w-2 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute top-4 right-4 bg-[#0A192F]/90 px-3 py-1 rounded-full text-[#64FFDA] text-sm font-mono z-20 border border-[#64FFDA]/30">
          {currentImage + 1} / {screenshots.length}
        </div>
      </div>
    </div>
  );
}
