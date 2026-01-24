import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "../utils/Reveal";
import { mapIcon } from "../utils/IconMapper";

const Projects = ({ className }) => {
  const projects = [
    {
      name: "Self-Supervised Image Segmentation with Pre-trained VGG19 and U-Net architecture",
      description:
        "This mini-project tackles the challenge of segmenting a single image of the John Curtin School of Medical Research at ANU into meaningful regions using a self-supervised learning approach with a Convolutional Neural Network.",
      img: "CV_Miniproject_results.png",
      githubLink: "TomoriNow/computervision_miniproject",
      projectType: "Machine Learning",
      tools: [
        { name: "python"},
        { name: "scikitlearn"},
        { name: "numpy"},
        { name: "pytorch"},
        { name: "seaborn"},
        { name: "opencv"},
      ],
      isProjectDisabled: true,
      isGithubDisabled: false,
    },
    {
      name: "Microsoft Stock Price Prediction using LSTM",
      description:
        "A deep learning project that uses Long Short-Term Memory (LSTM) neural networks to predict Microsoft stock prices based on historical data.",
      img: "timeseries_project.png",
      githubLink: "TomoriNow/timeseries_stock_prediction_project_msft",
      projectType: "Machine Learning",
      tools: [
        { name: "python"},
        { name: "scikitlearn"},
        { name: "numpy"},
        { name: "tensorflow"},
        { name: "seaborn"},
        { name: "pandas"},
      ],
      isProjectDisabled: true,
      isGithubDisabled: false,
    },
    {
      name: "PowerPlate",
      description:
        "PowerPlate leverages advanced AI to democratize preventative healthcare, focusing on combating off-track demotivation - the tendency to abandon health goals after minor setbacks.",
      img: "power-platee.png",
      githubLink: "TomoriNow/power-plate",
      projectLink: "https://power-plate.vercel.app/",
      projectType: "Full-stack",
      tools: [
        { name: "tailwind"},
        { name: "react"},
        { name: "vue"},
        { name: "vite"},
      ],
      isProjectDisabled: true,
      isGithubDisabled: false,
    },
    {
      name: "ANUISA Website",
      description:
        "A platform that seeks to connect Indonesian talents within the ANU community to industry and beyond, while fostering employability and idea exchange.",
      img: "anuisa.png",
      githubLink: "fiardiel/anuisa_proj",
      projectLink: "https://anuisa.org/",
      projectType: "Full-stack",
      tools: [
        { name: "nextJS"},
        { name: "tailwind"},
        { name: "typescript"},
      ],
      isProjectDisabled: false,
      isGithubDisabled: false,
    },
    {
      name: "Sean's Portfolio",
      description:
        "Website to showcase my projects and skills. Built with ReactJS, Vite + Vue and Tailwind CSS.",
      img: "sean-portfolio.png",
      githubLink: "TomoriNow/personal-portfolio",
      projectLink: "https://sean-galant.vercel.app",
      projectType: "Full-stack",
      tools: [
        { name: "tailwind"},
        { name: "react"},
        { name: "vue"},
        { name: "vite"},
      ],
      isProjectDisabled: false,
      isGithubDisabled: false,
    },
    {
      name: "TIME Space",
      description:
        "Time Space is an interactive, web-based platform designed with a space-inspired theme. It serves as both a digital showcase and an engagement hub for the TIME Space group of the TIME Lab research cluster at Griffith University.",
      img: "tech-launcher.png",
      githubLink: "Terrencezzz/time-lab-ml.github.io/tree/main/MachineLearningSolution",
      projectLink: "https://timespace-3d.vercel.app/",
      projectType: "Machine Learning",
      tools: [
        { name: "nextJS"},
        { name: "tailwind"},
        { name: "typescript"},
        { name: "python"},
        { name: "scikitlearn"},
        { name: "numpy"},
        { name: "tensorflow"},
        { name: "opencv"},
      ],
      isProjectDisabled: false,
      isGithubDisabled: false,
    },
  ];

  const fallbackSrc = "/images/fallback.webp";

  return (
    <section id="projects" className="relative py-16 sm:py-24">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className={`relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 ${className || ""}`}>
        <Reveal>
          <div className="flex flex-col items-center md:flex-row md:items-center gap-4 mb-12 sm:mb-16 text-center md:text-left">
            <h2 className="section-heading whitespace-nowrap">Projects</h2>
            <div className="glow-line flex-grow hidden md:block" />
          </div>
        </Reveal>
        
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <article className="glass-card overflow-hidden group card-hover h-full flex flex-col">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={project.img ? `/images/projects/${project.img}` : fallbackSrc}
                    alt={project.name}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent opacity-60" />
                  
                  {/* Project type badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary-500/80 to-accent-500/80 backdrop-blur-sm text-white">
                    {project.projectType}
                  </span>
                </div>
                
                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  {/* Tech icons */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, idx) => (
                      <div 
                        key={idx} 
                        className="w-6 h-6 text-dark-400 hover:text-primary-400 transition-colors"
                        title={tool.name}
                      >
                        {mapIcon(tool.name, "w-full h-full")}
                      </div>
                    ))}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-dark-400 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex gap-3 mt-6 pt-4 border-t border-white/5">
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        project.isProjectDisabled 
                          ? 'opacity-40 cursor-not-allowed bg-dark-800 text-dark-500' 
                          : 'bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-glow-sm hover:scale-105'
                      }`}
                      onClick={e => project.isProjectDisabled && e.preventDefault()}
                    >
                      <FiExternalLink size={16} />
                      View
                    </a>
                    <a 
                      href={`https://github.com/${project.githubLink}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-300 ${
                        project.isGithubDisabled 
                          ? 'opacity-40 cursor-not-allowed border-dark-700 text-dark-500' 
                          : 'border-white/10 text-white hover:border-primary-500/50 hover:bg-white/5'
                      }`}
                      onClick={e => project.isGithubDisabled && e.preventDefault()}
                    >
                      <FiGithub size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 mt-16">
        <div className="glow-line" />
      </div>
    </section>
  );
};

export default Projects;