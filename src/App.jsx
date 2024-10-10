import React from 'react';
import Navbar from './header';
import Footer from './footer';
import SkillsHero from './skill-hero';
import Home from './pages/home';
import About from './pages/about';
import AboutMeHome from './about-home';
import Projects from './pages/project';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import useScrollAnimation from './scroll-animation';

function App() {
  // Apply animation hook to each section
  const homeRef = useScrollAnimation();
  const skillsHeroRef = useScrollAnimation();
  const projectsRef = useScrollAnimation();

  return (
    <div className='App'>         
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <section ref={homeRef}>
                <Home />
              </section>
              <section ref={skillsHeroRef}>
                <SkillsHero />
              </section>
              <section ref={projectsRef}>
                <Projects />
              </section>
            </>
          } />
          <Route path="/home" element={
            <>
              <section ref={homeRef}>
                <Home />
              </section>
              <section ref={skillsHeroRef}>
                <AboutMeHome />
              </section>
              <section ref={projectsRef}>
                <SkillsHero />
              </section>
              <section ref={projectsRef}>
                <Projects />
              </section>
            </>
          } />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>     
  );
}

export default App;
