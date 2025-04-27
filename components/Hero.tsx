'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterText from './TypewriterText';
import Image from 'next/image';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolioTabClick = (tab: string) => {
    // First scroll to portfolio section
    scrollToSection('portfolio');
    
    // Then dispatch event to change tab
    setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent('setPortfolioTab', {
          detail: { tab }
        })
      );
    }, 100);
  };

  return (
    <section className="min-h-screen relative flex items-center pt-20 md:pt-0" id="home">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#1E1538] rounded-full px-4 py-2 mb-6 md:mb-8 mt-16">
              <span className="text-[#9D5EFF]">✨</span>
              <span className="text-[#9D5EFF]">Creating Tomorrow, Today.</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-4">
              Full Stack
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-4 md:mb-6">
              Developer
            </h2>

            <div className="mb-6 md:mb-8">
              <TypewriterText className="text-[#37233a]" />
            </div>

            <p className="text-black text-base md:text-lg max-w-2xl mb-6 md:mb-8">
              Software developer with 3.5+ years of experience in designing and delivering high-performance, scalable software solutions.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Java</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Python</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">JavaScript</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">MySQL</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Unix</span>
              </div>

              <div className="flex gap-3 md:gap-4">
                <button
                  onClick={() => handlePortfolioTabClick('experience')}
                  className="px-4 py-2.5 md:px-6 md:py-3 bg-[#1E1538] text-[#b0a3b5] rounded-lg hover:bg-[#2A1B4A] transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Experience <span>↗</span>
                </button>
                <button
                  onClick={() => handlePortfolioTabClick('projects')}
                  className="px-4 py-2.5 md:px-6 md:py-3 bg-[#1E1538] text-[#b0a3b5] rounded-lg hover:bg-[#2A1B4A] transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Projects <span>↗</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2.5 md:px-6 md:py-3 bg-[#1E1538] text-[#b0a3b5] rounded-lg hover:bg-[#2A1B4A] transition-colors flex items-center gap-2 text-sm md:text-base"
                >
                  Contact <span>✉</span>
                </button>
              </div>

              <div className="flex gap-3 md:gap-4">
                <a href="https://github.com/SindhujaRavikanth2001" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-[#1E1538] rounded-lg hover:bg-[#2A1B4A] transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/sindhuja-ravikanth/" target="_blank" rel="noopener noreferrer" className="p-2.5 md:p-3 bg-[#1E1538] rounded-lg hover:bg-[#2A1B4A] transition-colors">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[500px] hidden md:flex md:items-center md:justify-center"
          >
            <div className="relative w-[400px] h-[400px]">
              {/* Gradient Shadow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-black via-black to-black opacity-75 blur-2xl"></div>
              {/* Profile Picture Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1E1538]">
                <Image
                  src="/profile.jpg"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  quality={100}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 