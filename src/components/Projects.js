import React from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

// Updated project data with full details
const projectData = [
  {
    name: "Spam Email Detection",
    description:
      "A robust spam detection system using NLP techniques like TF-IDF, lemmatization, and ensemble learning. Achieved 98% accuracy on over 5,000 emails.",
    skills: [
      "Python", "Pandas", "NumPy", "scikit-learn", "SVM", "KNN", "Naïve Bayes",
      "Decision Tree", "Logistic Regression", "Random Forest", "AdaBoost",
      "Gradient Boosting", "XGBoost", "GridSearchCV", "TF-IDF", "Lemmatization",
      "Stopword Removal", "Tokenization", "Text Cleaning", "Confusion Matrix", "Voting Classifier"
    ],
    github: "https://github.com/VasudhaMaddi/Spam-Email-Detection-NLP"
  },
  {
    name: "Paraphrase Identification",
    description:
      "A transformer-based model using state-of-the-art architectures to detect semantic equivalence between sentences, improving text similarity measurement accuracy.",
    skills: [
      "Python", "TensorFlow", "Keras", "BERT", "DistilBERT", "ELECTRA", "MobileBERT",
      "Transformer Fine-tuning", "Tokenization", "Attention Masks", "Text Normalization"
    ],
    github: "https://github.com/VasudhaMaddi/Paraphrase-Identification"
  },
  {
    name: "Pension Management System",
    description:
      "A microservices-based system built using Java and Spring Boot that provides a secure and responsive interface for managing pension records.",
    skills: [
      "Java", "Spring Boot", "Spring MVC", "Spring Core", "Spring Security", "JWT",
      "REST API", "JSP", "HTML", "CSS", "Bootstrap", "Swagger UI", "H2 Database"
    ],
    github: "https://github.com/VasudhaMaddi/Pension-Management-System-Project"
  },
  {
    name: "Real-Time Facial Emotion Recognition",
    description:
      "A real-time emotion recognition system leveraging CNN architectures and advanced computer vision techniques to analyze facial expressions.",
    skills: [
      "Python", "TensorFlow", "Keras", "CNN", "ResEmoteNet", "Residual Connections",
      "SE Blocks", "OpenCV", "FER2013", "Data Augmentation", "Face Detection",
      "Normalization", "Hyperparameter Tuning", "Live Video Processing"
    ],
    github: "https://github.com/VasudhaMaddi/Real-Time-Facial-Emotion-Recognition"
  },
  {
    name: "Topic Modeling",
    description:
      "An NLP project that applies LDA to extract themes from text, featuring data pre-processing and visualization.",
    skills: [
      "Python", "NLP", "Topic Modeling", "Data Preprocessing", "Gensim", "NLTK",
      "spaCy", "Pandas", "NumPy", "Matplotlib", "pyLDAvis", "EDA", "Jupyter Notebooks"
    ],
    github: "https://github.com/VasudhaMaddi/Topic-Modeling-NLP"
  }
];

// Aggregate all unique skills for filtering and sort them.
const allTags = [
  "All",
  ...Array.from(new Set(projectData.flatMap(p => p.skills))).sort()
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = React.useState("All");
  const filtered = selectedTag === "All"
    ? projectData
    : projectData.filter(p => p.skills.includes(selectedTag));

  return (
    <Element name="projects">
      <section className="min-h-screen snap-start flex flex-col items-center justify-start bg-gradient-to-r from-pink-50 to-purple-50 text-center px-4 py-16">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>

        {/* Tag filtering buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1 rounded-full border ${
                selectedTag === tag
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-purple-700 border-purple-300'
              } hover:bg-purple-700 hover:text-white text-sm transition`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Horizontal scroll container with hidden scrollbar */}
        <motion.div
          layout
          className="hide-scrollbar flex overflow-x-auto gap-6 w-full pb-4 justify-start"
        >
          <AnimatePresence>
            {filtered.map(proj => (
              <motion.a
                key={proj.name}
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-5 rounded shadow text-left flex-shrink-0 w-80 h-[380px] flex flex-col cursor-pointer relative overflow-hidden"
              >
                <div className="p-5 overflow-y-auto">
                  <h3 className="text-xl font-bold text-purple-700 mb-1">{proj.name}</h3>
                  <p className="text-sm text-gray-700 mb-2 break-words whitespace-normal">
                    {proj.description}
                  </p>
                  <p className="text-xs text-gray-600 mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {proj.skills.map((skill, j) => (
                      <span key={j} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {/* GitHub overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="text-white text-lg flex items-center gap-2">
                    <FaGithub />
                    <span>View on GitHub</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </Element>
  );
};

export default Projects;
