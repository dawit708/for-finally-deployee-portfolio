import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaWordpress,
  FaShopify,
  FaNodeJs,
  FaPhp,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJquery,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import './Skills.css';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 />, proficiency: 90 },
  { name: 'CSS', icon: <FaCss3Alt />, proficiency: 85 },
  { name: 'Bootstrap', icon: <FaBootstrap />, proficiency: 80 },
  { name: 'JavaScript', icon: <FaJs />, proficiency: 85 },
  { name: 'React', icon: <FaReact />, proficiency: 85 },
  { name: 'JSX', icon: <FaReact />, proficiency: 85 },
  { name: 'REST API', icon: <FaDatabase />, proficiency: 80 },
  { name: 'WordPress', icon: <FaWordpress />, proficiency: 70 },
  { name: 'Shopify', icon: <FaShopify />, proficiency: 70 },
  { name: 'jQuery', icon: <SiJquery />, proficiency: 75 },
  { name: 'Node.js', icon: <FaNodeJs />, proficiency: 80 },
  { name: 'Express', icon: <SiExpress />, proficiency: 75 },
  { name: 'MongoDB', icon: <SiMongodb />, proficiency: 75 },
  { name: 'PHP', icon: <FaPhp />, proficiency: 70 },
  { name: 'API', icon: <FaDatabase />, proficiency: 80 },
  { name: 'MySQL', icon: <SiMysql />, proficiency: 75 },
  { name: 'Firebase', icon: <SiFirebase />, proficiency: 70 },
  { name: 'JSON', icon: <VscJson />, proficiency: 90 },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skill) => {
    if (activeSkill && activeSkill.name === skill.name) {
      setActiveSkill(null);
    } else {
      setActiveSkill(skill);
    }
  };

  return (
    <section className="skills">
      <div className="skills-content">
        <div className="skills-header">
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Technologies I work with and my proficiency levels
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              className={`skill-card ${activeSkill?.name === skill.name ? 'active' : ''}`}
              onClick={() => handleSkillClick(skill)}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(100, 255, 218, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              layout
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <AnimatePresence>
                {activeSkill?.name === skill.name && (
                  <motion.div
                    className="skill-progress"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="progress-bar">
                      <motion.div
                        className="progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>
                    <span className="proficiency-text">{skill.proficiency}%</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;