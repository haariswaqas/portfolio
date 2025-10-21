import React, { useState, useEffect, useRef } from "react";
import {
  ExternalLink,
  Github,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const CLOUDINARY_BASE = "https://res.cloudinary.com/dqwub0fhb/image/upload/";

  // showVideoModal must be declared before the Escape-listening useEffect
  const [showVideoModal, setShowVideoModal] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  // Close modal on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showVideoModal !== null) {
        setShowVideoModal(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showVideoModal]);

  const projects = [
    {
      title: "Pediatric Hospital Management System with RAG Chatbot",
      longDescription:
        "A comprehensive role-based web application designed for efficient hospital operations with integrated RAG (Retrieval-Augmented Generation) chatbot for patient interactions and internal support. Features sophisticated role management for Admin, Doctor, Nurse, Pharmacist, Lab Technician, and Parent roles.",
      features: [
        "Role-based authentication & authorization",
        "Appointment scheduling & management",
        "Lab test results tracking",
        "Inventory & pharmacy management",
        "RAG-powered chatbot for patient queries",
        "Real-time notifications system",
      ],
      technologies: [
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "LangChain",
        "OpenAI API",
        "Docker",
      ],
      screenshots: [
        "v1761057058/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_35_40_PM_xyw9ax.png",
        "v1761062472/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_44_06_PM_jee9ur.png",
        "v1761062482/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_35_48_PM_uix6nx.png",
        "v1761056990/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_44_10_PM_lifdwk.png",
        "v1761056784/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_48_50_PM_eqwzqt.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761056784/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_51_14_PM_egcesj.png",
        "v1761056843/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_59_11_PM_iwmed7.png",
        "v1761056785/Pediatrics_HMS_-_Google_Chrome_10_10_2025_11_54_48_PM_clrnez.png",
        "v1761056836/Pediatrics_HMS_-_Google_Chrome_10_11_2025_12_00_13_AM_tey3mi.png",
        "v1761056820/Pediatrics_HMS_-_Google_Chrome_10_11_2025_12_06_19_AM_eekwh2.png",
        "v1761056820/Pediatrics_HMS_-_Google_Chrome_10_11_2025_12_06_42_AM_eziyez.png",
        "v1761056858/Pediatrics_HMS_-_Google_Chrome_10_11_2025_12_07_26_AM_hgxgvy.png",
        
      ],
      category: "Healthcare • AI Integration",
      videoUrl:
        "https://res.cloudinary.com/dqwub0fhb/video/upload/v1761063343/PHMS_Demo_FIVERR_-_Made_with_Clipchamp_fpnbqt.mp4",
    },
    {
      title: "Student Management System",
      longDescription:
        "Full-featured student management system with role-based access for Admin, Lecturer, and Student. Streamlines academic operations with course management, grade tracking, and automated CGPA calculation.",
      features: [
        "Student registration & profile management",
        "Course enrollment & management",
        "Grade submission & tracking",
        "Automated CGPA calculation",
        "Role-specific dashboards",
        "Attendance monitoring",
      ],
      technologies: [
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT Authentication",
      ],
       screenshots: [
        "v1761085106/student_interface_qcl9hh.png",
        "v1761085104/lecturer_interface_rbbzs0.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761085103/assignment_form_wo6wy7.png",
        "v1761085104/admin_interface_n3nu3a.png",

        "v1761085104/all_results1_ejn55t.png",
        "v1761085103/My_Results_ifzh6f.png",
        "v1761085103/all_results_evhkoe.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761085103/My_Results_ifzh6f.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761085104/assignment_submissions_i4xhpt.png",

       
      ],
      category: "Education • Management",
    },
    {
      title: "Linkwave — Social Media Platform",
      longDescription:
        "A feature-rich social media application designed for seamless community interaction. Built with modern web technologies and optimized for performance with real-time updates.",
      features: [
        "User authentication & profiles",
        "Post creation with media support",
        "Like, comment, and share functionality",
        "Follow/unfollow system",
        "Real-time notifications",
        "Responsive design for all devices",
      ],
      technologies: [
        "Django",
        "React",
        "WebSockets",
        "PostgreSQL",
        "Redis",
        "Tailwind CSS",
      ],
      screenshots: [
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761086037/homepage_bfi0ml.png",
        
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761086036/profile_dzdi6d.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761086124/repost_uskmny.png",
        "https://res.cloudinary.com/dqwub0fhb/image/upload/v1761086036/comment_section_n41vfc.png",
      ],
      category: "Social Media • Real-time",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0)
  );

  const nextImage = (projectIndex, e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        (updated[projectIndex] + 1) % projects[projectIndex].screenshots.length;
      return updated;
    });
  };

  const prevImage = (projectIndex, e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        updated[projectIndex] === 0
          ? projects[projectIndex].screenshots.length - 1
          : updated[projectIndex] - 1;
      return updated;
    });
  };

  const getImageUrl = (screenshot) => {
    return screenshot && screenshot.startsWith("http")
      ? screenshot
      : CLOUDINARY_BASE + screenshot;
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A192F] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Section Header */}
          <div className="mb-16">
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
          </div>

          {/* Project List */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="grid lg:grid-cols-2 gap-8 items-start"
              >
                {/* Image Carousel */}
                <div
                  className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative group cursor-pointer">
                    {/* overlay should not block clicks */}
                    <div className="absolute inset-0 bg-[#64FFDA] opacity-20 group-hover:opacity-0 transition-opacity rounded-lg z-10 pointer-events-none" />
                    <div className="relative rounded-lg overflow-hidden border border-[#233554] group-hover:border-[#64FFDA]/50 transition-all duration-300 shadow-2xl">
                      <img
                        src={getImageUrl(
                          project.screenshots[currentImageIndex[index]] || ""
                        )}
                        alt={`${project.title} screenshot ${
                          (currentImageIndex[index] || 0) + 1
                        }`}
                        className="w-full h-[400px] object-cover transition-transform duration-500"
                      />
                      {/* Controls */}
                      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={(e) => prevImage(index, e)}
                          className="p-3 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 hover:scale-110 transition-all z-20 border border-[#64FFDA]/50"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="text-[#64FFDA]" size={24} />
                        </button>
                        <button
                          onClick={(e) => nextImage(index, e)}
                          className="p-3 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 hover:scale-110 transition-all z-20 border border-[#64FFDA]/50"
                          aria-label="Next image"
                        >
                          <ChevronRight className="text-[#64FFDA]" size={24} />
                        </button>
                      </div>

                      {/* Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                        {(project.screenshots || []).map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex((prev) => {
                                const updated = [...prev];
                                updated[index] = imgIndex;
                                return updated;
                              });
                            }}
                            className={`h-2 rounded-full transition-all ${
                              currentImageIndex[index] === imgIndex
                                ? "bg-[#64FFDA] w-8"
                                : "bg-white/50 w-2 hover:bg-white/70"
                            }`}
                            aria-label={`Go to image ${imgIndex + 1}`}
                          />
                        ))}
                      </div>

                      {/* Image counter */}
                      <div className="absolute top-4 right-4 bg-[#0A192F]/90 px-3 py-1 rounded-full text-[#64FFDA] text-sm font-mono z-20 border border-[#64FFDA]/30">
                        {currentImageIndex[index] + 1} /{" "}
                        {(project.screenshots || []).length || 1}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                >
                  <span className="inline-block bg-[#64FFDA]/10 text-[#64FFDA] border border-[#64FFDA]/30 px-4 py-1 text-sm rounded-md">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#CCD6F6] leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#8892B0] text-base leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="bg-[#112240] border border-[#233554] p-6 rounded-lg hover:border-[#64FFDA]/30 transition-colors">
                    <h4 className="text-[#CCD6F6] font-semibold mb-4 flex items-center gap-2 text-lg">
                      <span className="text-[#64FFDA]">✓</span>
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {(project.features || []).map((f, i) => (
                        <li
                          key={i}
                          className="text-[#8892B0] text-sm flex items-start gap-2"
                        >
                          <span className="text-[#64FFDA] mt-1 shrink-0">
                            ▹
                          </span>
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

                  <div className="flex flex-wrap gap-3 pt-2">
                   
                   

                    {project.videoUrl && (
                      <button
                        onClick={() => setShowVideoModal(index)}
                        className="flex items-center gap-2 border-2 border-[#64FFDA]/50 text-[#64FFDA] hover:bg-[#64FFDA]/10 bg-transparent transition-all hover:scale-105 px-6 py-2 rounded-md font-medium"
                      >
                        <Play size={18} />
                        Video Demo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal !== null &&
          projects[showVideoModal] &&
          projects[showVideoModal].videoUrl && (
            <div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setShowVideoModal(null)}
              role="presentation"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${projects[showVideoModal].title} demo video`}
                className="relative w-full max-w-5xl bg-[#112240] rounded-lg overflow-hidden shadow-2xl border border-[#64FFDA]/30"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowVideoModal(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-[#0A192F]/90 rounded-full hover:bg-[#64FFDA]/20 transition-all hover:scale-110 border border-[#64FFDA]/50"
                  aria-label="Close video"
                >
                  <svg
                    className="w-6 h-6 text-[#64FFDA]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>

                {/* Video Title */}
                <div className="bg-[#0A192F] px-6 py-4 border-b border-[#233554]">
                  <h3 className="text-xl font-bold text-[#CCD6F6] flex items-center gap-2">
                    <Play size={20} className="text-[#64FFDA]" />
                    {projects[showVideoModal].title}
                  </h3>
                  <p className="text-[#8892B0] text-sm mt-1">Project Demo Video</p>
                </div>

                {/* Video Player */}
                <div className="relative bg-black aspect-video">
                  <video
                    className="w-full h-full"
                    controls
                    playsInline
                    src={projects[showVideoModal].videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Footer */}
                <div className="bg-[#0A192F] px-6 py-3 text-center">
                  <p className="text-[#8892B0] text-sm">
                    Press <span className="text-[#64FFDA] font-mono">ESC</span> or
                    click outside to close
                  </p>
                </div>
              </div>
            </div>
          )}
      </div>
    </section>
  );
}
