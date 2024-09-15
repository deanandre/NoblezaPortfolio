
import envisionProject from "../assets/envision.png";
import docProject from "../assets/discoverOC.png";
import securePassProject from "../assets/securePass.png";

export const HERO_CONTENT = `I'm a competent Front-End Developer who loves developing and dedicated to building responsive, accesible, and visually stunning websites.`;

export const ABOUT_ITEMS = [
  {
    id: 1,
    title: "Location",
    description: "I am based in Baguio City, Benguet, Philippines.",
  },
  {
    id: 2,
    title: "MBTI",
    description: "Extraverted, Intuitive, Thinking, Judging (ENTJ).",
  },
  {
    id: 3,
    title: "Soft Skills",
    description: "Verbal Communication, Team Player, Open-Minded, Innovative Thinking and etc. ",
  },
  {
    id: 4,
    title: "Expertise",
    description: "I excel at UI/UX Design and Front-End Development.",
  },
  {
    id: 5,
    title: "Passion",
    description: "I enjoy experimenting designs and layouts to build innovative websites.",
  },
  {
    id: 6,
    title: "Long-term Goal",
    description: "I want to become a Senior Full-Stack Developer.",
  },
];

export const EXPERIENCES = [
  {
    date: "June 2023 - November 2023",
    role: "Front-End Developer & UI/UX Designer",
    company: "Amakro Web Design",
    description: `Designed and built a travel blog website with the use of Figma and Wordpress with Elementor Pro plugin.`,
    technologies: ["Figma", "Wordpress", "Elementor", "SEO"],
  },

];

export const PROJECTS = [
  {
    num: "01",
    title: "Architectural Blog Website",
    description:
      "An Architectural Blog Website which is our prelim project for Web Technologies to exercise what we have learned for vanilla coding.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: envisionProject,
    live: "https://deanandre.github.io/envision-estetech/",
    github: "https://github.com/deanandre/envision-estetech",
  },
  {
    num: "02",
    title: "Discover Orange County",
    description:
      "A travel blog website my team and I designed and implemented with the use of Elementor page builder in WordPress.",
    stack: [
      { name: "WordPress" },
      { name: "Elementor" },
      { name: "Figma" },
      { name: "SEO" },
    ],
    image: docProject,
    live: "https://discoverorangecounty.net/",
    github: "",
  },
  {
    num: "03",
    title: "SecurePass Monitoring Access Control",
    description:
      "An access control system for turnstiles at the university campus that shows and monitors the records of individuals' entries and exits.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "React JS" }, { name: "Tailwind CSS" }],
    image: securePassProject,
    live: "https://turnstile-acs.vercel.app/",
    github: "https://github.com/deanandre/Turnstile-ACS",
  },

];

export const CONTACT = {
  address: "Eagle Crest Phase 1 Bakakeng North, Baguio City, Benguet, Philippines ",
  phoneNo: "+639918844635",
  email: "noblezadeanandre@gmail.com",
};
