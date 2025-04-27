'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Certificate {
  title: string;
  issuer: string;
  image: string;
  date: string;
}

interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [showAllTechStack, setShowAllTechStack] = useState(false);
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Helper for random position
  const getRandomPosition = () => ({
    top: Math.random() * 70 + 10, // 10% to 80%
    left: Math.random() * 80 + 5, // 5% to 85%
  });

  // Animated positions for floating tiles
  const [floatingPositions, setFloatingPositions] = useState<{ [key: string]: { top: number; left: number } }>({});

  useEffect(() => {
    const handleSetTab = (event: CustomEvent) => {
      setActiveTab(event.detail.tab);
    };

    window.addEventListener('setPortfolioTab' as any, handleSetTab);
    return () => window.removeEventListener('setPortfolioTab' as any, handleSetTab);
  }, []);

  useEffect(() => {
    if (!hoveredCategory) return;
    const techs = techStackByCategory.find((g) => g.category === hoveredCategory)?.techs || [];
    // Initialize positions
    let positions: { [key: string]: { top: number; left: number } } = {};
    techs.forEach((tech) => {
      positions[tech.name] = getRandomPosition();
    });
    setFloatingPositions(positions);
    // Animate every 2s
    const interval = setInterval(() => {
      let newPositions: { [key: string]: { top: number; left: number } } = {};
      techs.forEach((tech) => {
        newPositions[tech.name] = getRandomPosition();
      });
      setFloatingPositions(newPositions);
    }, 2000);
    return () => clearInterval(interval);
  }, [hoveredCategory]);

  const projects = [
    {
      title: 'Tourist Recommendation System',
      description: 'Tourist Recommendation System is a Flask web app that recommends travel destinations based on user preferences like clubs, museums, and restaurants. Using machine learning, it delivers personalized suggestions through an easy-to-use, interactive platform.',
      image: '/projects/tourist.png',
      technologies: 'Python, HTML, Bootstrap',
      github: 'https://github.com/SindhujaRavikanth2001/TouristRecommendationSystem'
    },
    {
      title: "The Lion Cub's Journey",
      description: 'Lion Cub’s Journey is a 2D survival adventure game where players guide a young cub through dangerous wilderness, avoiding snakes and collecting meat to regain health. Built in Processing, it features vibrant visuals, strategic gameplay, and progressive levels.',
      image: '/projects/lion.png',
      technologies: 'Processing',
      github: 'https://github.com/SindhujaRavikanth2001/LionCubJourney'
    },
    // {
    //   title: "Farmer's Portal",
    //   description: 'Accomplished secure user account management as measured by a 100% successful login rate by designing and implementing a robust database schema in MySQL along with a secure login mechanism.',
    //   image: '/projects/farmer.png',
    //   technologies: 'HTML, CSS, JavaScript, MySQL',
    //   github: 'https://github.com/yourusername/farmers-portal'
    // },
    {
      title: 'Dutchess County Bus Transportation System',
      description: 'DCBTS is a database-powered web application that streamlines public transportation in Dutchess County. It offers user-friendly trip planning, real-time updates, and an admin portal for managing buses, routes, and tickets, making local transit smarter and more accessible.',
      image: '/projects/bus.png',
      technologies: 'Python, MySQL',
      github: 'https://github.com/SindhujaRavikanth2001/DutchessCountyBusTransportationSystem'
    }
  ];

  const certificates = [
    {
      title: 'Human Research - Data or Specimens Only Research',
      issuer: 'CITI Program',
      image: '/certificates/human.png',
      date: 'December 2023'
    },
    {
      title: 'Social and Behavioral Responsible Conduct of Research',
      issuer: 'CITI Program',
      image: '/certificates/behaviour.png',
      date: 'December 2023'
    },
    {
      title: 'Social Networks',
      issuer: 'NPTEL',
      image: '/certificates/social.jpeg',
      date: 'December 2020'
    },
    {
      title: 'Introduction to Research',
      issuer: 'NPTEL',
      image: '/certificates/research.jpeg',
      date: 'October 2021'
    },
    {
      title: 'Data Science for Engineers',
      issuer: 'NPTEL',
      image: '/certificates/data.jpeg',
      date: 'November 2020'
    },
    {
      title: 'Real Time Systems',
      issuer: 'NPTEL',
      image: '/certificates/real.jpeg',
      date: 'October 2021'
    },
    {
      title: 'Problem Solving through Programming in C',
      issuer: 'NPTEL',
      image: '/certificates/c.jpeg',
      date: 'April 2019'
    }
  ];

  // For interactive tech stack
  const techStackByCategory = [
    {
      category: 'Frontend',
      techs: [
    { name: 'HTML', icon: '/tech/html.svg' },
    { name: 'CSS', icon: '/tech/css.svg' },
    { name: 'JavaScript', icon: '/tech/javascript.svg' },
        { name: 'React', icon: '/tech/react.svg' },
        { name: 'Angular', icon: '/tech/angularjs.svg' },
        { name: 'jQuery', icon: '/tech/jquery.svg' },
        { name: 'Bootstrap', icon: '/tech/bootstrap.svg' },
        { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
        { name: 'Next.js', icon: '/tech/nextjs.svg' },
        { name: 'Drupal', icon: '/tech/drupal.svg' },
      ]
    },
    {
      category: 'Backend',
      techs: [
        { name: 'Java', icon: '/tech/java.svg' },
        { name: 'Python', icon: '/tech/python.svg' },
        { name: 'Node.js', icon: '/tech/nodejs.svg' },
        { name: 'PHP', icon: '/tech/php.svg' },
        { name: 'C', icon: '/tech/c.svg' },
        { name: 'C++', icon: '/tech/cplusplus.svg' },
        { name: 'Processing', icon: '/tech/processing.svg' },
        { name: 'Flask', icon: '/tech/flask.svg' },
        { name: 'Spring', icon: '/tech/spring.svg' },
      ]
    },
    {
      category: 'Databases & Cloud',
      techs: [
        { name: 'MySQL', icon: '/tech/mysql.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
        { name: 'AWS', icon: '/tech/amazonwebservices.svg' },
        { name: 'Azure', icon: '/tech/azure.svg' },
      ]
    },
    {
      category: 'Tools & DevOps',
      techs: [
        { name: 'Git', icon: '/tech/git.svg' },
        { name: 'Maven', icon: '/tech/maven.svg' },
        { name: 'SonarQube', icon: '/tech/sonarqube.svg' },
        { name: 'Jenkins', icon: '/tech/jenkins.svg' },
        { name: 'Docker', icon: '/tech/docker.svg' },
        { name: 'Linux', icon: '/tech/linux.svg' },
        { name: 'Gradle', icon: '/tech/gradle.svg' },
        { name: 'Unix', icon: '/tech/unix.svg' },
        { name: 'JIRA', icon: '/tech/jira.svg' },
        { name: 'JSON', icon: '/tech/json.svg' },
        { name: 'XML', icon: '/tech/xml.svg' },
      ]
    },
    {
      category: 'Data Science',
      techs: [
        { name: 'Pandas', icon: '/tech/pandas.svg' },
        { name: 'NumPy', icon: '/tech/numpy.svg' },
        { name: 'Scikit-learn', icon: '/tech/scikit-learn.svg' },
        { name: 'TensorFlow', icon: '/tech/tensorflow.svg' },
        { name: 'Matplotlib', icon: '/tech/matplotlib.svg' },
      ]
    }
  ];

  const experiences: Experience[] = [
    {
      role: "Research Assistant",
      company: "Marist University",
      duration: "December 2023 - Present",
      location: "Poughkeepsie, NY",
      description: [
        "Identified security anomalies in 2M+ dark web URLs using web scraping, enhancing threat detection algorithms for cybersecurity projects.",
        "Boosted political alignment prediction accuracy to 85% by analyzing 50,000+ social media posts using NLP and Large Language Models (LLMs) for sentiment analysis in collaboration with Marist Poll."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "TCPWave",
      duration: "May 2024 - August 2024",
      location: "Poughkeepsie, NY",
      description: [
        "Reduced UI load time by 40% by engineering a responsive Drupal theme using Bootstrap and resolving 20+ SCSS bugs.",
        "Increased content migration speed by 35% by optimizing 50+ digital assets and implementing an efficient Drupal interface migration strategy.",
        "Achieved 96% pass rate in system testing by resolving DHCP Ping Poller and Workflow issues across 150+ test scenarios.",
      ]
    },
    {
      role: "Software Developer",
      company: "TCPWave",
      duration: "April 2022 - July 2023",
      location: "Hyderabad, India",
      description: [
        "Delivered 99.9% uptime for 5,000+ daily users by designing robust Java and MySQL-based backend systems under Agile methodology.",
        "Handled over 1,000 API requests per day by designing and optimizing 15+ RESTful APIs used across third-party tools like Postman and Node.js.",
        "Boosted operational efficiency by 20% by automating internal workflows with user-level approval mechanisms.",
        "Improved network visibility by 70% by engineering IP-to-identity reporting via Microsoft Active Directory for 1,000+ users.",
        "Enhanced alert delivery speed by implementing a multi-channel alerting system, reducing downtime response latency.",
        "Ensured code quality using CI/CD pipelines and tools like Jenkins, Git, and SonarQube.",
      ]
    },
    {
      role: "Software Developer Intern",
      company: "TCPWave",
      duration: "October 2021 - April 2022",
      location: "Hyderabad, India",
      description: [
        "Increased DDI visibility by 65% through adaptive dashboards with advanced visualizations, streamlining real-time system monitoring.",
        "Resolved 100+ dev tickets by debugging production code and deploying rapid enhancements, shortening release cycles."
      ]
    }
  ];

  const tabs = [
    { id: 'experience', icon: '💼', label: 'Experience' },
    { id: 'projects', icon: '⚡', label: 'Projects' },
    { id: 'education', icon: '🎓', label: 'Education' },
    { id: 'certificates', icon: '🏆', label: 'Certificates' },
    { id: 'techstack', icon: '⚙️', label: 'Tech Stack' }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      university: "Marist University",
      duration: "August 2023 - May 2025",
      location: "Poughkeepsie, NY",
      description: "GPA: 3.77/4.0\nCoursework: Advanced Data Structures & Algorithms, Networking, Cloud Computing, Data Mining & Predictive Analysis, Parallel Processing, Software Design & Development, Security Algorithms & Protocols"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      university: "Keshav Memorial Institute of Technology",
      duration: "July 2018 - July 2022",
      location: "Hyderabad, India",
      description: "GPA: 7.69/10\nCoursework: DBMS, Network Security, Python Programming, Data Science, Machine Learning, C, C++, Operating Systems, and Java"
    }
  ];

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);
  const visibleCertificates = showAllCertificates ? certificates : certificates.slice(0, 3);
  const visibleTechStack = showAllTechStack ? techStackByCategory : techStackByCategory.slice(0, 2);

  return (
    <section className="min-h-screen py-16 md:py-20" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 md:mb-6">Portfolio Showcase</h2>
          <p className="text-black text-base md:text-lg max-w-3xl mx-auto">
            Explore my journey through projects, certifications, education and technical expertise. Each section
            represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 md:px-8 md:py-4 rounded-xl text-sm md:text-lg font-medium transition-all ${
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
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                  className="bg-[#1E1538] rounded-2xl overflow-hidden hover:bg-[#2A1B4A] transition-colors flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                  <div className="relative h-40 md:h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                  <div className="p-4 md:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#b0a3b5]">{project.title}</h3>
                    <p className="text-white text-sm md:text-base mb-4 flex-grow">{project.description}</p>
                    <p className="text-[#9D5EFF] text-sm mb-4">{project.technologies}</p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-[#2A1B4A] hover:bg-[#9D5EFF] transition-colors py-2 px-4 rounded-lg text-center text-sm md:text-base flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                </div>
              </motion.div>
            ))}
            </div>
            {projects.length > 3 && (
            <motion.button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="text-black hover:text-[#4B2B4D] transition-colors flex items-center gap-2 mx-auto text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                {showAllProjects ? 'See Less ↑' : 'See More ↓'}
            </motion.button>
            )}
          </div>
        )}

        {/* Certificates */}
        {activeTab === 'certificates' && (
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {visibleCertificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                  className="bg-[#1E1538] rounded-2xl overflow-hidden p-4 cursor-pointer hover:bg-[#2A1B4A] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedCertificate(cert)}
              >
                  <div className="relative h-40 md:h-48 mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain"
                  />
                </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
            {certificates.length > 3 && (
              <motion.button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="text-black hover:text-[#4B2B4D] transition-colors flex items-center gap-2 mx-auto text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllCertificates ? 'See Less ↑' : 'See More ↓'}
              </motion.button>
            )}
          </div>
        )}

        {/* Education */}
        {activeTab === 'education' && (
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  className="bg-[#1E1538] rounded-2xl p-6 md:p-8 hover:bg-[#2A1B4A] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-white">{edu.degree}</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <p className="text-[#b0a3b5] font-medium">{edu.university}</p>
                      <p className="text-[#9D5EFF]">{edu.duration}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-white text-sm">{edu.location}</p>
                      <p className="text-white text-sm">GPA: {edu.description.split('\n')[0].split(': ')[1]}</p>
                    </div>
                    <p className="text-white text-sm mt-4">Coursework: {edu.description.split('\n')[1].split(': ')[1]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {activeTab === 'experience' && (
          <div className="space-y-4 md:space-y-6">
            {(showAllExperiences ? experiences : experiences.slice(0, 3)).map((exp, index) => (
              <motion.div
                key={exp.role}
                className="bg-[#1E1538] rounded-2xl p-6 cursor-pointer hover:bg-[#2A1B4A] transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
                    <p className="text-[#9D5EFF] text-lg">{exp.company}</p>
                  </div>
                  <p className="text-[#b0a3b5] mt-2 md:mt-0">{exp.duration}</p>
                </div>
              </motion.div>
            ))}
            
            {experiences.length > 3 && (
              <motion.button
                onClick={() => setShowAllExperiences(!showAllExperiences)}
                className="text-black hover:text-[#4B2B4D] transition-colors flex items-center gap-2 mx-auto text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showAllExperiences ? 'See Less ↑' : 'See More ↓'}
              </motion.button>
            )}
          </div>
        )}

        {/* Tech Stack */}
        {activeTab === 'techstack' && (
          <div
            className="relative min-h-[150px] flex flex-col items-center justify-center pb-4 mt-12"
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="flex flex-wrap justify-center gap-4 z-10">
              {techStackByCategory.map((group) => (
                <div
                  key={group.category}
                  className={`bg-[#1E1538] rounded-lg px-4 py-2 text-base font-bold cursor-pointer shadow transition-transform hover:scale-105 ${hoveredCategory === group.category ? 'ring-2 ring-[#B0A3B5]' : ''}`}
                  style={{ color: '#B0A3B5' }}
                  onMouseEnter={() => setHoveredCategory(group.category)}
                >
                  {group.category}
                </div>
              ))}
            </div>
            <div className="w-full flex justify-center mt-4 z-20 min-h-[90px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-full max-w-4xl">
                <AnimatePresence key={hoveredCategory} mode="wait">
                  {hoveredCategory && techStackByCategory.find((g) => g.category === hoveredCategory)?.techs.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                      className="bg-[#1E1538] rounded-xl p-4 flex flex-col items-center shadow hover:bg-[#2A1B4A] transition-colors"
                      initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                      <div className="relative w-10 h-10 md:w-14 md:h-14 mb-2">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                      <span className="text-xs md:text-sm text-gray-300 text-center font-semibold">{tech.name}</span>
                </motion.div>
              ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}

        {/* Certificate Modal */}
        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-[#1E1538] rounded-2xl p-4 md:p-6 max-w-4xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white text-xl md:text-2xl"
                >
                  ×
                </button>
                <div className="relative h-[200px] sm:h-[300px] md:h-[400px] mb-4 md:mb-6">
                  <Image
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-xl md:text-2xl font-bold">{selectedCertificate.title}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Issuer</p>
                      <p className="font-medium">{selectedCertificate.issuer}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Date</p>
                      <p className="font-medium">{selectedCertificate.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Experience Modal */}
        <AnimatePresence>
          {selectedExperience && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedExperience(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-[#1E1538] rounded-2xl p-6 md:p-8 max-w-2xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                >
                  ×
                </button>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-white">{selectedExperience.role}</h2>
                    <p className="text-[#9D5EFF] text-xl">{selectedExperience.company}</p>
                    <div className="flex flex-wrap gap-2 text-[#b0a3b5]">
                      <span>{selectedExperience.duration}</span>
                      <span>•</span>
                      <span>{selectedExperience.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">Key Responsibilities & Achievements</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {selectedExperience.description.map((item, index) => (
                        <li key={index} className="text-gray-400">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio; 