import React, { useState } from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaBootstrap,
  FaTools,
  FaDatabase,
  FaPython,
  FaNetworkWired,
  FaWindows,
  FaApple,
  FaHtml5,
  FaPaintBrush,
  FaVideo,
  FaProjectDiagram,
  FaTasks,
  FaRegStickyNote,
  FaGithub,
  FaGit,
  FaRobot,
  FaRunning,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMysql,
  SiDaisyui,
  SiMongodb,
  SiPostgresql,
  SiVisualstudiocode,
  SiSalesforce,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "RESTful API", icon: <FaNetworkWired className="text-gray-600 dark:text-white" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-white" /> },
 { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
   { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Flowbite", icon: <FaTools className="text-indigo-600" /> },
  { name: "Daisy UI", icon: <SiDaisyui className="text-pink-500" /> },
 { name: "GitHub", icon: <FaGithub className="text-black dark:text-gray-300" /> },
   { name: "Git", icon: <FaGit className="text-red-500" /> },
 { name: "Generative AI", icon: <FaRobot className="text-purple-600" /> },
  { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Salesforce", icon: <SiSalesforce className="text-blue-500" /> },
  { name: "Windows", icon: <FaWindows className="text-blue-700" /> },
  { name: "MacOS", icon: <FaApple className="text-gray-800 dark:text-white" /> },
  { name: "Canva", icon: <FaPaintBrush className="text-cyan-500" /> },
  { name: "Miro Board", icon: <FaProjectDiagram className="text-yellow-600" /> },
  { name: "Kanban Board", icon: <FaTasks className="text-teal-500" /> },
  { name: "Notion", icon: <FaRegStickyNote className="text-gray-500" /> },
  { name: "Agile", icon: <FaRunning className="text-green-500" /> },
];

const SkillsHero = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine how many skills to show initially
  const visibleSkills = showAll ? skills : skills.slice(0, Math.ceil(skills.length / 6));

  return (
    <div className="bg-[#F9FAFB]/50 dark:bg-[#1A1D2E]/50 p-6 flex flex-col items-center">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 w-full max-w-5xl">
        {visibleSkills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#34394C] dark:border-gray-700 
            transition-transform transform hover:scale-105 hover:shadow-lg"
            aria-label={skill.name}
          >
            <div className="text-4xl sm:text-5xl mb-2 sm:mb-4 transition-transform hover:rotate-12">
              {skill.icon}
            </div>
            <p className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-200">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-8 border-2 px-6 py-3 border border-[#10162F] dark:border-[#FFD300] bg-transparent text-[#10162F] dark:text-[#FFD300] font-semibold rounded-md 
        hover:bg-[#10162F] hover:text-white dark:hover:bg-[#FFD300] dark:hover:text-[#10162F] transition-colors duration-300"
      >
        {showAll ? "Show Less" : "View My Tech Stack"}
      </button>
    </div>
  );
};

export default SkillsHero;
