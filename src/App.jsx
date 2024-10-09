import React from 'react';
import Navbar from './header';
import Footer from './footer';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
      return (
        <div className='App'>         
          <main>
            <Navbar />
              <Routes>
                <Route path="/" element={<Home />} /> 
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
              </Routes>
              
          <Projects/> 
          <Footer/>
          </main>
        </div>     
      );
    }
export default App
