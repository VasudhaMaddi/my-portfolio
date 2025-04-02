import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const certificationData = [
  {
    title: "AWS Certified Solutions Architect - Associate",
    subtitle: "Certificate",
    details: "Valid until January 16, 2028",
    link: "/certifications/AWS Certified Solutions Architect - Associate certificate.pdf",
    logo: "/logos/aws.png"
  },
  {
    title: "Java Algorithms",
    subtitle: "Certificate of Completion",
    details: "Completed on Mar 31, 2023 • 2h 42min • LinkedIn Learning",
    link: "/certifications/certificates_merged-pages-1.pdf",
    logo: "/logos/linkedin.png"
  },
  {
    title: "Java: Data Structures",
    subtitle: "Certificate of Completion",
    details: "Completed on Mar 31, 2023 • 47min • LinkedIn Learning",
    link: "/certifications/certificates_merged-pages-2.pdf",
    logo: "/logos/linkedin.png"
  },
  {
    title: "Learning Java 11",
    subtitle: "Certificate of Completion",
    details: "Completed on Mar 31, 2023 • 2h 39min • LinkedIn Learning",
    link: "/certifications/certificates_merged-pages-3.pdf",
    logo: "/logos/linkedin.png"
  },
  {
    title: "AI For Everyone",
    subtitle: "Certificate of Completion",
    details: "Completed on 08/29/2020 • Coursera",
    link: "/certifications/certificates_merged-pages-4.pdf",
    logo: "/logos/coursera.png"
  },
  {
    title: "Python Basics",
    subtitle: "Certificate of Completion",
    details: "Completed on 07/13/2020 • Coursera",
    link: "/certifications/certificates_merged-pages-5.pdf",
    logo: "/logos/coursera.png"
  },
  {
    title: "Python Functions, Files, and Dictionaries",
    subtitle: "Certificate of Completion",
    details: "Completed on 07/25/2020 • Coursera",
    link: "/certifications/certificates_merged-pages-6.pdf",
    logo: "/logos/coursera.png"
  },
  {
    title: "Cisco Networking Academy - Python Programming",
    subtitle: "Statement of Achievement",
    details: "Completed on 4 Dec 2020",
    link: "/certifications/certificates_merged-pages-7.pdf",
    logo: "/logos/cisco.png"
  },
  {
    title: "Cognizant Certification - Angular 11 Assessment",
    subtitle: "Certificate of Completion",
    details: "Completed on 07/03/2022",
    link: "/certifications/Diploma_1a312c84-5951-4a7c-a6e1-3a00f97b97a3.pdf",
    logo: "/logos/cognizant.png"
  },
  {
    title: "Cognizant Certification - Agile Software Development",
    subtitle: "Certificate of Completion",
    details: "Completed on 06/25/2021",
    link: "/certifications/Diploma_660ba7ce-e05d-49b7-94d2-03022a9f093f.pdf",
    logo: "/logos/cognizant.png"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => setSelectedCert(cert);
  const closeModal = () => setSelectedCert(null);

  return (
    <Element name="certifications">
      <section
        id="certifications"
        className="min-h-screen snap-start flex flex-col items-center justify-center bg-gray-100 text-center px-4 py-16"
      >
        <h2 className="text-4xl font-bold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-6xl pb-4 justify-items-center">
          {certificationData.map((cert, index) => (
            <div
              key={index}
              onClick={() => openModal(cert)}
              className="group bg-white rounded shadow p-4 flex flex-col items-center cursor-pointer hover:shadow-xl transition relative"
            >
              {/* Increased the logo size */}
              <img
                src={cert.logo}
                alt={cert.title}
                className="w-16 h-16 mb-2 object-contain"
              />
              <h3 className="text-lg font-bold text-blue-700 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{cert.subtitle}</p>
              <p className="text-xs text-gray-500 mb-2">{cert.details}</p>
              <div className="flex items-center gap-1 text-blue-500 group-hover:text-blue-700">
                <span className="font-semibold text-xs">View Certificate</span>
                <FaExternalLinkAlt size={12} />
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white p-4 rounded relative max-w-4xl w-full h-full max-h-[90vh]"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
                >
                  <FaTimes size={24} />
                </button>
                <div className="overflow-auto">
                  <iframe
                    src={selectedCert.link}
                    title={selectedCert.title}
                    className="w-full h-[80vh]"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </Element>
  );
};

export default Certifications;
