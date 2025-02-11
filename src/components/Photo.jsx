"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="w-[298px] h-[340px] mix-blend-lighten"
        >
          <Image
            src={"/photo2.png"}
            priority
            quality={100}
            fill
            alt=""
            className="object-cover object-center rounded-full "
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
