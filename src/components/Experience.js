import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import experienceData from '../data/experienceData';


const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [selectedClient, setSelectedClient] = useState(0);

  const toggleItem = (index, hasClients) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
      if (hasClients) {
        setSelectedClient(0);
      }
    }
  };

  return (
    <Element name="experience">
      <section
        id="experience"
        className="min-h-screen snap-start flex flex-col items-center justify-center bg-white text-center px-4 py-16 overflow-y-auto"
      >
        <h2 className="text-4xl font-bold text-black mb-8">Experience</h2>
        
        {/* Timeline container */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Vertical line on the left */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-300"></div>
          <div className="space-y-8 relative">
            {experienceData.map((exp, i) => (
              <div key={i} className="flex" style={{ marginLeft: '3rem' }}>
                {/* Timeline circle with company or cognizant logo */}
                <div className="relative">
                  <div className="absolute -left-20 top-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    {exp.clients ? (
                      <img
                        src="/logos/cognizant.png"
                        alt="Cognizant"
                        className="w-11 h-11 object-contain"
                      />
                    ) : (
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                      />
                    )}
                  </div>
                </div>
                
                {/* Experience card */}
                <div className="flex-1 pl-8">
                  {/* Basic info box */}
                  <div
                    onClick={() => toggleItem(i, !!exp.clients)}
                    className="cursor-pointer p-4 border rounded-lg shadow hover:bg-blue-50 transition"
                  >
                    <h3 className="text-lg font-semibold text-blue-700">
                      {exp.title} – {exp.company}
                    </h3>
                    <p className="text-sm italic text-gray-600">{exp.duration}</p>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 overflow-hidden text-left pl-4"
                      >
                        {exp.clients ? (
                          <>
                            {/* Tabs for each client */}
                            <div className="flex gap-4 mb-2 mt-2">
                              {exp.clients.map((client, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => setSelectedClient(idx)}
                                  className={`px-3 py-1 border rounded text-sm ${
                                    selectedClient === idx
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-gray-200 text-gray-800'
                                  }`}
                                >
                                  Client: {client.name}
                                </button>
                              ))}
                            </div>
                            
                            {/* Selected client details */}
                            <div className="p-3 border rounded-lg bg-gray-50">
                              <div className="flex items-center gap-4 mb-2">
                                <img
                                  src={exp.clients[selectedClient].logo}
                                  alt={exp.clients[selectedClient].name}
                                  className="w-12 h-12 object-contain"
                                />
                                <div>
                                  <h4 className="text-blue-600 font-semibold">
                                    {exp.clients[selectedClient].title} at {exp.clients[selectedClient].name}
                                  </h4>
                                  <p className="text-xs italic text-gray-600">
                                    {exp.clients[selectedClient].duration}
                                  </p>
                                </div>
                              </div>
                              <ul className="list-disc text-sm text-gray-700 ml-5">
                                {exp.clients[selectedClient].points.map((point, m) => (
                                  <li key={m} className="mb-1">{point}</li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <div className="p-3 border rounded-lg bg-gray-50 mt-2">
                            <ul className="list-disc text-sm text-gray-700 ml-5">
                              {exp.points.map((point, j) => (
                                <li key={j} className="mb-1">{point}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Experience;
