'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#portfolio', tab: 'experience' },
  { name: 'Projects', href: '#portfolio', tab: 'projects' },
  { name: 'Education', href: '#portfolio', tab: 'education' },
  { name: 'Certificates', href: '#portfolio', tab: 'certificates' },
  { name: 'Tech Stack', href: '#portfolio', tab: 'techstack' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#b0a3b5] py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-3xl font-bold transition-colors flex items-center gap-2"
          >
            <span className="text-[#843052] hover:text-[#472557] transition-all">
              Sindhuja Ravikanth
            </span>
            <span className="text-sm text-white font-normal">(she/her)</span>
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
              <button
                  onClick={() => item.tab ? handlePortfolioTabClick(item.tab) : scrollToSection(item.href.slice(1))}
                  className="text-lg text-black hover:text-[#472557] transition-colors font-bold"
              >
                  {item.name}
              </button>
            </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="px-2 pt-2 pb-3 space-y-1 md:hidden bg-[#b0a3b5]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-lg text-black hover:text-[#472557] transition-colors font-bold"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (item.tab) {
                    handlePortfolioTabClick(item.tab);
                  } else {
                    scrollToSection(item.href.slice(1));
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
} 