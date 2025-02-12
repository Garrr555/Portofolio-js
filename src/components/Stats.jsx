"use client";

import Countup from "react-countup";

const stat = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 26,
    text: "Project Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 500,
    text: "Code Commit",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-auto gap-6 max-w-[80vw] xl:max-w-none">
          {stat.map((item, i) => {
            return (
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
