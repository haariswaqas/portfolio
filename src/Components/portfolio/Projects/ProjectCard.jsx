import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import ProjectDetails from "./ProjectDetails";

export default function ProjectCard({ project, index, setShowVideoModal }) {
  const [currentImage, setCurrentImage] = useState(0);
  const CLOUDINARY_BASE = "https://res.cloudinary.com/dqwub0fhb/image/upload/";

  const getImageUrl = (screenshot) =>
    screenshot.startsWith("http") ? screenshot : CLOUDINARY_BASE + screenshot;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Image Carousel */}
      <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <ImageCarousel
          screenshots={project.screenshots}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          getImageUrl={getImageUrl}
        />
      </div>

      {/* Project Details */}
      <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
        <ProjectDetails
          project={project}
          setShowVideoModal={setShowVideoModal}
          index={index}
        />
      </div>
    </div>
  );
}
