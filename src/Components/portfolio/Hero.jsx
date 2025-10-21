import React, { useState, useEffect } from "react";
import { ArrowDown, Sparkles, Code, Database } from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-0 relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.15) 0%, transparent 50%)`,
            transition: 'background 0.3s ease'
          }}
        ></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#64FFDA]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code 
          className="absolute top-1/4 left-[15%] text-[#64FFDA]/20 animate-bounce" 
          size={32}
          style={{ animationDuration: '3s', animationDelay: '0s' }}
        />
        <Database 
          className="absolute top-1/3 right-[20%] text-[#64FFDA]/20 animate-bounce" 
          size={28}
          style={{ animationDuration: '4s', animationDelay: '1s' }}
        />
        <Sparkles 
          className="absolute bottom-1/3 left-[10%] text-[#64FFDA]/20 animate-bounce" 
          size={24}
          style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="text-[#64FFDA] font-mono text-sm md:text-base inline-flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse"></span>
                Hi, my name is
              </span>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] leading-tight group">
                <span className="inline-block transition-all duration-300 hover:text-[#64FFDA] hover:scale-105">
                  Haaris Ali Waqas
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="bg-linear-to-br from-[#8892B0] via-[#64FFDA]/50 to-[#8892B0] bg-clip-text text-transparent animate-pulse" style={{ animationDuration: '3s' }}>
                  Software Engineer
                </span>
              </h2>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#8892B0] leading-tight">
                Building scalable full-stack applications
              </h3>
            </div>

            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <p className="text-[#8892B0] text-base md:text-lg max-w-xl leading-relaxed">
                Full Stack Developer specializing in{" "}
                <span className="text-[#64FFDA] font-semibold">backend systems</span>,{" "}
                <span className="text-[#64FFDA] font-semibold">API design</span>, and{" "}
                <span className="text-[#64FFDA] font-semibold">responsible AI integration</span>. 
                Passionate about building intelligent, scalable applications that solve real-world problems.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-4 pt-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <button 
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden bg-[#64FFDA] text-[#0A192F] px-8 py-3 text-base font-semibold rounded transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#64FFDA]/30"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
             
            </div>

            {/* Tech Stack Pills */}
            <div
              className={`flex flex-wrap gap-3 pt-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              {['Django', 'React', 'Python', 'AI/ML', 'PostgreSQL'].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#112240] border border-[#233554] text-[#64FFDA] text-sm font-mono rounded-full hover:border-[#64FFDA] hover:shadow-lg hover:shadow-[#64FFDA]/10 transition-all duration-300 cursor-default"
                  style={{ transitionDelay: `${800 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          <div
            className={`relative hidden lg:flex justify-center transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative group">
              {/* Animated Glow */}
              <div className="absolute inset-0 bg-[#64FFDA] rounded-lg opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Rotating Border Effect */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <div className="absolute inset-[-2px] bg-linear-to-br from-[#64FFDA] via-blue-500 to-purple-500 rounded-lg opacity-50 blur-sm animate-spin" style={{ animationDuration: '8s' }}></div>
              </div>

              {/* Main Card */}
              <div className="relative w-80 h-80 rounded-lg overflow-hidden border-4 border-[#64FFDA]/30 group-hover:border-[#64FFDA]/50 transition-all duration-500 bg-linear-to-br from-[#112240] to-[#0A192F]">
                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>

                {/* Content */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      {/* Pulsing Rings */}
                      <div className="absolute inset-0 bg-[#64FFDA]/20 rounded-full animate-ping" style={{ animationDuration: '2s' }}></div>
                      <div className="absolute inset-0 bg-[#64FFDA]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <span className="text-6xl group-hover:scale-110 transition-transform duration-300">👨‍💻</span>
                      </div>
                    </div>
                    <p className="text-[#8892B0] text-sm font-mono">
                      &lt;<span className="text-[#64FFDA]">Developer</span> /&gt;
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-[#64FFDA] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#64FFDA]/50 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#64FFDA]/50 rounded-br-lg"></div>
              </div>

              {/* Floating Code Snippets */}
              <div className="absolute -left-8 top-1/4 bg-[#112240] border border-[#233554] px-3 py-2 rounded text-[#64FFDA] font-mono text-xs opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-500">
                const code = 'clean';
              </div>
              <div className="absolute -right-8 bottom-1/3 bg-[#112240] border border-[#233554] px-3 py-2 rounded text-[#64FFDA] font-mono text-xs opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" style={{ transitionDelay: '100ms' }}>
                build() → success
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <button 
            onClick={() => scrollToSection("about")}
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-[#64FFDA] text-xs font-mono opacity-70 group-hover:opacity-100 transition-opacity">
              Scroll Down
            </span>
            <div className="cursor-pointer text-[#64FFDA] opacity-70 group-hover:opacity-100 transition-all duration-300 animate-bounce">
              <ArrowDown size={24} />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}