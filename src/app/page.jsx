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
    link.href = "/cv/Mohammad Tegar Ibrahim CV.pdf"; // Pastikan file cv.pdf ada di folder public
    link.download = "Mohammad_Tegar_Ibrahim_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const content = {
    id: {
      role: "Pengembang Front-end",
      greeting: "Halo, Saya",
      description:
        "Saya seorang mahasiswa jurusan informatika dari Telkom University yang senang belajar dan memiliki rasa ingin tahu yang tinggi. Saya suka mempelajari hal-hal baru melalui bootcamp online. Saya sering mengerjakan proyek-proyek selama kuliah, misalnya untuk ujian tengah semester, tugas akhir semester atau proyek mandiri. Untuk sekarang saya sudah menguasai React.Js dan Next.Js untuk menambah ilmu dibidang front-end. karena beberapa hal tersebut saya mempunyai kemampuan komunikasi yang baik dan dapat bekerja dalam tim maupun individu.",
      buttonText: "Inggris",
    },
    en: {
      role: "Front-end Developer",
      greeting: "Hello, I'm",
      description:
        "I am an Informatics student at Telkom University who enjoys learning and has a strong curiosity. I love exploring new things through online bootcamps. I often work on projects during my studies, such as mid-term exams, final semester assignments, or independent projects. Currently, I have mastered React.js and Next.js to enhance my knowledge in the front-end field. Due to these experiences, I have good communication skills and can work both in a team and independently.",
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
