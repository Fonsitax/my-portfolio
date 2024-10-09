import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] dark:bg-[#1C1F24] p-6 border-t border-[#64748B] dark:border-gray-700">
      {/* Image Section */}
      <div className="relative w-60 h-auto mb-6">
        <img
          src="/my-photo-1.jpg"
          alt="Fon Yingrak Muansawad"
          className="w-full h-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 rounded-lg border-2 border-[#1F4F82] dark:border-[#60A5FA] transform translate-x-3 translate-y-3 hover:translate-x-0 hover:translate-y-0 transition-transform duration-300"></div>
      </div>

      {/* Text Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-[#1F4F82] dark:text-[#60A5FA] mb-4 animate-fade-in-up">
          Hi, I'm Fon
        </h1>
        <p className="text-xl text-[#1A202C] dark:text-[#E5E7EB] mb-4">
          Welcome to my portfolio.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#A0AEC0] mb-6">
          I’m a <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">career changer</strong> passionate about technology, focusing on <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">front-end development</strong> and <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">React</strong>. Based in Munich, I’m a <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">quick learner</strong> who is highly motivated and fluent in <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">Thai</strong>, <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">English</strong>, and <strong className="font-bold text-[#1F4F82] dark:text-[#60A5FA]">German</strong>. I’m currently <span className="relative inline-block text-[#1F4F82] dark:text-[#60A5FA] font-bold">
            open for work
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1F4F82] dark:bg-[#60A5FA] transform scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
          </span>.
        </p>
        <button className="px-6 py-3 bg-[#1F4F82] text-white rounded-md font-semibold hover:bg-[#60A5FA] transition-colors duration-300">
          See My Projects
        </button>
      </div>
    </div>
  );
};

export default Home;
