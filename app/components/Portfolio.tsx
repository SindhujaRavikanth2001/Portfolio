'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'IntervueAI',
      description: 'Real-time mock interviews with AI, no forms or clicks just natural, personalized conversations.',
      image: '/projects/intervueai.png',
      liveDemo: 'https://intervue.ai',
      details: '#'
    },
    {
      title: 'Blendy',
      description: 'A social app where you can connect in real-time, log in with one click, share moments, posts instantly.',
      image: '/projects/blendy.png',
      liveDemo: 'https://blendy.app',
      details: '#'
    },
    {
      title: 'WATCHit',
      description: 'A video streaming app made for easy, personal entertainment and everything you love to binge.',
      image: '/projects/watchit.png',
      liveDemo: 'https://watchit.stream',
      details: '#'
    }
  ];

  const certificates = [
    {
      title: 'Mastering React Native Development',
      issuer: 'Infosys',
      image: '/certificates/infosys.png'
    },
    {
      title: 'The Complete 2024 Web Development Bootcamp',
      issuer: 'Udemy',
      image: '/certificates/udemy.png'
    },
    {
      title: 'NSE SEE Development Program',
      issuer: 'UNNATI Foundation',
      image: '/certificates/unnati.png'
    }
  ];

  const techStack = [
    { name: 'HTML', icon: '/tech/html.svg' },
    { name: 'CSS', icon: '/tech/css.svg' },
    { name: 'JavaScript', icon: '/tech/javascript.svg' },
    { name: 'Tailwind CSS', icon: '/tech/tailwind.svg' },
    { name: 'Express JS', icon: '/tech/express.svg' },
    { name: 'Node JS', icon: '/tech/nodejs.svg' },
    { name: 'React + Native', icon: '/tech/react.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'JWT', icon: '/tech/jwt.svg' },
    { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Docker', icon: '/tech/docker.svg' }
  ];

  const tabs = [
    { id: 'projects', icon: '⚡', label: 'Projects' },
    { id: 'certificates', icon: '🏆', label: 'Certificates' },
    { id: 'techstack', icon: '⚙️', label: 'Tech Stack' }
  ];

  return (
    <section className="min-h-screen py-20" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#9D5EFF] mb-6">Portfolio Showcase</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise. Each section
            represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-xl text-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-[#2A1B4A] text-white'
                  : 'bg-[#1E1538] text-gray-400 hover:bg-[#2A1B4A]/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Projects */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-[#1E1538] rounded-2xl overflow-hidden hover:bg-[#2A1B4A] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9D5EFF] hover:underline"
                    >
                      Live Demo ↗
                    </a>
                    <a
                      href={project.details}
                      className="text-white hover:text-[#9D5EFF]"
                    >
                      Details →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.button
              className="col-span-full mt-8 text-[#9D5EFF] hover:text-white transition-colors flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More <span>↓</span>
            </motion.button>
          </div>
        )}

        {/* Certificates */}
        {activeTab === 'certificates' && (
          <div className="grid md:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-[#1E1538] rounded-2xl overflow-hidden p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        {activeTab === 'techstack' && (
          <>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-[#1E1538] rounded-2xl p-6 flex flex-col items-center justify-center hover:bg-[#2A1B4A] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="relative w-12 h-12 mb-3">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-400">{tech.name}</span>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="mt-8 text-[#9D5EFF] hover:text-white transition-colors flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More <span>↓</span>
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 