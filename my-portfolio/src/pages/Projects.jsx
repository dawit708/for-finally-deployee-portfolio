import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.jpg';
import project8 from '../assets/project8.jpg';
import project9 from '../assets/project9.png';
import project10 from '../assets/project10.png';
import project11 from '../assets/project11.png';
import project12 from '../assets/project12.png';
import project20 from '../assets/project20.jpg';
import project21 from '../assets/project21.jpg';
import './Projects.css';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projectsData = [
    {
      id: 1,
      name: 'Netflix-clone website',
      image: project10 ,
      description: 'A fully responsive Netflix clone built with React and Firebase.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/netflix-clone-project',
    },
    {
      id: 2,
      name: 'Apple website replica with React',
      image: project11 ,
      description: 'Pixel-perfect replica of Apple’s homepage using React and Framer Motion.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/API-key-for-apple-website',
    },
    {
      id: 3,
      name: 'Snake Game with React.js',
      image: project3,
      description: 'Classic Snake game built with React hooks and canvas.',
      siteLink: 'https://effervescent-crisp-7a0e6.netlify.app/',
      codeLink: 'https://github.com/dawit708/LAST-GAME-PROJECT-IN-REACT.JS',
    },
    {
      id: 4,
      name: 'EMS system with PHP and DB',
      image: project4,
      description: 'Employee Management System with PHP, MySQL, and a clean dashboard.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/fullsatack-project-for-Employee-mangment-systems',
    },
    {
      id: 5,
      name: 'Weather Forecast',
      image: project9,
      description: 'Real‑time weather app using OpenWeatherMap API and React.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/Weather-Forecast-in-React.js',
    },
    {
      id: 6,
      name: 'YouTube-clone website',
      image: project8,
      description: 'YouTube UI clone with video search and responsive design.',
      siteLink: 'https://eclectic-cocada-c9ea57.netlify.app/',
      codeLink: 'https://github.com/dawit708/youtube-clone-website',
    },
    {
      id: 7,
      name: 'Apple Calculator in JS',
      image: project12,
      description: 'A calculator mimicking Apple’s design, built with vanilla JavaScript.',
      siteLink: 'https://calculter1.netlify.app/',
      codeLink: 'https://github.com/dawit708/apple-calculater',
    },
    {
      id: 8,
      name: 'Enterprise Resource Planning (ERP) System',
      image: project20,
      description: 'A comprehensive ERP system built with modern web technologies.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/employee-registrations-systems-in-javafx',
    },
     {
      id: 9,
      name: 'Evangadi form action in Backend',
      image: project21,
      description: 'Backend implementation of form actions for Evangadi, including data processing and API integration.',
      siteLink: 'http://localhost:5173/',
      codeLink: 'https://github.com/dawit708/Evangadi-backend-Form-action',
    }
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="projects-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            {/* You can add a subtitle here if you like */}
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="card-inner">
                {/* Background Image */}
                <motion.div
                  className="card-background"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                {/* Overlay that appears on hover */}
                <motion.div
                  className="card-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overlay-content">
                    {/* Inner card containing text and buttons */}
                    <div className="overlay-card">
                      <motion.h3
                        className="project-name"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {project.name}
                      </motion.h3>

                      <motion.p
                        className="project-description"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{
                          y: hoveredIndex === index ? 0 : 20,
                          opacity: hoveredIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        {project.description}
                      </motion.p>

                      <div className="project-links">
                        <motion.a
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                          initial={{ scale: 0 }}
                          animate={{
                            scale: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt /> Visit Site
                        </motion.a>

                        <motion.a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github"
                          initial={{ scale: 0 }}
                          animate={{
                            scale: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaGithub /> View Code
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Default view (visible when not hovered) */}
                {hoveredIndex !== index && (
                  <motion.div
                    className="card-default"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="default-content">
                      <h3 className="default-title">{project.name}</h3>
                      <span className="default-icon">→</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;