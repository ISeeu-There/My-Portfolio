"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaWordpressSimple,
  FaLinux,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { MdOutlineBadge } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About Data
const about = {
  title: "About Me",
  description:
    "I am a passionate and dedicated individual with a strong focus on web development.",
  info: [
    { fieldName: "Name", fieldValue: "Luke Coleman" },
    { fieldName: "Phone", fieldValue: "(+213 663869066)" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "LinkedIn", fieldValue: "Assem Atout" },
    { fieldName: "Nationality", fieldValue: "Algerian" },
    { fieldName: "Email", fieldValue: "atoutassem@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, English" },
  ],
};

// Experience Data
const experience = {
  icon: <MdOutlineBadge />,
  title: "My Experience",
  description: "A list of my professional experiences in various roles.",
  items: [
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
    { company: "Gescall", position: "Agent", duration: "2022 - 2023" },
  ],
};

// Education Data
const education = {
  icon: <LuGraduationCap />,
  title: "My Education",
  description: "The key milestones in my educational journey.",
  items: [
    {
      institution: "Malek Ben Nabi High School",
      degree: "Baccalaureate",
      duration: "2019 - 2020",
    },
    {
      institution: "INSFP Bouismail",
      degree: "TS - Web Developer & Multimedia",
      duration: "2022 - 2024",
    },
    {
      institution: "JULANAR Staouali",
      degree: "Cabin Crew Training",
      duration: "60 H",
    },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description: "Technologies and tools I excel in.",
  skillslise: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaWordpressSimple />, name: "WordPress" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiMysql />, name: "MySQL" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="font-bold text-xl">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="font-bold text-xl">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="font-bold text-xl">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="font-bold text-xl">
              About Me
            </TabsTrigger>
          </TabsList>

          <div className="min-h-[70px] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-stone-800 h-[100px] rounded-xl flex flex-col p-4"
                      >
                        <span className="text-cyan-500 ">{item.duration}</span>
                        <h3 className="">{item.position}</h3>
                        {/* DOt */}
                        <div className="flex items-center justify-center sm:justify-start gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                          <p className="text-white/60 text-center sm:text-left">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-stone-800 h-[100px] rounded-xl flex flex-col p-4"
                      >
                        <span className="text-cyan-500">{item.duration}</span>
                        <h3 className="text-xl">{item.degree}</h3>
                        <p>{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {skills.skillslise.map((skill, index) => (
                      <li
                        key={index}
                        className="bg-stone-800 h-[60px] rounded-xl flex items-center justify-center"
                      >
                        <div className="flex items-center gap-4">
                          <div>{skill.icon}</div>
                          <p className="text-xl">{skill.name}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About Section */}
            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((info, index) => (
                    <li
                      key={index}
                      className="bg-stone-800 h-[60px] rounded-xl flex items-center justify-between p-4"
                    >
                      <span className="text-cyan-500 font-bold text-xl">
                        {info.fieldName}:
                      </span>
                      <span>{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
