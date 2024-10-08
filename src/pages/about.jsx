import React from "react";

const About = () => {
  return (
    <div className="p-6 bg-[#F9FAFB] dark:bg-[#10162F] text-[#10162F] dark:text-[#FFFFFF] flex flex-col items-center about-section-fadeinandout">
      <h1 className="text-3xl mt-20 font-bold mb-8 text-[#10162F] dark:text-[#FFD300]">
        About Me 🙋🏻‍♀️
      </h1>

      {/* Image */}
      <img
        src="public/my-photo-1.jpg" 
        alt="Fon Yingrak Muansawad"
        className="w-48 h-48 rounded-full shadow-lg mb-6 object-cover transition-transform duration-300 hover:scale-105 ease-in-out"
      />

      {/* Description */}
      <div className="max-w-3xl text-center mb-6">
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC] mb-4">
          Hi 👋, I'm Fon Yingrak Muansawad, a tech-enthusiast based in Munich. I'm passionate about creating engaging digital experiences that make a positive impact.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC] mb-4">
          A versatile professional transitioning into full-stack development with a strong focus on front-end technologies. My background in digital learning, SaaS, and social innovation gives me a unique perspective in creating user-centered, impactful digital experiences.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC] mb-4">
          As a career changer, I bring an analytical mindset from my psychology and content writing experience, allowing me to craft intuitive interfaces that resonate with users.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC] mb-4">
          Fluent in Thai, English, and German, I am adept at working in diverse, multicultural environments. My intercultural competence, developed through working and studying abroad, helps me design inclusive and accessible user experiences.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC] mb-4">
          My journey into full-stack development was sparked by a passion for creating engaging online content, which led me to pursue technical skills through an intensive coding boot camp. I have gained proficiency in HTML, CSS, JavaScript, React, and Node.js, with a focus on front-end development.
        </p>
        <p className="text-lg text-[#4A5568] dark:text-[#9FA2AC]">
          I am eager to leverage my skills and background to contribute as a junior front-end developer, building seamless and impactful digital products.
        </p>
      </div>

      {/* Download Resume Button */}
      <a
        href="Fon_YMuansawad_CV_EN.pdf"
        download
        className="px-6 py-3 mt-20 mb-20 bg-[#10162F] dark:bg-[#FFD300] text-white dark:text-[#10162F] rounded-md font-semibold 
          hover:bg-[#3B82F6] dark:hover:bg-[#FFD300] transition-transform transform hover:-translate-y-1 hover:scale-105 ease-in-out duration-300 shadow-md"
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
