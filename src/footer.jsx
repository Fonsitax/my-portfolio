import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F9FAFB] dark:bg-[var(--darkmode-color)] text-[#10162F] dark:text-[#FFFFFF] py-4 w-full border-t border-[#707382] dark:border-[#FFFAE5]">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side: Copyright or Description */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/in/fon-yingrak-muansawad/"
            className="hover:text-[#3B82F6] dark:hover:text-[#FFD300]"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Fonsitax"
            className="hover:text-[#3B82F6] dark:hover:text-[#FFD300]"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@FonWritesTheWorld"
            className="hover:text-[#3B82F6] dark:hover:text-[#FFD300]"
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
