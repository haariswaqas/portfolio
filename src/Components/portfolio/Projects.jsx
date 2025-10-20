import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "Pediatric Hospital Management System with RAG Chatbot",
      description:
        "Comprehensive healthcare management platform with AI-powered patient support",
      longDescription:
        "A role-based web application designed for efficient hospital operations with integrated RAG (Retrieval-Augmented Generation) chatbot for patient interactions and internal support. Features sophisticated role management for Admin, Doctor, Nurse, Pharmacist, Lab Technician, and Parent roles.",
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
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80",
      ],
      color: "#64FFDA",
      category: "Healthcare • AI Integration",
    },
    {
      title: "Student Management System",
      description:
        "Comprehensive academic management platform with automated grade calculation",
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
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
      ],
      color: "#64FFDA",
      category: "Education • Management",
    },
    {
      title: "Linkwave — Social Media Platform",
      description:
        "Modern social networking platform focused on community engagement",
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
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      screenshots: [
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      ],
      color: "#64FFDA",
      category: "Social Media • Real-time",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0)
  );

  const nextImage = (projectIndex) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] =
        (newIndexes[projectIndex] + 1) % projects[projectIndex].screenshots.length;
      return newIndexes;
    });
  };

  const prevImage = (projectIndex) => {
    setCurrentImageIndex((prev) => {
      const newIndexes = [...prev];
      newIndexes[projectIndex] =
        newIndexes[projectIndex] === 0
          ? projects[projectIndex].screenshots.length - 1
          : newIndexes[projectIndex] - 1;
      return newIndexes;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[#0A192F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#64FFDA] font-mono text-xl">03.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6]">
                Featured Projects
              </h2>
              <div className="flex-1 h-px bg-[#233554] ml-4"></div>
            </div>
            <p className="text-[#8892B0] text-lg mt-4">
              A showcase of complex, full-stack applications demonstrating
              technical depth and problem-solving
            </p>
          </motion.div>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Project Image/Carousel */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#64FFDA] opacity-20 group-hover:opacity-0 transition-opacity duration-300 rounded-lg z-10"></div>
                    <div className="relative rounded-lg overflow-hidden border border-[#233554] group-hover:border-[#64FFDA]/50 transition-all duration-300">
                      <img
                        src={project.screenshots[currentImageIndex[index]]}
                        alt={project.title}
                        className="w-full h-96 object-cover"
                      />
                      {/* Carousel Controls */}
                      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => prevImage(index)}
                          className="p-2 bg-[#0A192F]/80 rounded-full hover:bg-[#0A192F] transition-colors"
                        >
                          <ChevronLeft className="text-[#64FFDA]" size={24} />
                        </button>
                        <button
                          onClick={() => nextImage(index)}
                          className="p-2 bg-[#0A192F]/80 rounded-full hover:bg-[#0A192F] transition-colors"
                        >
                          <ChevronRight className="text-[#64FFDA]" size={24} />
                        </button>
                      </div>
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {project.screenshots.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentImageIndex[index] === imgIndex
                                ? "bg-[#64FFDA] w-8"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div>
                    <Badge className="bg-[#64FFDA]/10 text-[#64FFDA] border-[#64FFDA]/30 mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#CCD6F6] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[#8892B0] text-lg leading-relaxed mb-4">
                      {project.longDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <Card className="bg-[#112240] border-[#233554] p-6">
                    <h4 className="text-[#CCD6F6] font-semibold mb-3 flex items-center gap-2">
                      <span className="text-[#64FFDA]">✓</span>
                      Key Features
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-[#8892B0] text-sm flex items-start gap-2"
                        >
                          <span className="text-[#64FFDA] mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>

                  {/* Technologies */}
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-[#64FFDA]/30 text-[#64FFDA] bg-transparent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 gap-2">
                      <Github size={18} />
                      GitHub
                    </Button>
                    <Button className="bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 gap-2">
                      <ExternalLink size={18} />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 gap-2"
                    >
                      <Play size={18} />
                      Video Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}