// ============================================================
// DATA.TS — Your Portfolio Data (Edit this file to personalize)
// ============================================================
// This is the ONLY file you need to edit to make the portfolio yours.
// Fill in your details below and the entire site will update automatically.
// Browse https://react-icons.github.io/react-icons/ to find icons for your skills.
// ============================================================

import { FiHome, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbUserSquare } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiThreedotjs,
  SiG2,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";
import { LuSquareCode } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";

// ──────────────────────────────────────────────
// SKILLS — Add/remove your tech stack here.
// Each skill needs: name (string), icon (imported icon component), color (hex color code).
// Find icons at: https://react-icons.github.io/react-icons/
// ──────────────────────────────────────────────
export const skills = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "ReactJS", icon: FaReact, color: "#61DAFB" },
  { name: "NextJS", icon: SiNextdotjs, color: "var(--foreground)" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "NodeJS", icon: FaNodeJs, color: "#83CD29" },
  { name: "ExpressJS", icon: SiExpress, color: "var(--foreground)" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGit, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "var(--foreground)" },
];

// ──────────────────────────────────────────────
// NAVBAR — Customize your navigation links.
// "scroll" type links scroll to a section on the page.
// "link" type links open an external URL in a new tab.
// Replace the LinkedIn and GitHub URLs with your own profile links.
// ──────────────────────────────────────────────
type NavbarItem = {
  name: string;
  type: "scroll" | "link";
  icon: React.ElementType;
  size: string;
  url?: string;
};
export const navbarData: NavbarItem[] = [
  { name: "Home", type: "scroll", icon: FiHome, size: "18px" },
  { name: "About", type: "scroll", icon: TbUserSquare, size: "18px" },
  { name: "Projects", type: "scroll", icon: LuSquareCode, size: "18px" },
  { name: "Contact", type: "scroll", icon: FiMail, size: "18px" },
  {
    name: "LinkedIn",
    type: "link",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/pratik-srivastava-85000026b",
    size: "18px",
  },
  {
    name: "Github",
    type: "link",
    icon: IoLogoGithub,
    url: "https://github.com/PratikSrivastava028",
    size: "18px",
  },
];

// ──────────────────────────────────────────────
// PROJECTS — Showcase your work here.
// For each project, provide:
//   - name: Project title
//   - description: One-line description
//   - points: 2-4 bullet points about the project
//   - techStack: Technologies used (with icon and color)
//   - liveLink: Deployed project URL (or "#" if not deployed)
//   - githubLink: GitHub repo URL (or "#" if private)
//   - image: Screenshot path — place images in /public/img/ folder
//
// You can add or remove projects as needed. Recommended: 2-4 projects.
// A demo image "projectimage.jfif" is provided — replace with your own screenshots.
// ──────────────────────────────────────────────
export const projects = [
  {
    name: "ShopMantra",
    description: "E-commerce platform with cart and secure payment integration.",
    points: [
      "Enables users to browse products, place orders, and make secure online payments.",
      "Includes a seller dashboard to manage products, track sales, and view analytics through interactive graphs.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name:"Express.js",icon:SiExpress, color:"var(--foreground)" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    liveLink: "https://github.com/PratikSrivastava028/ShopMantra", // Locally accessible link
    githubLink: "https://github.com/PratikSrivastava028/ShopMantra",
    image: "/img/ShopMantra.webp",
  },
  {
    name: "OrderKaro",
    description: "Food delivery app with online ordering.",
    points: [
      "A food delivery platform for online meal ordering.",
      "Allows users to browse restaurants, menus and live tracking.",
      "Provides cart, checkout, and order tracking features.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Node.js", icon: FaNodeJs, color: "#83CD29" },
      { name: "Express.js", icon: SiExpress, color: "var(--foreground)" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

    ],
    liveLink: "https://orderkaro.onrender.com", // Locally accessible link
    githubLink: "https://github.com/PratikSrivastava028/OrderKaro",
    image: "/img/orderKaro.png",
  },
  {
    name: "Dog Studio",
    description: "A Dogstudio clone with immersive 3D and smooth animations.",
    points: [
      "Interactive 3D graphics with Three.js.",
      "Smooth scroll animations and page transitions using GSAP.",
      "Responsive, component-based UI built with React.",
    ],
    techStack: [
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Three.js", icon: SiThreedotjs, color: "#9C9C9C" },
       { name: "GSAP", icon: SiG2, color: "#2D552D" },
    ],
    liveLink: "https://dog-studio-co.vercel.app/", // Locally accessible link
    githubLink: "https://github.com/PratikSrivastava028/Dog-Studio",
    image: "/img/dogStudio.png",
  },
];

// ──────────────────────────────────────────────
// PERSONAL INFO — Your profile details.
// - pfp: Path to your profile picture (place it in /public/img/)
//   A demo picture "profilepic.webp" is provided — replace with your own.
// - summary: A short paragraph about yourself (2-4 sentences)
// - location: Your city/country
// ──────────────────────────────────────────────
export const personalInfo = {
  pfp: "/img/profilepic.jpg",
  alt: "Profile Pic",
  summary:
    "MERN Full Stack Developer specializing in modern, scalable, and responsive web applications. Passionate about solving complex problems, optimizing performance, and delivering seamless user experiences through clean and efficient code.",
  location: "UTTAR PRADESH, INDIA",
};

// ──────────────────────────────────────────────
// EDUCATION — Your academic background.
// ──────────────────────────────────────────────
export const education = {
  college: "DR. APJ ABDUL KALAM TECHNICAL UNIVERSITY",
  course: "Bachelor of Technology in Computer Science",
  cgpa: "7.5",
  duration: "2022 - 2026",
};

// ──────────────────────────────────────────────
// EXPERIENCE — Your work history.
// Add multiple experience objects if you have more than one.
// For freelance work, set companyName to "Freelance".
// If you don't have experience yet, you can leave this as an empty array: []
// ──────────────────────────────────────────────
export const experiences = [
  {
    companyName: "QSpiders, Noida",
    title: "MERN Stack Developer Trainee",
    duration: "Jan 2026 - Present",
    location: "Noida",
    points: [
      "Built responsive full-stack web applications using MongoDB, Express.js, React, and Node.js.",
      "Developed RESTful APIs and integrated them with React frontend applications.",
      "Implemented authentication, CRUD operations, and managed data efficiently using MongoDB.",
    ],
  },
    {
    companyName: "InternsElite",
    title: "Full Stack Developer Intern",
    duration: "Sept 2024 - Mar 2025",
    location: "Remote",
    points: [
      "Worked on implementing responsive user interfaces and contributed to feature development using the MERN stack in an Agile environment.",
      "Assisted in testing, debugging, and deploying MERN stack applications while learning industry-standard development workflows.",
      "Participated in code reviews and contributed to best practices.",
    ],
  },
];
