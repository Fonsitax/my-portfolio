import React, { useEffect, useRef } from "react";

const projects = [
  {
    title: "Geonic Reader",
    imageUrl: "public/geography-edu.png",
    techStack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Node.js",
      "Vite",
      "Neon",
      "MySQL",
      "Express",
    ],
    description:
      "A geography learning platform with bionic reading mode designed to help users with dyslexia and concentration challenges.",
    link: "https://geonic-reader.onrender.com/",
  },
  {
    title: "Project Two",
    imageUrl: "public/rock-paper-scissors.png",
    techStack: ["React", "Redux", "Express", "MongoDB"],
    description: "A short description of Project Two goes here.",
    link: "#",
  },
  {
    title: "Project Three",
    imageUrl: "public/weather app.png",
    techStack: ["Vue", "Firebase", "CSS"],
    description: "A short description of Project Three goes here.",
    link: "#",
  },
  {
    title: "Project Four",
    imageUrl: "public/weather app.png",
    techStack: ["Vue", "Firebase", "CSS"],
    description: "A short description of Project Three goes here.",
    link: "#",
  },
];

const Projects = () => {
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center h-full p-6 md:p-20 bg-[#F1F5F9] dark:bg-[var(--darkmode-color)]">
      <section className="py-4 px-4 mx-auto w-full max-w-screen-lg lg:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#10162F] dark:text-[#FFD300] mb-12 text-center">
          My Projects ✨
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (projectRefs.current[index] = el)}
              className="project-card flex flex-col bg-[#FFFFFF] dark:bg-[#34394C] border border-[#707382] dark:border-[#FFFAE5] rounded-lg p-6 md:p-8 transition-all duration-300 ease-in-out opacity-0 transform translate-y-10 hover:scale-105 hover:shadow-lg hover:bg-[#F1F5F9] dark:hover:bg-[#2D3748] hover:border-[#3B82F6] dark:hover:border-[#FFD300]"
            >
              <h3 className="text-xl md:text-2xl font-extrabold text-[#10162F] dark:text-[#FFD300] mb-3">
                {project.title}
              </h3>
              <p className="text-sm md:text-lg font-normal text-[#4A5568] dark:text-[#9FA2AC] mb-4 md:mb-6">
                {project.description}
              </p>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-40 md:h-48 rounded-lg mb-4 md:mb-6 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#EDF2F7] dark:bg-[#585C6D] text-[#4A5568] dark:text-[#FFFAE5] text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-blue-600 dark:text-[#FFD300] hover:underline font-medium text-base md:text-lg inline-flex items-center mt-auto">
                Read more
                <svg
                  className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
