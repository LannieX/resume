"use client";

import { SiNodedotjs, SiExpress,SiFlutter, SiSwift,SiMysql } from "react-icons/si";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  
} from "react-icons/fa";
import React from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "/components/ui/tabs.jsx";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description: "I believe in joining a team. It will be a great opportunity for me to develop myself and bring happiness and wholeness to all of us.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Maruslam Darama",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+66) 93 538 6680",
    },
    {
      fieldName: "Experience",
      fieldValue: "0 Years 6 Months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Thailand",
    },
    {
      fieldName: "Email",
      fieldValue: "lan29138@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Thai, English, Malay, Arabic",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description: "6 Months of experience.",
  items: [
    {
      company: "Ai And Robotics Ventures",
      position: "Front End Developer (Intership)",
      duration: "November 2023 - March 2024",
    },
    {
      company: " YINGO HOSPITAL",
      position: "IT Support (Intership)",
      duration: "March 2023 - May 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description: "All educational institutions are in the southern region of Thailand.",
  items: [
    {
      institution: "Princess naradhiwas university.",
      degree: "Computer Engineering",
      duration: "2020 - 2024",
    },
    {
      institution: "Darunsat witya Islamic High School.",
      degree: "High School (Science - Math)",
      duration: "2017 - 2019",
    },
  ],
};

const skill = {
  title: "My Skill",
  description: "Some skills through education Some skills have been used for projects.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiNodedotjs />,
      name: "NextJS",
    },
    {
      icon: <SiExpress />,
      name: "ExpressJS",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiSwift />,
      name: "Swift",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiMysql />,
      name: "SQL",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{experience.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[800px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[290px] min-h-[70px] text-center lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full min-h-[480px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0 pt-2">{education.description}</p>
                <ScrollArea className="h-[800px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-1 gap-[30px]">
                    {education.items.map((item, index)=> {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[350px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 pt-0">{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{skill.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{skill.description}</p>
                <ScrollArea className="h-[800px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-3 mt-7">
                {skill.skillList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                          <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="capitalize">{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                  
                })}
              </ul>
              </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ScrollArea className="h-[800px]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 xl:gap-[25px] gap-3 mt-7">
                {about.info.map((item, index) => {
                  return <li key={index} className="flex items-center justify-center xl:justify-start gap-5">
                  <span className="text-white/60">{item.fieldName}</span>
                  <span className="text-xl">{item.fieldValue}</span>
                </li>
              })}
              </ul>
              </ScrollArea>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
