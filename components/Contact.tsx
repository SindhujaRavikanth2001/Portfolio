'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <motion.h2
        className="heading text-center text-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="max-w-xl mx-auto mt-4 text-center text-lg text-[#1e1538]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just
        want to say hi, I'll try my best to get back to you!
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://github.com/SindhujaRavikanth2001"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1e1538] hover:text-secondary transition-colors"
        >
          <FiGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/sindhuja-ravikanth/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1e1538] hover:text-secondary transition-colors"
        >
          <FiLinkedin className="w-8 h-8" />
        </a>
        <a
          href="mailto:tcp.sindhuja@gmail.com"
          className="text-[#1e1538] hover:text-secondary transition-colors"
        >
          <FiMail className="w-8 h-8" />
        </a>
      </motion.div>

      <motion.div
        className="mt-12 text-center text-[#1e1538]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p>© 2025 - All Rights Reserved.</p>
      </motion.div>
    </section>
  );
} 