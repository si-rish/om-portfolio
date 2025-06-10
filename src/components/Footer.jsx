import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start">
              <span className="text-xl font-bold text-gradient">Om Shende</span>
            </Link>
            <p className="mt-2 text-sm text-gray-400">Video Editor & Content Creator</p>
          </div>

          {/* Social icons */}
          <div className="flex space-x-6 justify-center md:justify-end">
            <a
              href="https://instagram.com/omshende_02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://youtube.com/omeshende"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
            <a
              href="mailto:shendeom02@gmail.com"
              className="text-gray-400 hover:text-indigo-400 transition"
            >
              <i className="fas fa-envelope text-xl"></i>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025-26 Om Shende. All rights reserved.<br/> Website By <span>@Shirish </span>
            <a href="https://github.com/si-rish" target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-gray-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="tel:+9173788896387" className="ml-2 hover:text-gray-300">
              <i className="fas fa-phone"></i>
            </a>
          </p>

          <div className="mt-4 md:mt-0">
            <Link
              to="/"
              className="text-sm text-gray-400 hover:text-indigo-400 transition"
            >
              <i className="fas fa-arrow-up mr-1"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
