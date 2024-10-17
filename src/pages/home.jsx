import React from "react";
import FawnSpeaker from "../FawnSpeaker";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[var(--darkmode-color)] p-8 md:p-16 border-t border-[#707382] dark:border-[#FFFAE5] transition-all duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl">
        {/* Text Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up delay-1000">
            I'm Fon <span className="text-sm"><FawnSpeaker /> </span> 
          </h1>  
          <br />
          <div className="text-lg md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500">
            <p>
              <span>[fɔn] 🔷 Jr. Fullstack Developer 🚀  Multidisciplinary Creative 🌟 Quereinsteigerin  - </span> 
             
              <span>I have a passion for building engaging digital experiences.</span>
               </p>
          </div>
          <br />
          <a 
  href="https://www.linkedin.com/in/fon-yingrak-muansawad/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="border-2 px-6 py-3 border border-[#10162F] dark:border-[#FFD300] bg-transparent text-[#10162F] dark:text-[#FFD300] font-semibold rounded-md 
    hover:bg-[#10162F] hover:text-white dark:hover:bg-[#FFD300] dark:hover:text-[#10162F] transition-transform duration-800 ease-in-out opacity-0 animate-fade-in-up delay-2000"
>
  Let's Connect
</a>


        </div>
      </div>
    </div>
  );
};

export default Home;
