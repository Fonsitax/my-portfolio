import React from "react";
import { Link } from "react-router-dom";

const AboutMeHome = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-8 md:p-36 bg-[#F1F5F9] dark:bg-[#1A1D2E]">
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
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up delay-1000">
            About Me
          </h1>
          <div className="text-lg md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500">
            <p>
              I am a career changer to software development with a background in politics and intercultural communication. Skilled in front-end technologies, including React, JavaScript, and CSS. 
              <br /> <br />As a former e-learning specialist and psychology geek passionate about building beautiful and user-friendly web applications that bring impact.
            </p>
          </div>
          <div className="text-lg md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500">
            <p>
              Thai native. Based in Munich. I'm a fast learner and challenge-taker, driven by continuous growth and lifelong learning.
            </p>
          </div>
          <br />
          <button>
            <Link to="/about" className="px-6 py-3 bg-transparent border-2 border-[#10162F] dark:border-[#FFD300] text-[#10162F] dark:text-[#FFD300] rounded-md font-semibold hover:bg-[#10162F] hover:text-[#FFFFFF] dark:hover:bg-[#FFD300] dark:hover:text-[#10162F] hover:scale-105 hover:rotate-2 transition-all duration-300 ease-in-out opacity-0 animate-fade-in-up delay-2000">
            Get to know me
          </Link>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default AboutMeHome;
