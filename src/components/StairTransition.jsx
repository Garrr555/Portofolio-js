"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathname = usePathname();
  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="w-screen h-screen fixed left-0 top-0 right-0 pointer-events-none flex z-40">
            <Stairs />
          </div>

          <motion.div
            className="w-screen h-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </div>
  );
}
