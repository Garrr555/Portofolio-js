"use client";

import { motion } from "framer-motion";
import { Swiper, swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { projects } from "@/data/projects";
import { useEffect, useState } from "react";
import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtn from "@/components/WorkSliderBtn";
import CustomFetch from "@/config/db";

export default function Work() {
  const [events, setEvents] = useState([]);
  console.log(events);

  // const [project, setProject] = useState(events[0]);
  // console.log(project);
  const [index, setIndex] = useState(0);

  const project = events[index];
  console.log(project);

  const getEventByUser = async () => {
    const response = await CustomFetch.get("/events/user");
    console.log(response);
    setEvents(response.data.events);
  };

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    // setProject(events[currentIndex]);
    setIndex(currentIndex);
  };

  useEffect(() => {
    getEventByUser();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline flex items-center gap-5">
                {index + 1} <span className="text-6xl">[Fullstack]</span>
              </div>
              <h2 className="font-bold leading-none text-white text-[42px] group-hover:text-accent transition-all duration-500 capitalize">
                {project?.name}
              </h2>
              <p className="text-xl text-accent text-start ">
                {project?.description}
              </p>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={""}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <div className={`${project?.live2 ? "" : "hidden"}`}>
                  <Link href={""}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                          <FiLogIn className="text-3xl text-white group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Login Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>

                <Link href={""}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center group">
                        <BsGithub className="text-3xl text-white group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="mb-12 xl:h-[520px]"
            >
              {events.map((project, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project?.image}
                          fill
                          alt={project?.title}
                          className="object-cover"
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtn
                containerStyles={`flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none`}
                btnStyles={` bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all`}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
