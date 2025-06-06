import React from "react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            Here's a showcase of my best work and projects I've contributed to.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Portfolio Item 1 */}
          <div className="project-card bg-slate-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              <img
                src="https://images.unsplash.com/photo-1519638399535-1b036603ac77?auto=format&fit=crop&w=1331&q=80"
                alt="Short Films & Videos"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <a href="" className="text-white text-2xl bg-indigo-600 rounded-full p-4">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">300+ Short Videos & Blogs</h3>
            <p className="text-gray-300 mb-4">
              Edited engaging short-form content for various social media platforms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-indigo-900 text-indigo-200">Premiere Pro</span>
              <span className="px-3 py-1 text-xs rounded-full bg-pink-900 text-pink-200">Storytelling</span>
            </div>
          </div>

          {/* Portfolio Item 2 */}
          <div className="project-card bg-slate-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              <img
                src="https://images.unsplash.com/photo-1592179902482-9f4941993e7c?auto=format&fit=crop&w=1772&q=80"
                alt="Content Creation"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <a href="" className="text-white text-2xl bg-indigo-600 rounded-full p-4">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">500+ Video Content</h3>
            <p className="text-gray-300 mb-4">
              Created comedy reels, cinematic content, and talking-head videos for diverse audiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-indigo-900 text-indigo-200">CapCut PC</span>
              <span className="px-3 py-1 text-xs rounded-full bg-amber-900 text-amber-200">Cinematic Edits</span>
            </div>
          </div>

          {/* Portfolio Item 3 */}
          <div className="project-card bg-slate-800 p-6 rounded-lg shadow-lg transition-transform hover:scale-[1.02]">
            <div className="relative overflow-hidden rounded-lg mb-4 h-48">
              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1770&q=80"
                alt="Short Film Naqaab"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <a href="" className="text-white text-2xl bg-indigo-600 rounded-full p-4">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Short Film - Naqaab</h3>
            <p className="text-gray-300 mb-4">
              Served as both Actor and Director of Photography for this dramatic short film.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs rounded-full bg-gray-900 text-gray-200">Acting</span>
              <span className="px-3 py-1 text-xs rounded-full bg-rose-900 text-rose-200">Cinematography</span>
            </div>
          </div>
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <a
            href=""
            className="inline-flex items-center px-6 py-3 border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-medium rounded-full transition"
          >
            <i className="fab fa-youtube mr-2"></i> View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
