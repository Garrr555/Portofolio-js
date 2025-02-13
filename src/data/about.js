import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

export const about = {
  title: "About Me",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iusto quia voluptatibus accusamus deserunt itaque inventore ex.",
  info: [
    { fieldName: "Name", fieldValue: "Mohammad Tegar Ibrahim" },
    { fieldName: "Phone", fieldValue: "(+62) 812 2914 8974" },
    { fieldName: "Experience", fieldValue: "1 Year" },
    { fieldName: "Instagram", fieldValue: "moh_garrr" },
    { fieldName: "Nationality", fieldValue: "Indonesian" },
    { fieldName: "Email", fieldValue: "mohammadtegaribrahim@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English,Indonesian" },
  ],
};

export const experience = {
  icon: "/asset/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iusto quia voluptatibus accusamus deserunt itaque inventore ex.",
  items: [
    {
      company: "Telkom University",
      position: "Student",
      duration: "2021 - 2025",
    },
    {
      company: "Alterra Academy",
      position: "Front-end Developer Intern",
      duration: "Summer 2024",
    },
    {
      company: "E-commerce",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "E-commerce",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "E-commerce",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
    {
      company: "E-commerce",
      position: "Freelance Web Developer",
      duration: "2023 - 2024",
    },
  ],
};

export const education = {
  icon: "/asset/resume/badge.svg",
  title: "My Education",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iusto quia voluptatibus accusamus deserunt itaque inventore ex.",
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
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias iusto quia voluptatibus accusamus deserunt itaque inventore ex.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};
