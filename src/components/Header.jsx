import Link from "next/link";
import Navbar from "./Navbar";
import { Button } from "./ui/button";
import MobileNavbar from "./MobileNavbar";

export default function Header (){
    return (
      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              Tegar <span className="text-accent">.</span>
            </h1>
          </Link>

          {/* Desktop Navbar */}
          <div className="hidden xl:flex items-center gap-8">
            <Navbar />
            <Link href={"/contact"}>
              <Button>Hire me</Button>
            </Link>
          </div>

          {/* Mobile Navbar */}
            <div className="xl:hidden">
              <MobileNavbar/>
            </div>

        </div>
      </header>
    );
}