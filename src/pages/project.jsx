import React from "react";

const projects = [
  {
    title: "Geonic Reader",
    imageUrl: "public/geography-edu.png",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Vite", "Neon", "MySQL", "Express", "VScode", "Git & GitHub", "Flowbite", "Daisy UI", "Canva"],
    description: "A geography learning platform with bionic reading mode designed to help users with dyslexia and concentration challenges.",
    link: "https://geonic-reader.onrender.com/",
  },
  {
    title: "Project Two",
    imageUrl: "public/rock-paper-scissors.png",
    techStack: ["React", "Redux", "Express", "MongoDB"],
    description: "A short description of Project Two goes here.",
    link: "#", // Update with actual link
  },
  {
    title: "Project Three",
    imageUrl: "public/weather app.png",
    techStack: ["Vue", "Firebase", "CSS"],
    description: "A short description of Project Three goes here.",
    link: "#", // Update with actual link
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#1C1F24] p-6">
      <h2 className="text-3xl font-bold text-[#1F4F82] dark:text-[#60A5FA] mb-6 text-center">My Projects</h2>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-[#2D3748] shadow-lg rounded-lg overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2 text-[#1F4F82] dark:text-[#60A5FA]">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-[#edf2f7] dark:bg-[#4A5568] text-[#1A202C] dark:text-[#E2E8F0] text-xs font-semibold px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-[#4A5568] dark:text-[#A0AEC0] mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#1F4F82] text-white font-semibold rounded-md hover:bg-[#60A5FA] transition-colors duration-300"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

