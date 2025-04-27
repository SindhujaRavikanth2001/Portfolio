'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  const stats = [
    {
      icon: '⚡',
      number: '4',
      title: 'TOTAL PROJECTS',
      description: 'Innovative web & mobile solutions crafted',
    },
    {
      icon: '🏆',
      number: '3',
      title: 'CERTIFICATES',
      description: 'Professional skills validated',
    },
    {
      icon: '🌐',
      number: '2',
      title: 'YEARS OF EXPERIENCE',
      description: 'Continuous learning journey',
    },
  ];

  return (
    <section className="min-h-screen py-20" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#9D5EFF] mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto text-xl text-gray-400 leading-relaxed">
            <p className="mb-6">
              Hello, I'm <span className="text-white font-semibold">Abhishek Ganvir</span> passionate about building smart and 
              scalable web & mobile applications. I've completed a full-stack 
              development course and constantly explore new technologies to refine 
              my skills.
            </p>
            <p>
              Focused on continuous learning, I aim to transition into the IT 
              industry by 2027 and eventually move towards AI and data science.
            </p>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <motion.a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#9D5EFF] text-white rounded-lg hover:bg-[#8445FF] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">📄</span>
              Download CV
            </motion.a>
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-[#9D5EFF] text-[#9D5EFF] rounded-lg hover:bg-[#9D5EFF]/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-xl">⚡</span>
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className="bg-[#1E1538] rounded-2xl p-8 hover:bg-[#2A1B4A] transition-colors"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{stat.icon}</span>
                <span className="text-5xl font-bold text-white">{stat.number}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-400 mb-2">{stat.title}</h3>
              <p className="text-gray-400">{stat.description}</p>
              <div className="mt-4">
                <svg className="w-6 h-6 text-[#9D5EFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 