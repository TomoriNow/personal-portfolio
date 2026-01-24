import React from "react";
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
import django from "../assets/django-logo-negative.png";
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
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      id="skills"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="section-heading">
              Tech Stack
            </h2>
            <p className="section-subheading mx-auto px-4 sm:px-0">
              Tools & technologies I use to bring ideas to life
            </p>
          </div>
        </Reveal>

        <Reveal>
          {/* Modern Card Container */}
          <div className="glass-card p-4 sm:p-8 shadow-glow-sm">
            {/* CSS-Based Slider */}
            <div
              className="slider"
              style={{
                "--height": "120px",
                "--width": "100px",
                "--quantity": techStack.length * 2,
              }}
            >
              <div className="list">
                {techStack.concat(techStack).map((tech, index) => (
                  <div
                    className="item flex flex-col items-center group cursor-pointer"
                    key={index}
                    style={{
                      "--position": index + 1,
                    }}
                  >
                    <div className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-dark-800/50 border border-white/5 group-hover:border-primary-500/30 group-hover:bg-dark-800 transition-all duration-300">
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] md:h-[70px] md:w-[70px] object-contain transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-dark-400 mt-2 sm:mt-3 text-xs sm:text-sm font-medium group-hover:text-primary-400 transition-colors duration-300 text-center max-w-[80px] sm:max-w-none truncate">
                      {tech.alt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .slider {
          width: 100%;
          height: var(--height);
          overflow: hidden;
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 10% 90%,
            transparent
          );
        }
        .slider .list {
          display: flex;
          width: 100%;
          min-width: calc(var(--width) * var(--quantity));
          position: relative;
        }
        .slider .list .item {
          width: var(--width);
          height: var(--height);
          position: absolute;
          left: 100%;
          animation: autoRun 25s linear infinite;
          animation-delay: calc((25s / var(--quantity)) * (var(--position) - 1) - 25s) !important;
        }
        .slider .list .item img {
          width: 100%;
        }
        @keyframes autoRun {
          from {
            left: 100%;
          }
          to {
            left: calc(var(--width) * -1);
          }
        }
        .slider:hover .item {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
