import React from "react";
import pp from "../assets/premiere-pro.png";

const skills = [
  {
    icon: pp,
    label: "Adobe Premiere Pro",
    colorClass: "text-indigo-400",
    barClass: "bg-indigo-500",
    width: "90%",
    isImage: true
  },
  {
    icon: "fas fa-cut",
    label: "CapCut PC",
    colorClass: "text-amber-400",
    barClass: "bg-amber-500",
    width: "90%",
  },
  {
    icon: "fas fa-film",
    label: "Cinematic Editing",
    colorClass: "text-pink-400",
    barClass: "bg-pink-500",
    width: "92%",
  },
  {
    icon: "fas fa-book-open",
    label: "Storytelling",
    colorClass: "text-emerald-400",
    barClass: "bg-emerald-500",
    width: "88%",
  },
  {
    icon: "fas fa-camera",
    label: "Videography",
    colorClass: "text-blue-400",
    barClass: "bg-blue-500",
    width: "85%",
  },
  {
    icon: "fas fa-edit",
    label: "Content Writing",
    colorClass: "text-purple-400",
    barClass: "bg-purple-500",
    width: "87%",
  },
  {
    icon: "fab fa-youtube",
    label: "YouTube Content",
    colorClass: "text-red-400",
    barClass: "bg-red-500",
    width: "90%",
  },
  {
    icon: "fas fa-mobile-alt",
    label: "Social Media Content",
    colorClass: "text-green-400",
    barClass: "bg-green-500",
    width: "94%",
  },
  {
    icon: "fas fa-laugh-squint",
    label: "Comedy Content",
    colorClass: "text-cyan-400",
    barClass: "bg-cyan-500",
    width: "86%",
  },
  {
    icon: "fas fa-lightbulb",
    label: "Creative Direction",
    colorClass: "text-yellow-400",
    barClass: "bg-yellow-500",
    width: "91%",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            The technical skills and expertise I bring to every project I work on.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-lg shadow-lg text-center transition-transform hover:scale-105"
            >
              <div className={`text-4xl ${skill.colorClass} mb-4`}>
                {skill.isImage ? (
                  <img src={skill.icon} alt={skill.label} className="w-16 h-16 mx-auto object-contain brightness-199" />
                ) : (
                  <i className={skill.icon}></i>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{skill.label}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className={`${skill.barClass} h-2.5 rounded-full`}
                  style={{ width: skill.width }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
