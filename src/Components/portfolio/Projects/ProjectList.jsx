import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, setShowVideoModal }) {
  return (
    <div className="space-y-24">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          setShowVideoModal={setShowVideoModal}
        />
      ))}
    </div>
  );
}
