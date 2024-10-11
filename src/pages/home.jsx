import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[var(--darkmode-color)] p-8 md:p-16 border-t border-[#707382] dark:border-[#FFFAE5] transition-all duration-500 ease-in-out">
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl">
        {/* Text Section */}
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up delay-1000">
            Hi, I'm Fon. [fɔn]
          </h1>
          <div className="text-lg md:text-xl text-[#4A5568] dark:text-[#FFFFFF] mb-6 leading-relaxed opacity-0 animate-fade-in-up delay-1500">
            <p>
              I’m a{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300] underline-on-hover">
                multidisciplinary creative
              </span>{" "}
              with a background in{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                tech
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                psychology
              </span>
              , driven to build user-focused solutions through{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                front-end development
              </span>{" "}
              and{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                React
              </span>
              . Based in Munich, I’m a{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                quick learner
              </span>{" "}
              fluent in{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                Thai
              </span>
              ,{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                English
              </span>
              , and{" "}
              <span className="font-bold text-[#10162F] dark:text-[#FFD300]">
                German
              </span>
              , currently{" "}
              <span className="font-bold relative underline-on-hover">
                open for work
              </span>
              .
            </p>
          </div>

          <p className="text-lg md:text-xl text-[#4A5568] dark:text-[#9FA2AC] mb-6 opacity-0 animate-fade-in-up delay-2000">
            I'm ready for a new challenge.
          </p>

          <button className="px-6 py-3 bg-[#10162F] text-[#FFFFFF] dark:bg-[#FFD300] dark:text-[#10162F] rounded-md font-semibold hover:scale-105 hover:rotate-2 transition-transform duration-500 ease-in-out opacity-0 animate-fade-in-up delay-2500">
            My work 🚀
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
