
import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="services" className="section">
          <Services />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
         <section id="contact" className="section">
          <Contact />
        </section> 
      </main>
       <Footer /> 
    </div>
  );
}

export default App;