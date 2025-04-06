import React from "react";
import { motion } from "framer-motion";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import python from "../assets/Python-logo-notext.svg.png";
import java from "../assets/Java_programming_language_logo.svg.png";
import sql from "../assets/Postgresql_elephant.svg.png";
import flutter from "../assets/flutter.png";
import go from "../assets/Go_Logo_Blue.svg.png";
import django from "../assets/django_logo.png";
import spring from "../assets/Spring_Boot.svg.png";
import Reveal from "../utils/Reveal";

const techStack = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: react, alt: "React" },
  { src: python, alt: "Python" },
  { src: java, alt: "Java" },
  { src: flutter, alt: "Flutter" },
  { src: go, alt: "Go" },
  { src: django, alt: "Django" },
  { src: sql, alt: "PostgreSQL" },
  { src: spring, alt: "Spring Boot" },
];

const Skills = () => {
return (
    <section className="py-10 bg-gradient-to-b from-black via-gray-900 to-black" id="skills">
        <div className="max-w-6xl mx-auto px-4">
            <Reveal>
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-white mb-2">My Tech Stack</h2>
                    <p className="text-gray-400 text-lg">Tools & technologies I use to build great things</p>
                </div>
            </Reveal>
            
            <Reveal>
            {/* Marquee */}
            <div className="relative overflow-hidden pt-5 mb-10 p-5 rounded-lg bg-gray-800 border border-gray-700">
                <motion.div
                    className="flex"
                    initial={{ x: 0 }}
                    animate={{ x: window.innerWidth < 768 ? "-300%" : "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 10,
                        ease: "linear",
                    }}
                >
                    <div className="flex gap-10 px-4">
                        {techStack.concat(techStack).map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center w-24 md:w-32"
                            >
                                <img
                                    src={tech.src}
                                    alt={tech.alt}
                                    className="h-[100px] object-contain transition-transform duration-300 w-[50px] md:w-[100px]"
                                />
                                <span className="text-gray-300 mt-2 text-sm text-center">{tech.alt}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            </Reveal>
        </div>
    </section>
);
};

export default Skills;
