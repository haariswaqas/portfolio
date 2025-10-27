import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (element) observer.observe(element);
    return () => element && observer.unobserve(element);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0A192F]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-[#64FFDA] font-mono text-xl">04.</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6]">
                Get In Touch
              </h2>
            </div>
            <p className="text-[#A8B2D1] text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              I'm always open to new opportunities and exciting collaborations.
              Whether you want to discuss a project, a role, or just say hi —
              feel free to reach out!
            </p>
          </motion.div>

          {/* Contact Info + Socials */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 max-w-2xl mx-auto"
          >
            {/* Email Card */}
            <Card className="bg-[#112240] border-[#233554] p-6 hover:border-[#64FFDA]/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                  <Mail className="text-[#64FFDA]" size={24} />
                </div>
                <div>
                  <h3 className="text-black font-semibold text-lg mb-2">
                    Email Me Directly
                  </h3>
                  <a
                    href="mailto:haarisali9@gmail.com"
                    className="text-[#007358] hover:underline wrap-break-word"
                  >
                    haarisali9@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="bg-[#112240] border-[#233554] p-6">
              <h3 className="text-black font-semibold text-lg mb-4">
                Connect With Me
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/haariswaqas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-[#d8ff64] transition-colors group"
                >
                  <Github size={20} />
                  <span className="group-hover:translate-x-1 transition-transform">
                    GitHub Profile
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/haaris-ali-waqas-8ba2ab290/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-[#0048b4] transition-colors group"
                >
                  <Linkedin size={20} />
                  <span className="group-hover:translate-x-1 transition-transform">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
            </Card>

            {/* Collaboration CTA */}
            <Card className="bg-linear-to-br from-[#112240] to-[#0A192F] border-[#64FFDA]/30 p-6 text-center">
              <MessageSquare
                className="text-[#64FFDA] mx-auto mb-3"
                size={32}
              />
              <h3 className="text-[#CCD6F6] font-semibold text-lg mb-2">
                Let's Collaborate
              </h3>
              <p className="text-[#A8B2D1] text-sm mb-4 leading-relaxed">
                Open to freelance projects, full-time opportunities, and
                creative partnerships. Let’s build something great together!
              </p>
              <a
                href="https://pdfhost.io/v/9xPaNENqZh_Waqas_Haaris_Ali_-_CV"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300"
                >
                  Download Resume
                </Button>
              </a>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
