import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css"; // Contains .text-gradient, .hero-overlay, etc.
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  // Simulated loader
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      });
    });
  }, []);

  // Active section highlighting
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const top = section.offsetTop - 100;
        const height = section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-[#0f172a] text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth font-[Poppins] bg-[#0f172a] text-slate-200">
      <div id="home">
        {/* Navbar */}
        <nav className="fixed w-full z-50 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <a href="#home" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gradient">Om Shende</span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["home", "about", "portfolio", "skills", "contact"].map((link) => (
                    <a
                      key={link}
                      href={`#${link}`}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition capitalize ${
                        activeSection === link
                          ? "text-indigo-300 font-semibold"
                          : "text-white hover:text-indigo-300"
                      }`}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["home", "about", "portfolio", "skills", "contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 capitalize"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=2059&q=80')`,
          }}
        >
          <div className="hero-overlay absolute inset-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Om Shende</span>
            </h1>
            <h2 className="text-xl md:text-3xl font-medium mb-8 text-indigo-300">
              Video Editor & Content Creator
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
              I bring stories to life through cinematic edits and humor. With 4+ years of experience, I specialize in creating engaging content that captivates audiences.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://www.youtube.com/@omshende_02"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition flex items-center justify-center gap-2 pulse-effect"
              >
                <i className="fab fa-youtube"></i> Watch My Reels
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-semibold rounded-full transition flex items-center justify-center gap-2"
              >
                <i className="fas fa-briefcase"></i> Hire Me
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white text-3xl">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </section>

        {/* Animated Sections */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <About />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Portfolio />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Skills />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Contact />
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
