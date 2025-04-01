
import React from 'react';

const educationData = [
  {
    school: "University of Central Florida",
    degree: "M.S. in Computer Science",
    duration: "2023 – 2025",
    gpa: "GPA: 3.9 / 4.0"
  },
  {
    school: "Osmania University",
    degree: "B.E. in Electronics and Communication Engineering",
    duration: "2017 – 2021",
    gpa: "GPA: 7.6 / 10"
  }
];

const Education = () => (
  <section id="education" className="min-h-screen snap-start flex flex-col justify-center items-center bg-blue-50 text-center px-4">
    <h2 className="text-4xl font-bold mb-6">Education</h2>
    <div className="border-l-4 border-blue-500 pl-6 space-y-8 max-w-2xl text-left">
      {educationData.map((edu, i) => (
        <div key={i}>
          <h3 className="text-lg font-semibold text-blue-800">{edu.school}</h3>
          <p className="text-sm text-gray-700">{edu.degree}</p>
          <p className="text-xs italic text-gray-600">{edu.duration} | {edu.gpa}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;