import React from "react";
import Hero from "../Components/portfolio/Hero";
import About from "../Components/portfolio/About";
import Skills from "../Components/portfolio/Skills";
import Projects from "../Components/portfolio/Projects";
import Contact from "../Components/portfolio/Contact";


export default function Home() {
  return (
    <div className="bg-[#0A192F] text-white scroll-smooth">
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 md:px-16">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 md:px-16 bg-[#112240]">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-15 px-6 md:px-16">
        <Projects />
      </section>


      {/* Contact Section */}
      <section id="contact" className="py-0 px-6 md:px-16">
        <Contact />
      </section>
    </div>
  );
}
