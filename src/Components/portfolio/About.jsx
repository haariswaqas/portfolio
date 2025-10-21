import React, { useEffect, useState, useRef } from "react";
import { Code2, Brain, Rocket, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const highlights = [
    {
      icon: Code2,
      title: "Backend Excellence",
      description: "Expert in Django REST Framework, API design, and database architecture for scalable systems",
      gradient: "from-[#64FFDA]/20 via-[#64FFDA]/5 to-transparent"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Responsible implementation of RAG pipelines, LangChain, and AI-powered features",
      gradient: "from-blue-400/20 via-blue-400/5 to-transparent"
    },
    {
      icon: Rocket,
      title: "Full Stack Vision",
      description: "Modern React frontends paired with robust Django backends for complete solutions",
      gradient: "from-purple-400/20 via-purple-400/5 to-transparent"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/haariswaqas" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/haaris-ali-waqas-8ba2ab290/" },
    { icon: Mail, label: "Email", href: "mailto:haarisali9@gmail.com" }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div 
            className="mb-16"
            style={{
              transitionDelay: isVisible ? '0ms' : '0ms'
            }}
          >
            <div className="flex items-center gap-4 mb-4 group">
              <span className="text-[#64FFDA] font-mono text-xl transition-all duration-300 group-hover:translate-x-1">
                01.
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#CCD6F6] transition-colors duration-300 group-hover:text-[#64FFDA]">
                About Me
              </h2>
              <div className="flex-1 h-px bg-linear-to-br from-[#233554] to-transparent ml-4"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div 
              className="space-y-6"
              style={{
                transitionDelay: isVisible ? '200ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              <p className="text-[#8892B0] text-lg leading-relaxed group">
                I'm a <span className="text-[#64FFDA] font-semibold relative inline-block transition-all duration-300 hover:text-[#64FFDA] hover:scale-105">
                  Full Stack Developer
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#64FFDA] transition-all duration-300 group-hover:w-full"></span>
                </span> with a
                strong focus on backend systems and API architecture. I
                specialize in building robust, scalable applications using{" "}
                <span className="text-[#CCD6F6] font-semibold hover:text-[#64FFDA] transition-colors duration-200">Django</span> and{" "}
                <span className="text-[#CCD6F6] font-semibold hover:text-[#64FFDA] transition-colors duration-200">React</span>,
                combining technical depth with clean, maintainable code.
              </p>

              <p className="text-[#8892B0] text-lg leading-relaxed">
                My passion lies in leveraging{" "}
                <span className="text-[#64FFDA] font-semibold hover:text-white transition-colors duration-200">AI responsibly</span> to create
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
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                      rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                      className="group"
                    >
                      <div className="relative overflow-hidden border border-[#64FFDA] text-[#64FFDA] rounded px-4 py-2.5 transition-all duration-300 hover:bg-[#64FFDA]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#64FFDA]/20">
                        <div className="flex items-center gap-2 relative z-10">
                          <Icon size={18} className="transition-transform duration-300 group-hover:rotate-12" />
                          <span className="font-medium">{social.label}</span>
                          <ArrowUpRight size={14} className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-br from-[#64FFDA]/0 via-[#64FFDA]/10 to-[#64FFDA]/0 translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Highlights */}
            <div 
              className="space-y-6"
              style={{
                transitionDelay: isVisible ? '400ms' : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.6s ease-out'
              }}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredCard === index;
                
                return (
                  <div
                    key={index}
                    ref={el => cardsRef.current[index] = el}
                    className="relative bg-[#112240] rounded-lg p-6 border border-[#233554] transition-all duration-500 hover:border-[#64FFDA]/50 hover:shadow-xl hover:shadow-[#64FFDA]/5 hover:-translate-y-1 group cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    style={{
                      transitionDelay: isVisible ? `${600 + index * 100}ms` : '0ms'
                    }}
                  >
                    {/* Spotlight Effect */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 255, 218, 0.1), transparent 40%)`
                        }}
                      ></div>
                    )}

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className="flex items-start gap-4 relative z-10">
                      <div className="p-3 bg-[#64FFDA]/10 rounded-lg transition-all duration-300 group-hover:bg-[#64FFDA]/20 group-hover:scale-110 group-hover:rotate-3">
                        <Icon 
                          className="text-[#64FFDA] transition-transform duration-300 group-hover:scale-110" 
                          size={24} 
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#CCD6F6] font-semibold text-xl mb-2 transition-colors duration-300 group-hover:text-[#64FFDA]">
                          {item.title}
                        </h3>
                        <p className="text-[#8892B0] leading-relaxed transition-colors duration-300 group-hover:text-[#CCD6F6]">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-[#64FFDA]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}