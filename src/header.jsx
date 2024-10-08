import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-[#1C1F24] border-b border-b-[#64748B] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        
        {/* Left Side: Nav Links */}
        <div className="flex space-x-4">
          {['/home', '/projects', '/about'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                `text-[#1A202C] dark:text-[#E5E7EB] hover:underline ${
                  isActive ? 'underline text-[#1F4F82] dark:text-[#60A5FA]' : ''
                }`
              }
            >
              {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}
        </div>

        {/* Right Side: Toggle Button */}
        <div className="flex items-center">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-[#1F4F82] dark:bg-[#1E3A5F] text-white px-3 py-2 rounded-md"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
