import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css"; // Contains .text-gradient, .hero-overlay, etc.
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home = () => {
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
      });
    });
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
        <Navbar />
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
              <Link
                to="/work"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition flex items-center justify-center gap-2 pulse-effect"
              >
                <i className="fab fa-youtube"></i> Watch Content
              </Link>
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-semibold rounded-full transition flex items-center justify-center gap-2"
              >
                <i className="fas fa-file"></i> View Resume
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