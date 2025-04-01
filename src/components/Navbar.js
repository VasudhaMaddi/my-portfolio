import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => (
  <nav className="sticky top-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
    <div className="flex items-center gap-4">
      <h1 className="font-bold text-lg text-blue-700">Vasudha Maddi</h1>
    </div>
    <div className="flex gap-6 font-semibold">
      <Link to="hero" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Home
      </Link>
      <Link to="skills" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Skills
      </Link>
      <Link to="projects" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Projects
      </Link>
      <Link to="certifications" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Certifications
      </Link>
      <Link to="experience" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Experience
      </Link>
      <Link to="education" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Education
      </Link>
      <Link to="resume" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Resume
      </Link>
      <Link to="contact" containerId="scroll-container" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">
        Contact
      </Link>
    </div>
  </nav>
);

export default Navbar;
