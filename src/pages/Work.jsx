import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import VideoReelSection from "../components/VideoReelSection";
import PricringSection from "../components/PricringSection";

const Work = () => {
  useEffect(() => {
    // Simple fade-in animation on scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    const fadeInOnScroll = () => {
      fadeElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.style.opacity = "1";
        }
      });
    };

    // Set initial opacity to 0
    fadeElements.forEach((el) => (el.style.opacity = "0"));

    // Run on load and scroll
    fadeInOnScroll();
    window.addEventListener("scroll", fadeInOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", fadeInOnScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#0f172a",
        color: "white",
      }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");

        .gradient-text {
          background: linear-gradient(45deg, #a78bfa, #ec4899, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .video-card {
          transition: all 0.3s ease;
        }

        .video-card:hover {
          transform: translateY(-5px);
        }

        .featured-video {
          box-shadow: 0 0 15px rgba(236, 72, 153, 0.5);
        }

        .hero-overlay {
          background: linear-gradient(
            135deg,
            rgba(15, 23, 42, 0.8),
            rgba(30, 41, 59, 0.9)
          );
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -8px;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #a78bfa, #ec4899, #f97316);
          border-radius: 3px;
        }

        .fade-in {
          animation: fadeIn 0.8s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div>
        <Navbar />
        {/* Hero Section */}
        <section
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: `url('https://img.freepik.com/free-photo/view-scary-dark-street-night_23-2150812540.jpg?ga=GA1.1.1116403944.1738924082&semt=ais_items_boosted&w=740')`,
          }}
        >
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              My <span className="text-gradient">Work</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-300">
              A collection of my best video editing and content creation
              projects.
            </p>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#recent-work" className="text-white text-3xl">
              <i className="fas fa-chevron-down"></i>
            </a>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 pb-20">
          {/* 1. Uploaded Reels Section */}
          <VideoReelSection />

          {/* 2. Featured Section – Naqaab */}
          <section className="mb-20 fade-in">
            <div className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 p-5 rounded-2xl featured-video ">
              <div className="bg-[#0f172a] rounded-xl p-4">
                <div className="text-center mb-16">
                  <h2 className="text-2xl md:text-3xl mb-4 text-white">
                    Featured{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      Film
                    </span>
                  </h2>
                  <div className="w-12 h-1  bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="aspect-w-16 aspect-h-9 w-full">
                      <iframe
                        className="w-full h-96 lg:h-[300px] rounded-xl"
                        src="https://www.youtube.com/embed/5eRPbwUYTK0?si=g121I5QIxvB4EgF_"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-3">
                      Naqaab – Short Film
                    </h3>
                    <div className="flex items-center mb-4">
                      <span className="px-3 py-1 bg-indigo-900/50 text-indigo-200 rounded-full text-sm font-medium">
                        DOP & Actor
                      </span>
                    </div>
                    <p className="text-gray-300 mb-6">
                      A gripping short film exploring duality, directed and
                      performed by Om Shende. This project reflects storytelling
                      through camera and character.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-pink-900/20 text-pink-200 rounded-full text-xs">
                        Cinematic
                      </span>
                      <span className="px-3 py-1 bg-purple-900/20 text-purple-200 rounded-full text-xs">
                        Storytelling
                      </span>
                      <span className="px-3 py-1 bg-orange-900/20 text-orange-200 rounded-full text-xs">
                        Directing
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Edited in:</p>
                        <p className="text-white">Premiere Pro</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Graded with:</p>
                        <p className="text-white">DaVinci Resolve</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Camera:</p>
                        <p className="text-white">Iphone 14 pro </p>
                      </div>
                      <div>
                        <p className="text-gray-400">Sound Design:</p>
                        <p className="text-white">Audition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. YouTube Section */}

          <section className="mb-20 fade-in">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl my-4 text-white ">
                  Youtube{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Uploads
                  </span>
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div className="video-card bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden p-1 hover:shadow-lg transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src="https://www.youtube.com/embed/3EP33qMoGCs?si=WmNnwgKO2dGFOHQn"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">My First Vlog</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Exploring my vlogging journey
                  </p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="video-card bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden p-1 hover:shadow-lg transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src="https://www.youtube.com/embed/LFP23WYJUZw?si=dTUXFcVqFAEdsWGZ"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Ganpati Aagman </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Welcoming Ganapati Bappa with love
                  </p>
                </div>
              </div>

              {/* Video 3 */}
              <div className="video-card bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden p-1 hover:shadow-lg transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    className="w-full h-64 rounded-lg"
                    src="https://www.youtube.com/embed/q7vTPit8_YQ?si=AlB5eo_bLsyrxYqN"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">BTS of Nakaab</h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Making of Naqaab short film
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <a
                href="http://www.youtube.com/@omshende_02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-white font-semibold hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <i className="fab fa-youtube mr-2"></i> View More on YouTube
              </a>
            </div>
          </section>
          <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        {/* Pricing Section */}
        <PricringSection />

        </main>


        {/* 4. Footer */}
      </div>
    </div>
  );
};

export default Work;
