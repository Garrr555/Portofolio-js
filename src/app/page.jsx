"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import { LuLanguages } from "react-icons/lu";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleLanguage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLanguage((prevLang) => (prevLang === "id" ? "en" : "id"));
      setIsTransitioning(false);
    }, 300); // Durasi animasi 500ms
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Mohammad Tegar Ibrahim.pdf"; // Pastikan file cv.pdf ada di folder public
    link.download = "Mohammad_Tegar_Ibrahim.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const content = {
    id: {
      role: "Pengembang Front-end",
      greeting: "Halo, Saya",
      description:
        "seorang Fullstack Developer dengan pengalaman sekitar 1 tahun dalam pengembangan perangkat lunak, dengan spesialisasi pada pengembangan aplikasi web modern. Saya berpengalaman menggunakan TypeScript, React.js, Next.js, Tailwind CSS, Redux Toolkit, Zustand, REST API, FastAPI, Java, Spring Boot, PostgreSQL, dan Git. Saya memiliki pengalaman dalam mengembangkan antarmuka pengguna yang responsif, mengintegrasikan API, membangun layanan backend, serta mengelola database melalui proyek profesional, program magang, dan pengembangan mandiri. Saya merupakan pribadi yang cepat belajar, memiliki kemampuan problem-solving yang baik, serta mampu bekerja secara mandiri maupun kolaboratif dalam tim.",
      buttonText: "Inggris",
    },
    en: {
      role: "Front-end Developer",
      greeting: "Hello, I'm",
      description:
        "as a Fullstack Developer with around 1 years of experience in software development, specializing in modern web application development. Experienced with TypeScript, React.js, Next.js, Tailwind CSS, Redux Toolkit, Zustand, REST APIs, FastAPI, Java, Spring Boot, PostgreSQL, and Git. Experienced in developing responsive user interfaces, integrating APIs, implementing backend services, and managing databases through professional projects, internships, and independent development. A fast learner with strong problem-solving skills who is comfortable working both independently and collaboratively.",
      buttonText: "Indonesian",
    },
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-8">
          <div
            className={`order-2 xl:order-none text-center xl:text-left transition-opacity duration-500 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <span className="text-xl">{content[language].role}</span>
            <h1 className="h1">
              {content[language].greeting} <br />{" "}
              <span className="text-accent">
                Mohammad Tegar <br />
                Ibrahim
              </span>
            </h1>
            <p className="max-w-[500px] mb-5 text-white/80">
              {content[language].description}
            </p>

            <div className="flex flex-col xl:flex-none gap-8 mb-8">
              <div className="flex flex-wrap xl:flex-none justify-center items-center gap-9 xl:justify-start">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                  className="uppercase flex items-center gap-2 xl:w-[200px]"
                >
                  <span className="hidden xl:flex">Download cv</span>
                  <FiDownload className="text-xl" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 xl:w-[200px]"
                >
                  <span className="hidden xl:flex">
                    {content[language].buttonText}
                  </span>
                  <LuLanguages className="text-xl" />
                </Button>
              </div>
              <div className="flex justify-center xl:justify-start items-center">
                <Social
                  containerStyles={`flex gap-6`}
                  iconStyles={`w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover-transition-all duration-500`}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo></Photo>
          </div>
        </div>
      </div>
      <Stats language={language}></Stats>
    </section>
  );
}
