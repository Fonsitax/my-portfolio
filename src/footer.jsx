import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f9fafb] dark:bg-[#1C1F24] text-[#1A202C] dark:text-[#E5E7EB] py-4 w-full border-t border-[#64748B] dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright or Description */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/fon-yingrak-muansawad/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Fonsitax"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@FonWritesTheWorld"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
