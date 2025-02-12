"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import links from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

export default function MobileNavbar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Tegar<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col  justify-center gap-8 ">
          {links.map((link, i) => {
            const IconComponent = link.logo;
            return (
              <Link
                href={link.path}
                key={i}
                className={`${
                  link.path === pathname && "text-accent"
                } text-xl capitalize hover:text-accent transition-all flex items-center gap-2`}
              >
                <IconComponent className="text-2xl" />{" "}
                <span
                  className={`${
                    link.path === pathname &&
                    "text-accent border-b-2 border-accent transition-all duration-300 ease-in-out translate-x-2"
                  } `}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
