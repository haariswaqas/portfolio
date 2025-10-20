import React, { useState, useEffect, useRef } from "react";
import { Send, Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { motion } from "framer-motion";

export default function Contact() {
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Message sent! I'll get back to you soon.");
    }, 1000);
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
            <p className="text-[#8892B0] text-lg mt-4 max-w-2xl mx-auto">
              I'm currently open to new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-[#112240] border-[#233554] p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#CCD6F6] mb-2 font-medium"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your name"
                      required
                      className="bg-[#0A192F] border-[#233554] text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#CCD6F6] mb-2 font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                      required
                      className="bg-[#0A192F] border-[#233554] text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#CCD6F6] mb-2 font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell me about your project or just say hello..."
                      required
                      rows={6}
                      className="bg-[#0A192F] border-[#233554] text-[#CCD6F6] placeholder:text-[#8892B0] focus:border-[#64FFDA] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#64FFDA] text-[#0A192F] hover:bg-[#64FFDA]/90 font-semibold py-6 text-base gap-2"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Direct Contact */}
              <Card className="bg-[#112240] border-[#233554] p-6 hover:border-[#64FFDA]/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#64FFDA]/10 rounded-lg">
                    <Mail className="text-[#64FFDA]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[#CCD6F6] font-semibold text-lg mb-2">
                      Email Me Directly
                    </h3>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-[#64FFDA] hover:underline"
                    >
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="bg-[#112240] border-[#233554] p-6">
                <h3 className="text-[#CCD6F6] font-semibold text-lg mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#8892B0] hover:text-[#64FFDA] transition-colors group"
                  >
                    <Github size={20} />
                    <span className="group-hover:translate-x-1 transition-transform">
                      GitHub Profile
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#8892B0] hover:text-[#64FFDA] transition-colors group"
                  >
                    <Linkedin size={20} />
                    <span className="group-hover:translate-x-1 transition-transform">
                      LinkedIn Profile
                    </span>
                  </a>
                </div>
              </Card>

              {/* Collaboration CTA */}
              <Card className="bg-gradient-to-br from-[#112240] to-[#0A192F] border-[#64FFDA]/30 p-6 text-center">
                <MessageSquare
                  className="text-[#64FFDA] mx-auto mb-3"
                  size={32}
                />
                <h3 className="text-[#CCD6F6] font-semibold text-lg mb-2">
                  Let's Collaborate
                </h3>
                <p className="text-[#8892B0] text-sm mb-4">
                  Open to freelance projects, full-time opportunities, and
                  interesting collaborations
                </p>
                <Button
                  variant="outline"
                  className="border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10"
                >
                  Download Resume
                </Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}