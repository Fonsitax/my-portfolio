import React from "react";
import { FaReact, FaJs, FaNodeJs, FaBootstrap, FaTools, FaDatabase, FaPython, FaNetworkWired, FaWindows, FaApple, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiExpress, SiMysql, SiDaisyui, SiMongodb, SiPostgresql, SiVisualstudiocode, SiSalesforce } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-white" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "Flowbite", icon: <FaTools className="text-indigo-600" /> },
  { name: "Daisy UI", icon: <SiDaisyui className="text-pink-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "VSCode", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Salesforce", icon: <SiSalesforce className="text-blue-500" /> },
  { name: "RESTful API", icon: <FaNetworkWired className="text-gray-600 dark:text-white" /> },
  { name: "Windows", icon: <FaWindows className="text-blue-700" /> },
  { name: "MacOS", icon: <FaApple className="text-gray-800 dark:text-white" /> },
];

const SkillsHero = () => {
  return (
    <div className=" mt-16 min-h-screen bg-[#F9FAFB] dark:bg-[#10162F] p-6 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#10162F] dark:text-[#FFD300] mb-20 text-center">
        My Skill Set 🤹🏻
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-5xl">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-[#34394C] dark:border-gray-700 transition-transform transform hover:scale-105">
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsHero;
