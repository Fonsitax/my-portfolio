import React from 'react';
import Navbar from './header';
import Footer from './footer';
import SkillsHero from './skill-hero';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className='App'>         
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <SkillsHero />
              <Projects />
            </>
          } />
          <Route path="/home" element={
            <>
              <Home />
              <SkillsHero />
              <Projects />
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
