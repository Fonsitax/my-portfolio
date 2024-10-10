import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[#10162F] p-8 md:p-16 border-t border-[#707382] dark:border-[#FFFAE5] transition-all duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl">
        
        {/* Text Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up animation-delay-1000">
            Hi, I'm Fon. [fɔn ]
          </h1>  
          <div className="text-lg text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up animation-delay-1500">
          <p className="text-lg text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up animation-delay-1500">
  I’m a <strong className="font-bold text-[#10162F] dark:text-[#FFD300] relative after:block after:absolute after:w-full after:h-[2px] after:bg-[#FFD300] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out">
    multidisciplinary creative</strong> with a background in <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">tech</strong> and <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">psychology</strong>, driven to build user-focused solutions through <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">front-end development</strong> and <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">React</strong>. Based in Munich, I’m a <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">quick learner</strong> fluent in <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">Thai</strong>, <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">English</strong>, and <strong className="font-bold text-[#10162F] dark:text-[#FFD300]">German</strong>, currently <span className="relative inline-block text-[#10162F] dark:text-[#FFD300] font-bold">
    open for work
    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#10162F] dark:bg-[#FFD300] transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
  </span>.
</p>
  <br />
</div>        
          <p className="text-xl text-[#4A5568] dark:text-[#9FA2AC] mb-6 opacity-0 animate-fade-in-up animation-delay-2000">
            I'm ready for a new challenge.
          </p>

          <button className="px-6 py-3 bg-[#10162F] text-[#FFFFFF] dark:bg-[#FFD300] dark:text-[#10162F] rounded-md font-semibold hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-in-out opacity-0 animate-fade-in-up animation-delay-2500">
            See My Projects 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
