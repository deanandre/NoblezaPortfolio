import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import ProjectSliderButtons from "./ProjectSliderButtons";
import { PROJECTS } from "../constants";

const Projects = () => {
  const [project, setProject] = useState(PROJECTS[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    setProject(PROJECTS[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 max-[640px]:py-0"
    >
      <div className="container mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="font-medium mb-20 text-center text-4xl max-[640px]:mb-10 mt-10 max-[640px]:text-2xl max-[640px]:font-normal"
        >
          Projects
        </motion.h1>
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full px-10 xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none max-[640px]:px-3"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline-num */}
              <div className="text-3xl lg:text-8xl font-extrabold">
                {[project.num]}
              </div>
              {/* project Category */}
              <h2 className="text-2xl lg:text-5xl font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project Description */}
              <p className=" text-justify text-base sm:text-lg md:text-xl">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-sm md:text-xl  text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-gray-400"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black flex justify-center items-center group max-[640px]:w-[50px] max-[640px]:h-[50px]">
                          <BsArrowUpRight className="text-3xl group-hover:text-accent text-white max-[640px]:text-lg" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}

                {/* github project button */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black flex justify-center items-center group max-[640px]:w-[50px] max-[640px]:h-[50px]">
                          <BsGithub className="text-3xl group-hover:text-accent text-white max-[640px]:text-lg" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full xl:w-[50%]"
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[570px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {PROJECTS.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[520px] max-[640px]:h-[220px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full">
                      <img
                        src={project.image}
                        className="object-cover w-full"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <ProjectSliderButtons
                containerStyles="flex gap-2 absolute right-0 xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-white text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
