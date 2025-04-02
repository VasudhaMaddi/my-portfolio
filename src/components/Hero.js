import React, { useState } from 'react';
import { Element } from 'react-scroll';
import TypingEffect from './TypingEffect'; // Ensure the path is correct

const Hero = () => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <Element name="hero">
      <section className="h-screen snap-start flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
        <TypingEffect 
          text="Hi, I'm Vasudha Maddi" 
          speed={100} 
          className="text-5xl font-bold mb-4 text-blue-800" 
          onComplete={() => {
            // Wait 1 second before starting the second sentence
            setTimeout(() => setShowSecond(true), 1000);
          }}
        />
        {showSecond && (
          <TypingEffect 
            text="A passionate Full Stack Developer with expertise in building scalable, cloud-native applications using Java, Spring Boot, React, and AWS." 
            speed={50} 
            className="text-lg max-w-xl"
          />
        )}
      </section>
    </Element>
  );
};

export default Hero;
