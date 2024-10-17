import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const AboutMeHome = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-8 md:p-36 bg-[#F1F5F9]/60 dark:bg-[#1A1D2E]/60">
      <div className="flex flex-col md:flex-row items-center max-w-4xl space-y-8 md:space-y-0 md:space-x-8">
        {/* Image Section with Hover Effect */}
        <div className="w-60 h-60 md:w-72 md:h-72 flex-shrink-0 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <img 
            src="my-photo-1.jpg" 
            alt="Your Portrait" 
            className="w-full h-full object-cover border-2 border-[#10162F] dark:border-[#FFD300] rounded-full"
          />
        </div>
        
        {/* Text Section */}
        <div className="text-left">
  <h1 className="text-4xl md:text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up delay-1000">
    About Me ✨
  </h1>
  
  <div className="md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500 text-left md:text-justify">
  <p>
    I’m a career changer stepping into the world of software development, bringing a unique blend of expertise from politics, intercultural communication, and e-learning. With strong skills in front-end technologies like React, JavaScript, and CSS, I’m driven to create impactful, user-friendly web applications.
  </p>
</div>

<div className="mb-12 md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500 text-left md:text-justify">
  <p>
    Originally from Thailand and now based in Munich, I’m a quick learner who thrives on challenges. My journey is fueled by a deep commitment to continuous growth and a lifelong love of learning.
  </p>
</div>






  
  <Link 
    to="/about" 
    className="px-6 py-3 bg-transparent border-2 border-[#10162F] dark:border-[#FFD300] text-[#10162F] dark:text-[#FFD300] rounded-md font-semibold transition-all duration-300 ease-in-out hover:bg-[#10162F] hover:text-[#FFFFFF] dark:hover:bg-[#FFD300] dark:hover:text-[#10162F] hover:scale-105 hover:rotate-2 opacity-0 animate-fade-in-up delay-2000"
  >
    My Journey
  </Link>
</div>

      </div>
    </div>
  );
};

export default AboutMeHome;
