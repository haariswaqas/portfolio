import React, { useEffect, useState, useRef } from "react";
import { Code2, Brain, Rocket, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 px-6">
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
              <span className="text-[#64FFDA] font-mono text-xl">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6]">
                About Me
              </h2>
              <div className="flex-1 h-px bg-[#233554] ml-4"></div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-[#8892B0] text-lg leading-relaxed">
                I'm a <span className="text-[#64FFDA]">Full Stack Developer</span> with a
                strong focus on backend systems and API architecture. I
                specialize in building robust, scalable applications using{" "}
                <span className="text-[#CCD6F6] font-semibold">Django</span> and{" "}
                <span className="text-[#CCD6F6] font-semibold">React</span>,
                combining technical depth with clean, maintainable code.
              </p>

              <p className="text-[#8892B0] text-lg leading-relaxed">
                My passion lies in leveraging{" "}
                <span className="text-[#64FFDA]">AI responsibly</span> to create
                intelligent applications that solve complex real-world problems.
                From RAG-powered chatbots to comprehensive management systems, I
                focus on building solutions that are both powerful and ethical.
              </p>

              <p className="text-[#8892B0] text-lg leading-relaxed">
                With experience across the full stack, I bring a holistic
                understanding to every project, ensuring seamless integration
                between frontend experiences and backend systems.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 gap-2"
                  >
                    <Github size={18} />
                    GitHub
                  </Button>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 gap-2"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </a>
                <a href="mailto:your.email@example.com">
                  <Button
                    variant="outline"
                    className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 gap-2"
                  >
                    <Mail size={18} />
                    Email
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64FFDA]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <Code2 className="text-[#64FFDA]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold text-xl mb-2">
                      Backend Excellence
                    </h3>
                    <p className="text-[#8892B0]">
                      Expert in Django REST Framework, API design, and database
                      architecture for scalable systems
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64FFDA]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <Brain className="text-[#64FFDA]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold text-xl mb-2">
                      AI Integration
                    </h3>
                    <p className="text-[#8892B0]">
                      Responsible implementation of RAG pipelines, LangChain,
                      and AI-powered features
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] hover:border-[#64FFDA]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <Rocket className="text-[#64FFDA]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold text-xl mb-2">
                      Full Stack Vision
                    </h3>
                    <p className="text-[#8892B0]">
                      Modern React frontends paired with robust Django backends
                      for complete solutions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}