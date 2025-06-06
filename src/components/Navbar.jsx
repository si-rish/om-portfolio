import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-gray-900 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <a href="/" className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gradient">Om Shende</span>
          </a>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {["Home", "About", "Portfolio", "Skills", "Contact"].map((link) => (
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
              <div className="h-3 w-px bg-gray-600 mx-2"></div>
              <a
                href="/work"
                className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:from-indigo-600 hover:to-pink-600 transition-all duration-300"
              >
                <i className="fas fa-film mr-2"></i>Work
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <a
              href="/work"
              className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-indigo-500 to-pink-500 text-white hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 mr-4"
            >
              <i className="fas fa-film mr-2"></i>Work
            </a>
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
  );
};

export default Navbar; 