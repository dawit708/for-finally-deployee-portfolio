import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Float, ContactShadows } from '@react-three/drei';
import profileImage from '../assets/profile.jpg';
import './Home.css';

const Home = () => {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="home">
      <div className="hero">
        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Dawit Tsigie</span>
          </h1>
          <p>
            I'm a creative developer specializing in 3D web experiences and modern web applications.
          </p>
          {/* Scroll to Projects button */}
          <a href="#projects" onClick={scrollToProjects}>
            <button className="cta-btn">View My Work</button>
          </a>
        </div>
        <div className="hero-image">
          <img src={profileImage} alt="Dawit Tsigie" />
        </div>
        <div className="hero-canvas">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <TorusKnot args={[1, 0.3, 128, 16]} scale={1.2}>
                  <meshStandardMaterial color="#64ffda" roughness={0.2} metalness={0.8} />
                </TorusKnot>
              </Float>

              <ContactShadows
                position={[0, -1.5, 0]}
                opacity={0.5}
                scale={5}
                blur={1}
                far={2}
              />

              <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate
                autoRotate
                autoRotateSpeed={2}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Home;