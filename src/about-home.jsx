import React from "react";
import { Link } from "react-router-dom";

const AboutMeHome = () => {
  return (
    <div className="flex justify-center items-center h-full p-36 bg-[#F1F5F9] dark:bg-[#1A1D2E]">
      <div className="flex flex-col items-center bg-white border border-gray-300 rounded-lg shadow-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-[#707382] dark:bg-[#2A3A4E] dark:hover:bg-gray-700 transition ease-in-out duration-300 relative">
        
        {/* Profile Image */}
        <img 
          className="object-cover w-full rounded-t-lg h-72 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg shadow-inner" 
          src="public/my-photo-1.jpg" 
          alt="Fon Yingrak Muansawad"
        />

        {/* Card Content */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          
          {/* Title */}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#E5E7EB]">
            Fon Yingrak Muansawad
          </h5>
          
          {/* Short Description */}
          <p className="mb-3 font-normal text-gray-700 dark:text-[#9FA2AC]">
            A passionate front-end developer based in Munich, focused on creating beautiful and user-friendly digital experiences.
          </p>

          {/* Chic Button */}
          <Link to="/about">
            <button className="mt-4 px-6 py-2 text-sm font-semibold text-[#1F4F82] bg-transparent border-2 border-[#1F4F82] rounded-lg hover:text-white hover:bg-[#1F4F82] transition-all duration-300 ease-in-out dark:text-[#FFD300] dark:border-[#FFD300] dark:hover:bg-[#FFD300] dark:hover:text-[#10162F]">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMeHome;
