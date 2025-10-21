import React, { useState, useEffect } from "react";
import { Menu, Github, Linkedin, X, Mail } from "lucide-react";
import { Button } from "./Components/portfolio/ui/button";

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation items (moved outside render for cleaner code)
  const navItems = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  // External links
  const links = {
    resume:
      "https://pdfhost.io/v/9xPaNENqZh_Waqas_Haaris_Ali_-_CV",
    github: "https://github.com/haariswaqas",
    linkedin: "https://www.linkedin.com/in/haaris-ali-waqas-8ba2ab290/",
    email: "mailto:haarisali9@gmail.com",
  };

  // Efficient scroll listener
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScroll) > 20) {
        setIsScrolled(current > 50);
        lastScroll = current;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-[#CCD6F6] relative overflow-x-hidden">
      {/* ===== Navigation Bar ===== */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
          isScrolled
            ? "bg-[#0A192F]/95 shadow-lg shadow-[#020c1b]/60"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold text-[#64FFDA] hover:opacity-80 transition-opacity focus:outline-none"
            aria-label="Go to top"
          >
            &lt;Portfolio /&gt;
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.to)}
                className="relative text-sm font-medium hover:text-[#64FFDA] transition-colors group focus:outline-none"
              >
                {item.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-px bg-[#64FFDA] transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all duration-300">
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#64FFDA] focus:outline-none"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 origin-top ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } bg-[#0A192F]/98 backdrop-blur-sm border-t border-[#233554] shadow-lg`}
        >
          <div className="px-6 py-6 space-y-6 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.to)}
                className="text-lg font-medium text-[#CCD6F6] hover:text-[#64FFDA] transition-colors focus:outline-none"
              >
                {item.name}
              </button>
            ))}
            <a
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full bg-transparent border-2 border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 transition-all">
                Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="pt-0">{children}</main>

      {/* ===== Footer ===== */}
      <footer className="bg-[#0A192F] border-t border-[#233554] py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8892B0] text-sm text-center md:text-left">
            © {new Date().getFullYear()} Portfolio — Built with{" "}
            <span className="text-[#64FFDA]">React</span> &{" "}
            <span className="text-[#64FFDA]">Tailwind CSS</span>
          </p>

          <div className="flex items-center gap-6">
            {[
              { href: links.github, Icon: Github, label: "GitHub" },
              { href: links.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: links.email, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors p-2 rounded-full focus:ring-2 focus:ring-[#64FFDA]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
