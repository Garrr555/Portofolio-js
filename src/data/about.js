import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
  FaVuejs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

import {
  RiFileWord2Fill,
  RiFilePpt2Fill,
  RiSupabaseFill,
  RiFileExcelFill,
} from "react-icons/ri";

import { TbStack2 , TbStack2Filled, TbHierarchy3} from "react-icons/tb";

export const about = {
  title: "About Me",
  description:
    "I am a passionate front-end developer with a strong foundation in web development technologies. I specialize in creating responsive and dynamic web applications using React.js and Next.js. With a keen interest in continuous learning, I actively enhance my skills through online bootcamps and hands-on projects. My experience includes freelance and internship roles, where I have honed my ability to work both independently and within a team.",
  info: [
    { fieldName: "Name", fieldValue: "Mohammad Tegar Ibrahim" },
    { fieldName: "Phone", fieldValue: "(+62) 812 2914 8974" },
    { fieldName: "Experience", fieldValue: "2 Year" },
    { fieldName: "Instagram", fieldValue: "moh_garrr" },
    { fieldName: "Nationality", fieldValue: "Indonesian" },
    { fieldName: "Email", fieldValue: "mohammadtegaribrahim@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English,Indonesian" },
    { fieldName: "Github", fieldValue: "Garrr555" },
    { fieldName: "Portofolio", fieldValue: "https://tegar-fe.vercel.app" },
  ],
};

export const experience = {
  icon: "/asset/resume/badge.svg",
  title: "My Experience",
  description:
    "I have experience in front-end development, specializing in building interactive and responsive websites using React.js and Next.js. Throughout my journey, I have worked on various projects, including e-commerce platforms, blogs, portfolio websites, and web applications. My expertise includes implementing modern UI/UX principles, optimizing performance, and ensuring seamless user experiences.",
  items: [
    {
      company: "Telkom University",
      position: "Informatics Student",
      duration: "[June,2021] - [August,2025]",
    },
    {
      company: "Makers Institue",
      position: "Fullstack Developer Intern",
      duration: "[August,2025] - [July,2026]",
    },
    {
      company: "Alterra Academy",
      position: "Front-end Developer Intern",
      duration: "[June,2024] - [June,2024]",
    },
    {
      company: "E-commerce",
      position: "Freelance Web Developer",
      duration: "[2023] - [2024]",
    },
    {
      company: "Blog & News Website",
      position: "Freelance Web Developer",
      duration: "[2024] - [2025]",
    },
    {
      company: "Web Application",
      position: "Freelance Web Developer",
      duration: "[2024] - [2025]",
    },
    {
      company: "Portfolio Website",
      position: "Freelance Web Developer",
      duration: "[2023] - [2024]",
    },
  ],
};

export const education = {
  icon: "/asset/resume/badge.svg",
  title: "My Education",
  description:
    "I have pursued various educational programs to enhance my skills in web development, specializing in front-end technologies like React.js and Next.js. Through bootcamps and online courses, I have gained hands-on experience in building scalable web applications and improving user experience.",
  items: [
    {
      institution: "Kampus Merdeka",
      degree: "Front-end with React",
      duration: "2024",
    },
    {
      institution: "Online Course Platform",
      degree: "Fullstack Web Development Bootcamp",
      duration: "2024",
    },
    {
      institution: "Dicoding",
      degree: "Fullstack Web Development ",
      duration: "2023 - 2024",
    },
    {
      institution: "Online Course",
      degree: "Front-end Track",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "React.js Track",
      duration: "2023",
    },
    {
      institution: "Online Course",
      degree: "Fullstack with Next.js Track",
      duration: "2023",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "As a front-end developer, I have expertise in modern web technologies, specializing in building responsive, high-performance applications. I am proficient in JavaScript frameworks like React.js and Next.js, and I leverage tools such as Tailwind CSS and Bootstrap for efficient UI development. Additionally, I have experience with backend technologies like Node.js and Firebase for seamless integration.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
      link: "https://www.typescriptlang.org/",
    },
    {
      icon: <FaReact />,
      name: "React.js",
      link: "https://react.dev/",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      link: "https://nextjs.org/",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      icon: <RiSupabaseFill />,
      name: "Supabase",
      link: "https://supabase.com/",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
      link: "https://vuejs.org/",
    },
    {
      icon: <TbHierarchy3 />,
      name: "Nextplatform",
      link: "https://www.nextplatform.ai",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
      link: "https://getbootstrap.com/",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
      link: "https://nodejs.org/",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
      link: "https://firebase.google.com/",
    },
    {
      icon: <RiFileWord2Fill />,
      name: "Word",
      link: "https://www.microsoft.com/microsoft-365/word",
    },
    {
      icon: <RiFilePpt2Fill />,
      name: "PowerPoint",
      link: "https://www.microsoft.com/microsoft-365/powerpoint",
    },
    {
      icon: <RiFileExcelFill />,
      name: "Excel",
      link: "https://www.microsoft.com/microsoft-365/excel",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      link: "https://www.figma.com/",
    },
  ],
};
