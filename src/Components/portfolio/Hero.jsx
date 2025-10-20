import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#64FFDA] font-mono text-sm md:text-base"
            >
              Hi, my name is
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] leading-tight"
            >
              Software Engineer
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#8892B0] leading-tight"
            >
              Building scalable full-stack applications
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[#8892B0] text-base md:text-lg max-w-xl leading-relaxed"
            >
              Full Stack Developer specializing in backend systems, API design,
              and responsible AI integration. Passionate about building
              intelligent, scalable applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                onClick={() => scrollToSection("projects")}
                className="bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 px-8 py-6 text-base font-semibold"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#64FFDA] text-[#64FFDA] bg-transparent hover:bg-[#64FFDA]/10 px-8 py-6 text-base font-semibold"
              >
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#64FFDA] rounded-lg opacity-20 blur-3xl"></div>
              <div className="relative w-80 h-80 rounded-lg overflow-hidden border-4 border-[#64FFDA]/30">
                <div className="w-full h-full bg-gradient-to-br from-[#112240] to-[#0A192F] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-[#64FFDA]/10 rounded-full flex items-center justify-center mb-4">
                      <span className="text-6xl text-[#64FFDA]">👨‍💻</span>
                    </div>
                    <p className="text-[#8892B0] text-sm">
                      Your Professional Photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <button onClick={() => scrollToSection("about")}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="cursor-pointer text-[#64FFDA] opacity-70 hover:opacity-100 transition-opacity"
            >
              <ArrowDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}