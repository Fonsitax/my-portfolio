import React from "react";
import { Link } from "react-router-dom";

const AboutMeHome = () => {
  return (
    <div className="flex justify-center items-center h-full p-8 md:p-36 bg-[#F1F5F9] dark:bg-[#1A1D2E]">
      <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:max-w-xl w-full sm:w-auto hover:bg-gray-100 dark:border-[#707382] dark:bg-[#2A3A4E] dark:hover:bg-gray-700 transition ease-in-out duration-300 relative">
        
        {/* Profile Image */}
        <img 
          className="object-cover w-full rounded-t-lg h-64 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shadow-inner" 
          src="public/my-photo-1.jpg" 
          alt="Fon Yingrak Muansawad"
        />

        {/* Card Content */}
        <div className="flex flex-col justify-between p-4 md:p-6 leading-normal text-center md:text-left">
          
          {/* Title */}
          <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-[#E5E7EB]">
            Fon Yingrak Muansawad
          </h5>
          
          {/* Short Description */}
          <p className="mb-3 text-base md:text-lg font-normal text-gray-700 dark:text-[#9FA2AC]">
            A passionate front-end developer based in Munich, focused on creating beautiful and user-friendly digital experiences.
          </p>

          {/* Chic Button */}
          <Link to="/about">
            <button className="mt-4 px-6 py-2 w-full md:w-auto text-sm font-semibold text-[#1F4F82] bg-transparent border-2 border-[#1F4F82] rounded-lg hover:text-white hover:bg-[#1F4F82] transition-all duration-300 ease-in-out dark:text-[#FFD300] dark:border-[#FFD300] dark:hover:bg-[#FFD300] dark:hover:text-[#10162F]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHome;
