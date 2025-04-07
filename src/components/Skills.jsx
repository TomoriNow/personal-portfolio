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
    <section
      className="py-10 bg-gradient-to-b from-black via-gray-900 to-black"
      id="skills"
    >
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-white mb-2">
              My Tech Stack
            </h2>
            <p className="text-gray-400 text-lg">
              Tools & technologies I use to build great things
            </p>
          </div>
        </Reveal>

        <Reveal>
          {/* CSS-Based Slider */}
          <div className="relative overflow-hidden pt-5 mb-10 p-5 rounded-lg bg-gray-800 border border-gray-700">
            <div
              className="slider"
              style={{
                "--height": "130px",
                "--width": "130px",
                "--quantity": techStack.length * 2,
              }}
            >
              <div className="list">
                {techStack.concat(techStack).map((tech, index) => (
                  <div
                    className="item flex flex-col items-center"
                    key={index}
                    style={{
                      "--position": index + 1,
                    }}
                  >
                    <img
                      src={tech.src}
                      alt={tech.alt}
                      className="h-[100px] object-contain transition-transform duration-300 w-[50px] md:w-[100px] p-2"
                    />
                    <span className="text-gray-300 mt-2 text-sm text-center">
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
          animation: autoRun 20s linear infinite;
          transition: filter 0.5s;
          animation-delay: calc((20s / var(--quantity)) * (var(--position) - 1) - 20s) !important;
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
          filter: grayscale(1);
        }
        .slider .item:hover {
          filter: grayscale(0);
        }
        .slider[reverse="true"] .item {
          animation: reversePlay 10s linear infinite;
        }
        @keyframes reversePlay {
          from {
            left: calc(var(--width) * -1);
          }
          to {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
