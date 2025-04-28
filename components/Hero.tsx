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

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-0 md:mb-1 mt--6">
              Full Stack
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black mb-1 md:mb-2">
              Developer
            </h2>

            <div className="mb-2 md:mb-4">
              <TypewriterText className="text-[#37233a]" />
            </div>

            <p className="text-black text-base md:text-lg max-w-2xl mb-2 md:mb-4">
              I bring 3.5 years of experience turning ideas into scalable, high-performance software solutions. From front-end interfaces to robust backend systems, I believe great software combines creativity, precision, and a deep focus on real-world impact.
            </p>

            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-wrap gap-2 md:gap-4">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Java</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Python</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">JavaScript</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">MySQL</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Unix</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Artificial Intelligence</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Spring</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">Node</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-[#1E1538] rounded-full text-white text-sm md:text-base">React</span>
              </div>
            </div>
            <div className="flex gap-3 md:gap-4">
               <button
                  onClick={() => scrollToSection('contact')}
                  className="px-4 py-2.5 md:px-6 md:py-3 bg-[#573c5e] text-white rounded-lg hover:bg-[#4D2E50] transition-colors flex items-center gap-2 text-sm md:text-base mt-6"
                >
                  Let's Connect!<span>✉</span>
                </button>
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