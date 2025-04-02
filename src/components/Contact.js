import React from 'react';
import { Element } from 'react-scroll';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <Element name="contact">
    <section
      id="contact"
      className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4 py-16 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-700 mb-6">Contact Me</h2>
      {/* White container with reduced padding and centered content */}
      <div 
        className="max-w-xl w-full mx-auto text-center"
        style={{
          backgroundColor: '#ffffff',
          padding: '2rem',
          borderRadius: '1rem',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <p className="text-lg text-gray-700 mb-6">
          I'm always excited to discuss new projects and opportunities. Feel free to reach out!
        </p>
        <a
          href="mailto:vasudhamaddi114@gmail.com"
          className="flex items-center justify-center gap-3 text-blue-600 hover:underline text-xl mb-6"
        >
          <FaEnvelope size={24} /> vasudhamaddi114@gmail.com
        </a>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/vasudha-maddi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://github.com/VasudhaMaddi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-900"
          >
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </section>
  </Element>
);

export default Contact;