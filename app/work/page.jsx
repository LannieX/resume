"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project1",
    description: "Website a Resume.",
    stack: [{ name: "NextJS" }],
    image: "/assets/work/web1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project2",
    description: "Website showing real time You can choose between a dark theme and a light theme.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "JavaScript" },
    ],
    image: "/assets/work/web2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project3",
    description: "Website Login page.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
    ],
    image: "/assets/work/web4.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Project4",
    description: "Online medical service booking website.",
    stack: [{ name: "ReactJS" },{ name: "ExpressJS" }, { name: "PhpMyAdmin" }],
    image: "/assets/work/web3.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "App Develop",
    title: "Project5",
    description: "Application for making a decision to buy OTOP products.",
    stack: [{ name: "Flutter" }, { name: "Firebase" }],
    image: "/assets/work/app1.png",
    live: "",
    github: "",
  },
  
  {
    num: "06",
    category: "App Develop",
    title: "Project6",
    description: "Application for Testing CoreML.",
    stack: [{ name: "Swift" }, { name: "CoreML" }],
    image: "/assets/work/app2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  const [project, setProject] = useState(projects[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] cursor-pointer group">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover duration-300">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 cursor-pointer">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Githup repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerview={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
