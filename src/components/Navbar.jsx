"use client";

import links from "@/lib/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, i) => {
        const IconComponent = link.logo
        return (
          <Link
            href={link.path}
            key={i}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium transition-all hover:text-accent flex gap-2`}
          >
            <IconComponent className="text-2xl" />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
