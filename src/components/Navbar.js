import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow flex items-center justify-between px-6 py-3">
    <div className="flex items-center gap-3">
      <span className="text-black font-bold text-xl">Vasudha Maddi</span>
    </div>
    <div className="flex gap-6 font-semibold text-gray-700">
      <Link to="hero" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Home
      </Link>
      <Link to="skills" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Skills
      </Link>
      <Link to="projects" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Projects
      </Link>
      <Link to="certifications" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Certifications
      </Link>
      <Link to="experience" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Experience
      </Link>
      <Link to="education" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Education
      </Link>
      <Link to="resume" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Resume
      </Link>
      <Link to="contact" smooth={true} duration={500} containerId="scroll-container" offset={-20} className="hover:text-blue-600 cursor-pointer">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
