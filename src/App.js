import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Navbar is now outside the scroll container so it remains fixed */}
      <Navbar />
      <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div className="snap-start">
          <Hero />
        </div>
        <div className="snap-start">
          <Skills />
        </div>
        <div className="snap-start">
          <Projects />
        </div>
        <div className="snap-start">
          <Certifications />
        </div>
        <div className="snap-start">
          <Experience />
        </div>
        <div className="snap-start">
          <Education />
        </div>
        <div className="snap-start">
          <Resume />
        </div>
        <div className="snap-start">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
