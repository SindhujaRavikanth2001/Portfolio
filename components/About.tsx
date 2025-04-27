'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    <section className="py-16 md:py-20 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-black">About Me</h2>
            
            <p className="text-black text-base md:text-xl max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Hello, I'm <span className="text-[#37233a] font-semibold">Sindhuja Ravikanth</span> a passionate software developer dedicated to creating robust and scalable web applications. With expertise in Java, Python, JavaScript, and MySQL, I thrive on tackling complex challenges, automating workflows, and mentoring teams. Currently advancing my skills through an M.S. in Computer Science, I'm driven to continuously learn and grow. I'm actively seeking opportunities to innovate, collaborate, and make a lasting impact in technology, with a future focus on AI and data science.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-12 md:mb-16">
              <a
                href="/Sindhuja_Ravikanth_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 bg-[#573c5e] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-[#4B2B4D] hover:text-white transition-colors text-sm md:text-base"
              >
                <span className="text-xl">📄</span> Download CV
              </a>
              <button
                onClick={() => handlePortfolioTabClick('projects')}
                className="inline-flex items-center justify-center gap-2 bg-[#1E1538] text-[#9D5EFF] px-4 py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-[#2A1B4A] transition-colors text-sm md:text-base"
              >
                <span className="text-xl">&lt;/&gt;</span> View Projects
              </button>
            </div>
              
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* YEARS OF EXPERIENCE */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative bg-[#23213a]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] cursor-pointer"
                onClick={() => handlePortfolioTabClick('experience')}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                      <span className="text-3xl text-white">🌐</span>
                    </div>
                    <div>
                      <h3 className="uppercase text-white text-base md:text-lg font-semibold tracking-wider">Years of Experience</h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">Continuous learning journey</p>
                    </div>
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white">3.5</span>
                </div>
                <span className="absolute bottom-4 right-6 text-gray-400 text-xl">↗</span>
              </motion.button>

              {/* TOTAL PROJECTS */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative bg-[#23213a]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] cursor-pointer"
                onClick={() => handlePortfolioTabClick('projects')}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                      <span className="text-3xl text-white">&lt;&gt;</span>
                    </div>
                    <div>
                      <h3 className="uppercase text-white text-base md:text-lg font-semibold tracking-wider">Total Projects</h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">Innovative web & mobile solutions crafted</p>
                    </div>
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white">3</span>
                </div>
                <span className="absolute bottom-4 right-6 text-gray-400 text-xl">↗</span>
              </motion.button>

              {/* CERTIFICATES */}
              <motion.button
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative bg-[#23213a]/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg min-h-[200px] focus:outline-none focus:ring-2 focus:ring-[#9D5EFF] cursor-pointer"
                onClick={() => handlePortfolioTabClick('certificates')}
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col items-start gap-4">
                    <div className="bg-white/10 rounded-full w-14 h-14 flex items-center justify-center mb-2">
                      <span className="text-3xl text-white">🎖️</span>
                    </div>
                    <div>
                      <h3 className="uppercase text-white text-base md:text-lg font-semibold tracking-wider">Certificates</h3>
                      <p className="text-gray-400 text-xs md:text-sm mt-1">Professional skills validated</p>
                    </div>
                  </div>
                  <span className="text-4xl md:text-5xl font-bold text-white">7</span>
                </div>
                <span className="absolute bottom-4 right-6 text-gray-400 text-xl">↗</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 