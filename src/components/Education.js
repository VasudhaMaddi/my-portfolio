import React from 'react';
import { Element } from 'react-scroll';

const educationData = [
  {
    school: "University of Central Florida",
    degree: "M.S. in Computer Science",
    duration: "2023 – 2025",
    gpa: "GPA: 3.9 / 4.0",
    logo: "/logos/ucf.png"
  },
  {
    school: "Osmania University",
    degree: "B.E. in Electronics and Communication Engineering",
    duration: "2017 – 2021",
    gpa: "CGPA: 7.6 / 10",
    logo: "/logos/osmania.png"
  }
];

const Education = () => (
  <Element name="education">
    <section
      id="education"
      className="min-h-screen snap-start flex flex-col items-center justify-center bg-blue-50 text-center px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-black-700 mb-6">Education</h2>
      <div className="flex flex-col items-center gap-8 max-w-2xl w-full mx-auto">
        {educationData.map((edu, i) => (
          <div key={i} className="border rounded-lg shadow-md p-4 w-full flex flex-col items-center">
            <img
              src={edu.logo}
              alt={edu.school}
              className="w-20 h-20 object-contain mb-2"
            />
            <h3 className="text-lg font-semibold text-blue-800">{edu.school}</h3>
            <p className="text-sm text-gray-700">{edu.degree}</p>
            <p className="text-xs italic text-gray-600">{edu.duration} | {edu.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  </Element>
);

export default Education;
