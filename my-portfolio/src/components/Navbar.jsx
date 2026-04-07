
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  // Handle theme toggle (single click = white/dark mode, double click = black/light mode)
  const handleThemeToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Single click - toggle between dark and light mode
    setIsDarkMode(!isDarkMode);
  };

  const handleThemeDoubleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Double click - force light mode (black/white theme)
    setIsDarkMode(false);
    
    // Add a visual feedback effect
    const moonIcon = e.currentTarget;
    moonIcon.style.transform = 'scale(0.8)';
    setTimeout(() => {
      moonIcon.style.transform = 'scale(1)';
    }, 200);
  };

  // Apply theme to body when it changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const observers = navItems.map((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(item.id);
            }
          },
          { threshold: 0.5 } 
        );
        observer.observe(element);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, [navItems]);

  return (
    <>
      <motion.nav
        className={`navbar ${isDarkMode ? 'dark-nav' : 'light-nav'}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="logo" onClick={() => scrollToSection('home')}>
          DEV<span>@</span>
        </div>

        {/* Theme Toggle Moon/Sun Icon */}
        <motion.div
          className="theme-toggle"
          onClick={handleThemeToggle}
          onDoubleClick={handleThemeDoubleClick}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            rotate: isDarkMode ? 0 : 360,
            transition: { duration: 0.5 }
          }}
          title="Single click: Toggle theme | Double click: Force light mode"
        >
          {isDarkMode ? (
            <FaMoon className="theme-icon moon-icon" />
          ) : (
            <FaSun className="theme-icon sun-icon" />
          )}
        </motion.div>

        <ul className="nav-links desktop-nav">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`mobile-menu ${isDarkMode ? 'dark-mobile' : 'light-mobile'}`}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="mobile-nav-links">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`nav-btn ${activeSection === item.id ? 'active' : ''}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;