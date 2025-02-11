"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Divide } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <div>
      <AnimatePresence>
        <div key={pathname}>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
            }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
          {children}
        </div>
      </AnimatePresence>
    </div>
  );
}
