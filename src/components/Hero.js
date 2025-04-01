import React from 'react';
import { Element } from 'react-scroll';

const Hero = () => (
  // Wrap the section with Element and give it the name "hero" (matches Navbar Link)
  <Element name="hero">
    <section className="h-screen snap-start flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-purple-100 px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Vasudha Maddi</h1>
      <p className="text-lg max-w-xl">
        A passionate Full Stack Developer with expertise in building scalable, cloud-native applications using Java, Spring Boot, React, and AWS.
      </p>
    </section>
  </Element>
);

export default Hero;
