import project1 from "../assets/projects1.webp";
import project2 from "../assets/projects2.webp";
import project3 from "../assets/projects3.webp";
import project4 from "../assets/projects4.webp";
import project5 from "../assets/projects5.webp";
import project6 from "../assets/projects6.webp";
import password from '../assets/password.jpg'

export const LINKS = [
  { href: "work", label: "Work" },
  { href: "about", label: "About" },
  { href: "experience", label: "Experience" },
  // { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hello 👋 Myself Samar Abbas",
  introduction: "I am a Frontend Developer",
  description:
    "I am a Frontend Developer with 3 years of experience in the IT industry, including 1 year dedicated to building websites and web applications. I specialize in JavaScript and have professional expertise in working with React and Redux. I am eager to transition into a Full Stack Developer role, leveraging my skills to contribute across the entire web development lifecycle.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Password Manager",
    description: "A simple password manager built using React that allows you to store and manage passwords locally",
    image: password,
    link: "https://password-manager-xi-nine.vercel.app/",
    githubLink : "https://github.com/SamarAbbas110/Password-Manager"
  },
  {
    name: "BootStore3",
    description: "A simple e-commerce website built using React and Redux",
    image: project3,
    link: "example",
  },
  {
    name: "BootStore3",
    description: "A simple e-commerce website built using React and Redux",
    image: project4,
    link: "example",
  },
  {
    name: "BootStore3",
    description: "A simple e-commerce website built using React and Redux",
    image: project5,
    link: "example",
  },
  {
    name: "BootStore3",
    description: "A simple e-commerce website built using React and Redux",
    image: project6,
    link: "example",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a Frontend Developer with 2 years of experience in building websites and web applications. I specialize in JavaScript and have professional experience working with React and Redux.",
  ],
};

export const EXPERIENCE = [
  {
    yearRange: "2024 - Now",
    title: "Frontend Developer",
    location: "Mumbai, India",
    description: [
      "Developed a responsive website using React and Redux",
      "Optimized website performance and improved loading speed by 50%",
      "Collaborated with the design team to create a pixel-perfect website",
      "Worked with the backend team to integrate API endpoints",
    ],
  },
  {
    yearRange: "2021 - 2024",
    title: "Frontend Developer",
    location: "Mumbai, India",
    description: [
      "Developed a responsive website using React and Redux",
      "Optimized website performance and improved loading speed by 50%",
      "Collaborated with the design team to create a pixel-perfect website",
      "Worked with the backend team to integrate API endpoints",
    ],
  },
];

export const CONTACT = {
  headline: "LETS WORK ON SOMETHING GREAT TOGETHER!",
  description:
    "I am currently looking for new opportunities and would love to work with you. Please feel free to reach out to me, I am currently looking for new opportunities and would love to work with you. Please feel free to reach out to me.",
  email: "sa707510@gmail.com",
  socialLinks: [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/sayyed-samar-abbas-abidi-5404271b6/",
      ariaLabel: "View Samar Abbas's LinkedIn Profile",
      icon: "RiLinkedinBoxFill",
    },
    {
      platform: "Github",
      url: "https://www.linkedin.com/in/samar-abbas-4b7b4b1a9/",
      ariaLabel: "View Samar Abbas's LinkedIn Profile",
      icon: "RiGithubFill",
    },
    {
      platform: "Twitter",
      url: "https://www.linkedin.com/in/samar-abbas-4b7b4b1a9/",
      ariaLabel: "View Samar Abbas's LinkedIn Profile",
      icon: "RiTwitterFill",
    },
  ],

  footerText: `© ${new Date().getFullYear()} Samar Abbas. All copyrights reserved.`,
};
