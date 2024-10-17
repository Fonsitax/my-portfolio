import React from "react";

const projects = [
  {
    title: "Geonic Reader",
    imageUrl: "geography-edu.png",
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
    description: (
      <p className="text-justify">
        Do your <strong>e</strong>yes read <strong>f</strong>aster than your <strong>b</strong>rain? My solo and graduation project. Geonic Reader is a geography learning platform with bionic reading mode designed to help users with dyslexia and concentration challenges.
      </p>
    ),
    
    link: "https://geonic-reader.onrender.com/",
  },
  {
    title: "Rock Paper Scissors",
    imageUrl: "rock-paper-scissors.png",
    techStack: ["Node.js", "JSVanilla", "DOMmanipulation"],
    description: ( 
      <p className="text-justify">
      Coming up next. I’m building a Rock-Paper-Scissors game with Node.js, transforming it into an interactive single-page app using DOM manipulation. 
      Thanks for your patience and stay tuned!
      </p>
      ), 
      
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="flex h-full p-6 md:p-20 bg-[#F1F5F9] dark:bg-[#10162f]">    
      <section className="py-4 px-4 mx-auto w-full max-w-screen-lg lg:py-16">  
        <div className="text-left">
          <h1 className=" text-4xl md:text-5xl font-bold text-[#10162F] dark:text-[#FFD300] mb-6 opacity-0 animate-fade-in-up delay-1000">
            My Projects 🚀
          </h1>
          <p className="text-lg"> 
          Welcome to my projects showcase! Here, you'll find a collection of work I've created both during my Bootcamp and in my free time. 
          Each project reflects my journey into tech, highlighting my skills in different types of web development, problem-solving, and creativity. 
          Whether they were built as part of my learning or passion projects, 
          these are a testament to my growth and enthusiasm for building engaging, impactful digital experiences.
          </p>
          <br />
       </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card flex flex-col bg-[#FFFFFF] dark:bg-[#34394C] border border-[#707382] dark:border-[#FFFAE5] rounded-lg p-6 md:p-8 
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#F1F5F9] dark:hover:bg-[#2D3748] hover:border-[#3B82F6] dark:hover:border-[#FFD300]"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-[#10162F] dark:text-[#FFD300] mb-3">
                  {project.title}
                </h3>
              </div>

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
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
