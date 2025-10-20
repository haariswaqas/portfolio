import React from "react";
import Hero from "../Components/portfolio/Hero";
import About from "../Components/portfolio/About";
import Skills from "../Components/portfolio/Skills";
import Projects from "../Components/portfolio/Projects";
import Contact from "../Components/portfolio/Contact";

export default function Home() {
  return (
    <div className="bg-[#0A192F]">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}