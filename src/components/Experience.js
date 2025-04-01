
import React from 'react';

const experienceData = [
  {
    title: "Software Engineer",
    company: "US Bank",
    duration: "May 2024 – Mar 2025",
    points: [
      "Built scalable full-stack applications using Java, Spring Boot, React.js, and Angular.",
      "Implemented secure authentication using Spring Security with OAuth2 and JWT.",
      "Deployed and managed cloud infrastructure using AWS, Docker, and Kubernetes.",
      "Designed REST APIs and integrated them with frontend components.",
      "Collaborated with cross-functional teams using Agile methodology."
    ]
  },
  {
    title: "Software Engineer",
    company: "Cognizant (Client: AbbVie)",
    duration: "Aug 2021 – Jul 2023",
    points: [
      "Developed microservices using Spring Boot and MongoDB.",
      "Created a physician portal frontend using React.js and Bootstrap.",
      "Integrated JWT-based authentication using Spring Security.",
      "Automated deployments using Jenkins and Docker in a CI/CD pipeline.",
      "Worked closely with the client AbbVie to gather requirements and deliver features iteratively."
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Cognizant (Client: Flipkart)",
    duration: "Jan 2021 – Aug 2021",
    points: [
      "Built RESTful APIs for Flipkart's product catalog using Spring Boot and MySQL.",
      "Optimized database queries and schema for performance improvements.",
      "Collaborated with frontend teams to integrate services with Angular-based UIs.",
      "Wrote unit tests using JUnit and Mockito to ensure code quality."
    ]
  }
];

const Experience = () => (
  <section id="experience" className="min-h-screen snap-start flex flex-col justify-center items-center bg-white text-center px-4">
    <h2 className="text-4xl font-bold mb-6">Experience</h2>
    <div className="border-l-4 border-blue-400 pl-6 space-y-8 max-w-3xl text-left">
      {experienceData.map((exp, i) => (
        <div key={i}>
          <h3 className="text-lg font-semibold text-blue-700">{exp.title} – {exp.company}</h3>
          <p className="text-sm italic text-gray-600">{exp.duration}</p>
          <ul className="list-disc text-sm text-gray-700 ml-5 mt-1">
            {exp.points.map((point, j) => <li key={j}>{point}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;