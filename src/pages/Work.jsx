// src/pages/Work.jsx
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Assuming you’ve moved your Home navbar into a separate component


const Work = () => {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card);
    });
  }, []);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const projects = [
    {
      title: "Naqaab (Short Film)",
      category: "short-films",
      tags: ["DOP", "Actor"],
      tools: [
        { icon: "fas fa-film", label: "Adobe Premiere Pro" },
        { icon: "fas fa-camera", label: "Sony A7III" },
      ],
      description:
        "A psychological thriller short film exploring themes of identity and perception.",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1159&q=80",
    },
    {
      title: "Instagram Reels",
      category: "reels",
      tags: ["Content Creator", "Editor"],
      tools: [
        { icon: "fas fa-film", label: "CapCut PC" },
        { icon: "fas fa-mobile-alt", label: "iPhone 14 Pro" },
      ],
      description:
        "Comedy sketches and trending format videos created for Instagram.",
      img: "https://images.unsplash.com/photo-1611162616475-46b634cb4908?auto=format&fit=crop&w=1074&q=80",
    },
    // Add more project objects as needed (based on the HTML provided)
  ];

  return (
    <div className="scroll-smooth font-[Poppins] bg-[#0f172a] text-slate-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-32 pb-20">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my best video editing and content creation projects.
          </p>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 bg-[#0f172a]/80 backdrop-blur-sm py-4 z-10">
          {["all", "short-films", "reels", "vlogs", "documentaries", "freelance"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`filter-btn px-6 py-2 rounded-full border border-indigo-400/40 hover:bg-indigo-400/10 transition capitalize ${
                filter === cat ? "bg-indigo-400 text-[#0f172a] font-semibold" : ""
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((proj) => filter === "all" || proj.category === filter)
            .map((proj, idx) => (
              <div key={idx} className="project-card animate-fade-in">
                <div className="video-thumbnail relative rounded-xl overflow-hidden h-64">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <i className="fas fa-play-circle play-icon"></i>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-indigo-400">{proj.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    {proj.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    {proj.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="text-xs bg-slate-800/50 px-3 py-1 rounded-full flex items-center gap-1"
                      >
                        <i className={`${tool.icon} text-indigo-400`}></i> {tool.label}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 mt-3">{proj.description}</p>
                  <button className="mt-4 text-indigo-400 hover:text-white transition flex items-center gap-2">
                    View Project <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Work;
