import project1 from "../assets/projects1.webp";
import project2 from "../assets/NetflixGPT.webp";
import project4 from "../assets/projects4.webp";
import project5 from "../assets/projects5.webp";
import project6 from "../assets/projects6.webp";
import password from "../assets/password.jpg";

export const LINKS = [
  { href: "technologies", label: "Tech Stacks" },
  { href: "work", label: "Projects" },
  { href: "experience", label: "Experience" },
  { href: "about", label: "About" },
  // { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hello 👋 Myself Sayyed Samar Abbas",
  introduction: "I am a Frontend Developer",
  description:
    "I am a Frontend Developer with 3 years of experience in the IT industry, including 1 year dedicated to building websites and web applications. I specialize in JavaScript and have professional expertise in working with React and Redux. I am eager to transition into a Full Stack Developer role, leveraging my skills to contribute across the entire web development lifecycle.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Password Manager",
    description:
      "A simple password manager built using React that allows you to store and manage passwords locally",
    image: password,
    githubLink: "https://github.com/SamarAbbas110/Password-Manager",
    live: "https://password-manager-xi-nine.vercel.app/",
  },
  {
    name: "NetflixGPT",
    description:
      "A frontend Netflix Clone with some additional Feature like GPT-3 Movie Recommendations",
    image: project2,
    githubLink: "https://github.com/SamarAbbas110/Netflix-GPT",
    live: "https://netflix-gpt-woad-omega.vercel.app/",
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
    title: " Frontend Developer",
    location: "ACCENTURE (Contract) | Mumbai, India",
    description: [
      "Designing and developing modular email blocks using REACT, enabling a scalable and reusable template architecture.",
      "Building an email builder that allows users to create emails, forms, and pop-ups dynamically using drag-and-drop functionality.",
      "Writing clean, efficient JAVASCRIPT code to optimize rendering performance and ensure smooth user interactions.",
      "Collaborating with cross-functional teams to integrate email modules seamlessly into the broader application ecosystem.",
    ],
  },
  {
    yearRange: "2021 - 2024",
    title: "Trainee Developer",
    location: "Wipro | Mumbai, India",
    description: [
      "Developed and optimized user interface components using React.js, delivering seamless and intuitive user experiences.",
      "Resolved frontend issues with strong problem-solving skills, ensuring high-quality deliverables.",
      "Continuously enhanced expertise in frontend technologies through self-paced learning and workshops.",
      "Collaborated with cross-functional teams to align UI solutions with project goals.",
    ],
  },
];

export const CONTACT = {
  headline: "LETS WORK ON SOMETHING GREAT TOGETHER!",
  description:[
    "I am actively seeking new professional opportunities where I can contribute my skills and experience to a forward-thinking organization. I'm enthusiastic about connecting with potential employers and would welcome the chance to discuss how my background might align with your needs.",
    "If you'd like to learn more about my qualifications or discuss potential opportunities, please feel free to contact me at sa707510@gmail.com.",
    "Thank you for your consideration, and I look forward to potentially working together.",
    ],
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

  footerText: `© ${new Date().getFullYear()} Samar Abbas.`,
};
