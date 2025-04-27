'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypewriterText from './TypewriterText';

const Hero = () => {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-[#0F0817] via-[#1A1033] to-[#0B1E2B] overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col items-start">
          {/* Name and Ready to Innovate button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold text-[#9D5EFF] mb-4">
              Abhishek Ganvir
            </h1>
            <motion.button
              className="px-6 py-2 rounded-full bg-[#1E1538] text-[#9D5EFF] flex items-center gap-2 hover:bg-[#2A1B4A] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">⚡</span>
              Ready to Innovate
            </motion.button>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-7xl font-bold text-white mb-4">
              Full Stack
              <br />
              Developer
            </h2>
            <TypewriterText />
            <p className="text-xl text-gray-400 mt-6 max-w-2xl">
              Enhancing digital experiences that are smooth, scalable, and made to impress.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {['React', 'Javascript', 'Node.js', 'PostgreSQL'].map((tech, index) => (
              <span
                key={tech}
                className="px-6 py-2 rounded-full bg-[#1E1538] text-gray-300 text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Link href="#projects" className="px-8 py-3 rounded-lg bg-[#9D5EFF] text-white font-medium hover:bg-[#8445FF] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="px-8 py-3 rounded-lg border border-[#9D5EFF] text-[#9D5EFF] font-medium hover:bg-[#9D5EFF]/10 transition-colors">
              Contact
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-6 mt-16"
          >
            {[
              { icon: 'github', href: '#' },
              { icon: 'linkedin', href: '#' },
              { icon: 'instagram', href: '#' }
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                className="w-12 h-12 rounded-full bg-[#1E1538] flex items-center justify-center text-[#9D5EFF] hover:bg-[#2A1B4A] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 