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
    <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
