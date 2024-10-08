import React from 'react';
import Navbar from './header';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
      return (
        <div className='App'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <main>
            <div className="h-screen bg-blue-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-blue-600">Welcome to My Portfolio !</h1>
        </div>
          </main>
        </div>     
      );
    }
export default App
