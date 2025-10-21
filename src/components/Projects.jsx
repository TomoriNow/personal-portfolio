import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Link,
  Tooltip,
} from "@heroui/react";
import { Image as NextImage } from "@heroui/react";
import { FiGithub } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";

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
        { name: "seaborn"},
        { name: "pandas"},
      ],
      isProjectDisabled: false,
      isGithubDisabled: false,
    },
  ];

  const fallbackSrc = "/images/fallback.webp";

  return (
    <section id="projects" className="px-4 md:px-8 lg:px-16 py-12 bg-black">
      <div className={`flex flex-col items-center md:items-start w-full ${className || ""}`}>
        <Reveal className="text-start w-full">
          <div className="flex items-center">
            <h2 className='text-4xl font-bold mb-4 primary-color'>Projects</h2>
            <div className="relative ml-8 w-full rounded-full md:w-auto md:flex-grow h-0.5 bg-white opacity-20" />
          </div>
        </Reveal>
        <div className="flex flex-col mt-8 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 w-full items-stretch">
          {projects.map((project, index) => (
            <Reveal key={index} className="flex justify-center items-stretch">
              <div className="w-full h-full">
                <Card
                  radius="sm"
                  className="rounded-xl shadow-xl w-full h-full hover:bg-neutral-900 border border-neutral-700/60 hover:border-neutral-700/70 bg-neutral-950 hover:-translate-y-2 transition-all duration-300"
                >
                  <CardHeader className="flex flex-col items-start p-0">
                    <div className="w-full aspect-video relative">
                      <NextImage
                        removeWrapper
                        className="absolute object-cover w-full h-full rounded-t-xl"
                        src={
                          project.img
                            ? `/images/projects/${project.img}`
                            : fallbackSrc
                        }
                        fallbackSrc={fallbackSrc}
                        alt={project.name}
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="flex flex-col items-start p-5 pb-0 h-auto">
                    <div className="flex flex-row gap-2 h-[25px]">
                      {project.tools.map((tool, idx) => (
                        <Tooltip key={idx}>
                          <div className="h-[25px] w-[25px] text-white">
                            {mapIcon(tool.name, "w-full h-full")}
                          </div>
                        </Tooltip>
                      ))}
                    </div>
                    <div className="flex w-full mt-5 items-center">
                      <p className="text-white text-xl font-medium leading-7">
                        {project.name}
                      </p>
                    </div>
                    <span className="primary-color font-bold text-sm border border-primary p-1 px-2 rounded-full mt-3">
                      {project.projectType}
                    </span>
                    <p className="mt-3 text-neutral-400 line-clamp-4">
                      {project.description}
                    </p>
                  </CardBody>
                  <CardFooter className="justify-start items-center gap-3 p-5">
                  <div className="flex gap-3">
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 rounded-sm border border-neutral-700 bg-transparent group transition-all duration-300 hover:bg-primary hover:border-primary ${project.isProjectDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
                      aria-label="See project"
                      title="See project"
                    >
                      <MdArrowForwardIos
                        className="text-neutral-400 group-hover:text-white transition-colors duration-300"
                        size={18}
                      />
                    </a>
                    <a 
                      href={`https://github.com/${project.githubLink}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-10 h-10 rounded-sm border border-neutral-700 bg-transparent group transition-all duration-300 hover:bg-primary hover:border-primary ${project.isGithubDisabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}`}
                      aria-label="Project repository"
                      title="Project repository"
                    >
                      <FiGithub 
                        className="text-neutral-400 group-hover:text-white transition-colors duration-300" 
                        size={22} 
                      />
                    </a>
                  </div>
                  </CardFooter>
                </Card>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-12 relative w-full rounded-full md:w-auto md:flex-grow h-0.5 bg-white opacity-20" />
    </section>
    
  );
};

export default Projects;