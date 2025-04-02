import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillsGrouped = {
  "Programming Languages": ["Java", "Python", "C", "JavaScript", "TypeScript"],
  "Frontend": ["Angular", "HTML", "CSS", "Bootstrap", "React.js", "Node.js"],
  "Backend": ["Spring Framework", "Spring Boot", "Spring Security", "Spring MVC", "Servlets", "JSP", "Restful APIs", "Microservices"],
  "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Spring Data JPA", "JDBC", "Hibernate"],
  "Security": ["JWT", "OAuth2"],
  "DevOps": ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins"],
  "Testing & Build": ["JUnit", "Mockito", "Maven", "Gradle"],
  "Tools": ["Git", "Github", "VS Code", "Eclipse", "Postman", "Gitlab", "Jira", "Confluence"],
  "Machine Learning & AI": ["TensorFlow", "OpenCV", "scikit-learn", "BERT", "NLP", "Machine Learning"]
};

const Skills = () => {
  const categories = Object.keys(skillsGrouped);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-white px-4 py-16 text-center"
      style={{ scrollMarginTop: '80px' }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Skills</h2>
      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-3 rounded-full shadow transition-colors duration-200 font-semibold ${
              activeTab === category 
                ? "bg-blue-600 text-white" 
                : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Active Tab Content */}
      <AnimatePresence>
        {activeTab && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-black-700 mb-4">
              {activeTab} Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skillsGrouped[activeTab].map((skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full shadow-md text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
