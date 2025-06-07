import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div>
            <img
              src="/assets/om.jpg"
              alt="Om Shende"
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-indigo-300">Who I Am</h3>
            <p className="mb-6 text-gray-300">
              I'm Om Shende, a passionate video editor and content creator with over 4 years of
              experience in the digital space. I specialize in transforming raw footage into
              compelling stories that resonate with audiences.
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-indigo-200">Education</h4>
                <p className="text-gray-300">
                  <i className="fas fa-graduation-cap mr-2 text-indigo-400"></i>
                  Bachelor of Computer Application from G.H. Raisoni University (2021–2024)
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-indigo-200">Certifications</h4>
                <p className="text-gray-300">
                  <i className="fas fa-certificate mr-2 text-indigo-400"></i>
                  Adobe After Effects CC - September 2023
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-2 text-indigo-200">Experience</h4>
                <p className="text-gray-300">
                  <i className="fas fa-briefcase mr-2 text-indigo-400"></i>
                  4+ years working with influencers, brands, and production houses to create
                  engaging video content.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-full transition"
              >
                Get In Touch <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
