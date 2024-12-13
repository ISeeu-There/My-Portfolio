"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "1",
    category: "frontend",
    title: "Portfolio Website",
    description: "A modern portfolio showcasing projects and skills.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "React" }],
    image: "/project1.png",
    live: "https://liveproject1.com",
    github: "https://github.com/project1",
  },
  {
    num: "2",
    category: "backend",
    title: "API Service",
    description: "A robust REST API built with Node.js and Express.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/project2.png",
    live: "https://liveproject2.com",
    github: "https://github.com/project2",
  },
  {
    num: "3",
    category: "fullstack",
    title: "E-commerce Platform",
    description: "A scalable e-commerce platform with full-stack capabilities.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Tailwind CSS" },
    ],
    image: "/project3.png",
    live: "https://liveproject3.com",
    github: "https://github.com/project3",
  },
];

const Work = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[38px]">
          {/* Project Slider */}
          <div className="w-full xl:w-[50%]">
            <div className="swiper-slide">
              <Image
                src={projects[selectedProjectIndex].image}
                alt={projects[selectedProjectIndex].title}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Project Details */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div>
              <div className="text-3xl font-extrabold text-transparent text-outline">
                {projects[selectedProjectIndex].num}
              </div>
              <h2 className="text-[42px] font-bold text-white group-hover:text-cyan-500 transition-all duration-500 capitalize">
                {projects[selectedProjectIndex].category} Project
              </h2>
              <p className="text-white/60">
                {projects[selectedProjectIndex].description}
              </p>
              <ul className="flex gap-4">
                {projects[selectedProjectIndex].stack.map((item, index) => (
                  <li key={index} className="text-xl text-cyan-500">
                    {item.name}
                    {index !==
                      projects[selectedProjectIndex].stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/60 my-4"></div>
              <div className="flex gap-4">
                {projects[selectedProjectIndex].live && (
                  <Link href={projects[selectedProjectIndex].live} passHref>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-white hover:text-cyan-500 transition-all">
                            <BsArrowUpRight />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {projects[selectedProjectIndex].github && (
                  <Link href={projects[selectedProjectIndex].github} passHref>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-white hover:text-cyan-500 transition-all">
                            <BsGithub />
                          </span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
            {/* Navigation for projects */}
            <div className="flex gap-4 mt-4">
              {projects.map((project, index) => (
                <button
                  key={index}
                  className={`py-1 px-3 rounded-lg ${
                    index === selectedProjectIndex
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setSelectedProjectIndex(index)}
                >
                  {project.num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
