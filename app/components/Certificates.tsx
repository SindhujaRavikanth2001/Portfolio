'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  const certificates = [
    {
      title: 'Full Stack Development',
      issuer: 'Udacity',
      date: '2023',
      credential: 'ND0044',
      image: '/certificates/fullstack.jpg'
    },
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-CP-2023',
      image: '/certificates/aws.jpg'
    },
    {
      title: 'React Development',
      issuer: 'Meta',
      date: '2022',
      credential: 'META-RD-2022',
      image: '/certificates/react.jpg'
    },
    {
      title: 'Python Programming',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'MS-PP-2022',
      image: '/certificates/python.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-primary" id="certificates">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-textPrimary"
            variants={itemVariants}
          >
            Certificates
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.credential}
                className="bg-cardBg rounded-xl overflow-hidden hover:bg-hoverBg transition-colors"
                variants={itemVariants}
              >
                <div className="h-48 bg-gray-800 relative">
                  {/* Add actual certificate images later */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    🎓
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-textPrimary">{cert.title}</h3>
                  <p className="text-textSecondary mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-textSecondary">{cert.date}</span>
                    <button 
                      className="text-secondary hover:text-accent transition-colors"
                      onClick={() => window.open('#', '_blank')}
                    >
                      View →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates; 