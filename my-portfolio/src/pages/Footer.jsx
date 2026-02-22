import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/dawit708',
      label: 'GitHub',
      color: '#333'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername',
      label: 'LinkedIn',
      color: '#0077b5'
    },
    {
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername',
      label: 'Twitter',
      color: '#1da1f2'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:dawittsigie3@gmail.com',
      label: 'Email',
      color: '#ea4335'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Wave effect at top */}
        <div className="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="footer-content">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">
              Dawit <span className="gradient-text">Tsigie</span>
            </h3>
            <p className="footer-description">
              Creating immersive 3D web experiences and modern web applications with passion and creativity.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--social-color': social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-menu">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href={link.path} className="footer-link">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="footer-title">Get In Touch</h4>
            <ul className="contact-info">
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:dawittsigie3@gmail.com">dawittsigie3@gmail.com</a>
              </li>
              <li>
                <FaGithub className="contact-icon" />
                <a href="https://github.com/dawit708" target="_blank" rel="noopener noreferrer">
                  @dawit708
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="copyright">
            <p>&copy; {currentYear} Dawit Tsigie. All rights reserved.</p>
          </div>
          <div className="made-with">
            <p>
              Made with <FaHeart className="heart-icon" /> in Bahir Dar, Ethiopia
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;