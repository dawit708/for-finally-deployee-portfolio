
import React, { useRef, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { TextureLoader } from 'three';
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import earthTexture from '../assets/earth.jpg';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // 3D Texture loading
  const earthMap = useLoader(TextureLoader, earthTexture);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // We use sendForm to automatically grab the values from formRef.current
    emailjs.sendForm(
      'service_9xrmjuc', 
      'template_dm0mpka', 
      formRef.current, 
      'yIlTZ7wRy6pysn3Mb'
    )
      .then(() => {
        setLoading(false);
        setStatus({ type: 'success', message: 'Thank you! I\'ll get back to you soon.' });
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        console.error('EmailJS error:', error);
      });
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+251 54 32 97 63',
      link: 'tel:+25154329763',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'dawittsigie3@gmail.com',
      link: 'mailto:dawittsigie3@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      value: 'Bahir Dar, Ethiopia',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="contact-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-subtitle">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Main content: Earth + Form */}
        <div className="contact-content">
          {/* 3D Earth Canvas */}
          <motion.div
            className="earth-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Added Suspense to prevent crashing while texture loads */}
            <Suspense fallback={null}>
              <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[2, 2, 2]} intensity={1.2} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
                <Sphere args={[1.8, 64, 64]} scale={1.2}>
                  <meshStandardMaterial map={earthMap} roughness={0.3} metalness={0.1} />
                </Sphere>
              </Canvas>
            </Suspense>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Matches {{name}} in EmailJS template
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Matches {{email}} in EmailJS template
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message" // Matches {{message}} in EmailJS template
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  className={`status-message ${status.type}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </motion.div>
              )}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Contact Information Cards */}
        <motion.div
          className="contact-info-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="info-title">Or reach me directly</h3>
          <div className="info-cards">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="info-card"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="info-icon">{item.icon}</div>
                <div className="info-details">
                  <h4>{item.title}</h4>
                  <p>{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;