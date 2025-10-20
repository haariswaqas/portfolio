import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Skills() {
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

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "Bootstrap", icon: "🅱️" },
      ],
      color: "#64FFDA",
    },
    {
      category: "Backend",
      skills: [
        { name: "Django", icon: "🐍" },
        { name: "Django REST", icon: "🔌" },
        { name: "Python", icon: "🐍" },
        { name: "Node.js", icon: "📦" },
      ],
      color: "#64FFDA",
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "SQLite", icon: "💾" },
      ],
      color: "#64FFDA",
    },
    {
      category: "Tools & DevOps",
      skills: [
        { name: "Git", icon: "🔀" },
        { name: "GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "Postman", icon: "📮" },
      ],
      color: "#64FFDA",
    },
    {
      category: "AI/ML",
      skills: [
        { name: "LangChain", icon: "🔗" },
        { name: "OpenAI API", icon: "🤖" },
        { name: "RAG Pipelines", icon: "🧠" },
      ],
      color: "#64FFDA",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 bg-[#0A192F]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#64FFDA] font-mono text-xl">02.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6]">
                Technical Skills
              </h2>
              <div className="flex-1 h-px bg-[#233554] ml-4"></div>
            </div>
            <p className="text-[#8892B0] text-lg mt-4">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64FFDA]/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <h3 className="text-[#CCD6F6] font-semibold text-xl mb-4 flex items-center gap-2">
                  <span className="text-[#64FFDA]">▹</span>
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-[#8892B0] hover:text-[#64FFDA] transition-colors cursor-default group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-[#8892B0] text-lg">
              Always learning and exploring new technologies to stay at the
              forefront of development
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}