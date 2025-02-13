"use client";

import stat from "@/data/stats";
import Countup from "react-countup";

export default function Stats({ language }) {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80vw] xl:max-w-none">
          {stat[language].map((item, i) => (
            <div
              key={i}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <Countup
                end={item.num}
                delay={2}
                duration={5}
                className="font-extrabold text-4xl xl:text-6xl"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } text-white/80 leading-snug`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
