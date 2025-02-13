"use client";

import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import services from "@/data/services";

export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => {
            return (
              <div
                key={i}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex w-full justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full flex justify-center items-center transition-all duration-500 hover:-rotate-45 bg-white group-hover:bg-accent"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] leading-none text-white font-bold group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60 group-hover:text-white transition-all duration-500">{service.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
