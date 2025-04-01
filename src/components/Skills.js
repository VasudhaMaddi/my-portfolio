
import React from 'react';

const skills = [
  "Java", "Spring Boot", "Spring Security", "React.js", "Angular",
  "JavaScript", "TypeScript", "MySQL", "PostgreSQL", "MongoDB",
  "AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "JUnit", "Mockito",
  "Python", "TensorFlow", "OpenCV", "scikit-learn", "BERT", "NLP", "Machine Learning"
];

const Skills = () => (
  <section id="skills" className="min-h-screen snap-start flex flex-col justify-center items-center bg-white text-center px-4 py-16">
    <h2 className="text-4xl font-bold mb-6">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
      {skills.map((skill, i) => (
        <span key={i} className="bg-blue-100 text-blue-900 px-4 py-2 rounded-full shadow text-sm font-medium">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
