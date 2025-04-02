import React from 'react';
import { Element } from 'react-scroll';

const Resume = () => (
  <Element name="resume">
    <section
      id="resume"
      className="min-h-screen snap-start flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 px-4 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">📄 Resume</h2>
      
      {/* Resume Card with increased padding and reduced content size */}
      <div 
        className="w-full max-w-xl bg-white shadow-md p-12 text-center mb-12 mx-auto"
        style={{ borderRadius: '20px' }}
      >
        <p className="text-2xl font-semibold mb-2">Vasudha Maddi</p>
        
        <p className="text-base text-gray-700 mb-4">
          Over 3.5+ years as a Java Full Stack Developer specializing in scalable web applications and microservices. Proficient in RESTful APIs, secure authentication (OAuth2, JWT), and modern front-end frameworks like React.js and Angular.
        </p>
        <p className="text-base text-gray-700">
          Technical Skills: Java, Python, C, JavaScript, TypeScript, HTML5, CSS3, React.js, Angular, Spring Boot, RESTful APIs, Microservices, MySQL, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, JUnit, Mockito, Git, etc.
        </p>
      </div>
      
      {/* Download Button */}
      <div className="mt-12">
        <a
          href="/vasudha_resume.pdf"
          download
          className="inline-flex items-center justify-center py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition text-lg"
          style={{
            paddingLeft: '4rem',
            paddingRight: '4rem',
            background: 'linear-gradient(to right, #48a9fe, #006df0)',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
          }}
        >
          Download Resume
        </a>
      </div>
    </section>
  </Element>
);

export default Resume;
