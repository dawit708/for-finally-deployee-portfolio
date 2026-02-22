import React from 'react';
import { 
  FaCode, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaClock, 
  FaRocket, 
  FaHeadset 
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const servicesData = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'I do some research before starting my development to choose the right way for the job.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Fully Responsive',
      description: 'I design my websites for every screen size available and I make sure it looks great on every device.'
    },
    {
      icon: <FaPaintBrush />,
      title: 'Beautiful Code',
      description: 'Working on projects, I write beautiful and clean codes to make them better readable for any partner or client.'
    },
    {
      icon: <FaClock />,
      title: 'On Time',
      description: 'Always responsible to complete any given project on time.'
    },
    {
      icon: <FaRocket />,
      title: 'Quick Learner',
      description: 'I like to learn new things and I have the ability to learn it quickly.'
    },
    {
      icon: <FaHeadset />,
      title: 'Online',
      description: 'Easy to reach and happy to help.'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">What I Offer</h2>
          <p className="services-subtitle">
            I'm a great team player, and I enjoy working with others. Some of my work qualities are listed below.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;