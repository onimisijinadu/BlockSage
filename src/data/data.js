import onlineschool from '../assets/onlineschool.png';
import portfolio from '../assets/portfolio.png';
import rps from '../assets/rps.png';
import schoolimg from '../assets/schoolmanagement.png';
import weather from '../assets/weather.png';

export const MySkills = [
  {
    id: "1",
    frontEnd: "React",
    BackEnd: "Node.js",
  },
  {
    id: "2",
    frontEnd: "Javascript",
    BackEnd: "Express",
  },
  {
    id: "3",
    frontEnd: "TypeScript",
    BackEnd: "PostgreSQL",
  },
  {
    id: "4",
    frontEnd: "Tailwind CSS",
    BackEnd: "REST APIs",
  },
  {
    id: "5",
    frontEnd: "BootStrap",
    BackEnd: "Python",
  },
  {
    id: "6",

    frontEnd: "CSS",
    BackEnd: "PHP",
  },
  {
    id: "7",
    frontEnd: "Html",
    BackEnd: "Django",
  },
];
export const Tools = [
  {
    id: "01",
    DevOps: "Git",
  },
  {
    id: "02",
    DevOps: "GitHub",
  },
];

export const ActiveProjects = [
  {
    id: "1",
    title: "School Management System",
    description:
      "A comprehensive school management system built with React, TailwindCSS and Node.jS. It includes features like student information management, attendance tracking, grade reporting, and administrative dashboards.",
    image: schoolimg,
    github:
      "https://github.com/onimisijinadu/Advanced-School-Management-System.git",
    live: "",
    languages: ["React", "Node.js", "TailwindCSS", "Express"],
  },
  {
    id: "2",
    title: "Online Education Portal",
    description:
      "An online education portal built with HTML, CSS and Javascript. A modern, responsive front-end interface for a student online schooling portal, featuring intuitive dashboards and course management.",
    image: onlineschool,
    github: "https://github.com/onimisijinadu/Online-Education-Portal.git",
    live: "https://onimisijinadu.github.io/Online-Education-Portal/",
    languages: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A fully responsive developer portfolio designed to present my projects, skills, and experience in web development. The platform features interactive project showcases, live demos, and GitHub integrations, reflecting my ability to build modern and scalable web interfaces.",
    image: portfolio,
    github: "https://github.com/onimisijinadu/Online-Education-Portal.git",
    live: "https://onimisijinadu.github.io/Online-Education-Portal/",
    languages: ["React", "TailwindCSS"],
  },
  {
    id: "4",
    title: "Simple Weather Condition App",
    description:
      "A simple weather condition app built with Django and a weather API. It displays current weather information for a given location.",
    image: weather,
    github: "https://github.com/onimisijinadu/weather-conditions.git",
    live: "https://weather-conditions-72g1.onrender.com",
    languages: ["Django", "Python", "WeatherAPI"],
  },
  {
    id: "5",
    title: "Simple RPS Game",
    description:
      "A simple Rock Paper Scissors game built with HTML, CSS and JavaScript.",
    image: rps,
    github: "https://github.com/onimisijinadu/RPSGame.git",
    live: "https://onimisijinadu.github.io/RPSGame/",
    languages: ["HTML", "CSS", "JavaScript"],
  },
];
export const Experiences = [
  {
    id: 1,
    year: "2025 - Till Present",
    role: "Junior Frontend Developer",
    details:
      "This portfolio website serves as a central hub for my work as a web developer. It features selected projects, practical applications, and experiments built with modern technologies. The goal is to demonstrate my problem-solving skills, development process, and passion for creating clean, responsive, and user-friendly web experiences.",
    company: "FreakyPlus",
    languages: ["Html", "CSS", "JavaScript"],
  },
  {
    id: 2,
    year: "2024-2025",
    role: "Frontend Developer",
    details:
      "This portfolio website serves as a central hub for my work as a web developer. It features selected projects, practical applications, and experiments built with modern technologies. The goal is to demonstrate my problem-solving skills, development process, and passion for creating clean, responsive, and user-friendly web experiences.",
    company: "LazerWebs",
    languages: ["React", "TailwindCSS"],
  },
];
