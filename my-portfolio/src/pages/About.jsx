
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere, Float, OrbitControls } from '@react-three/drei';
import './About.css';

const About = () => {
  return (
    <section className="about">
      {/* 3D Background Sphere */}
      <div className="sphere-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[2, 2, 2]} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <Sphere args={[1, 64, 64]} scale={1.5}>
                <meshStandardMaterial
                  color="#64ffda"
                  roughness={0.2}
                  metalness={0.1}
                  emissive="#0a192f"
                  emissiveIntensity={0.2}
                  wireframe
                />
              </Sphere>
            </Float>
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          </Suspense>
        </Canvas>
      </div>

      <div className="about-content">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1 - Bio */}
          <div className="bento-card card-bio">
            <h3>👋 Hi, I'm Dawit Tsigie</h3>
            <p className="bio-text">
              I'm a passionate Full Stack Web Developer based in Bahir Dar, Ethiopia,
              dedicated to crafting modern, high‑performance web experiences. With
              several years of professional experience, I specialize in building
              responsive, user‑friendly applications that meet the latest industry
              standards.
              <br /><br />
              I thrive in collaborative environments, interpreting design blueprints
              and working closely with teams to deliver exceptional results on
              schedule. My keen eye for detail ensures every project is polished and
              functional across all devices. Beyond coding, I'm a continuous learner—
              always exploring new technologies and refining my skills to stay ahead
              in this fast‑paced field.
            </p>
          </div>

          {/* Card 2 - Skills */}
          <div className="bento-card card-skills">
            <h3>🛠️ Core Skills</h3>
            <ul className="skills-list">
              <li>HTML / CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>Three.js / WebGL</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Card 3 - Experience */}
          <div className="bento-card card-exp">
            <h3>💼 Experience</h3>
            <p className="stat-number">1+</p>
            <p>Years in web development</p>
          </div>

          {/* Card 4 - Projects */}
          <div className="bento-card card-projects">
            <h3>📁 Projects</h3>
            <p className="stat-number">7+</p>
            <p>Completed projects</p>
          </div>

          {/* Card 5 - Location */}
          <div className="bento-card card-location">
            <h3>📍 Location</h3>
            <p>Bahir Dar, Ethiopia</p>
            <p className="tiny">Open to remote work</p>
          </div>

          {/* Card 6 - Fun Fact */}
          <div className="bento-card card-fun">
            <h3>🎸 Fun Fact</h3>
            <p>I write code and love hiking on weekends.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;