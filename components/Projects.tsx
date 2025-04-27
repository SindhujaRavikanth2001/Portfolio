'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Project 1",
    description: "A web application that helps users track their daily tasks and manage their time effectively. Built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/username/project1",
    live: "https://project1.com"
  },
  {
    title: "Project 2",
    description: "An e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, and secure payments.",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/username/project2",
    live: "https://project2.com"
  },
  {
    title: "Project 3",
    description: "A real-time chat application with features like group messaging, file sharing, and message encryption.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/username/project3",
    live: "https://project3.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <motion.h2
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h2>

      <div className="mt-8 space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative grid gap-4 p-6 overflow-hidden rounded-lg md:grid-cols-2 bg-primary/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <p className="mt-4 text-textSecondary">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded bg-secondary/10 text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-secondary"
                >
                  <FiExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-video bg-secondary/10 rounded-lg"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 