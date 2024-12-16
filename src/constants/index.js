import web from "../assets/web.png";
import creator from "../assets/creator.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import threejs from "../assets/tech/threejs.svg";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import c from "../assets/tech/c.png";
import python from "../assets/tech/python.png";
import uniqus from "../assets/uniqus.png";
import eduacademy from "../assets/eduacademy.png";
import kahba from "../assets/kahba.png";
import carrent from "../assets/carrent.png";
import jobit from "../assets/jobit.png";
import tripguide from "../assets/tripguide.png";
import profcess from "../assets/profcess.png";
import freelance from "../assets/freelance.png";
import express from "../assets/tech/express.png";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: creator,
    },
    {
      title: "Marketing Strategist",
      icon: creator,
    },
    {
      title: "Business Growth Expert",
      icon: creator,
    },
    {
      title: "Video Editor",
      icon: creator,
    },

  ];
  
  const technologies = [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name:"Express JS",
      icon: express,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Python",
      icon: python,
    },

  ];
  
  const experiences = [
    {
      title: "React Developer & Marketing Strategist",
      company_name: "Uniqus Edutech",
      icon: uniqus,  // Replace with actual icon
      iconBg: "#383E56",  // Replace with preferred color
      date: "Jan 2024 - Present",
      points: [
        "Started as a React Developer, contributing to web development using React.js and related technologies.",
        "Transitioned to developing marketing strategies, formulating and implementing effective campaigns.",
        "Created 3 engaging video scripts to communicate the company's offerings and values.",
        "Successfully hosted a hackathon, fostering innovation and engagement within the company.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "EduAcademy",
      icon: eduacademy,  // Replace with actual icon
      iconBg: "#383E56",
      date: "March 2023 - September 2023",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to fellow developers.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Kahba Design Studio",
      icon: kahba,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2024 - Present",
      points: [
        "Streamlined the studio’s online presence by creating a dynamic website [Kahba Design Studio](https://www.kahbadesignstudio.com/).",
        "Built and managed their [LinkedIn page](https://www.linkedin.com/company/kahbadesignstudio/), growing the follower base from 0 to 100+.",
        "Developed and executed tailored marketing strategies to enhance brand visibility and client engagement.",
        "Created an efficient online content creation process, ensuring consistency across platforms.",
      ],
    },
    {
      title: "Freelance Developer & Marketing Consultant",
      company_name: "Freelance",
      icon: freelance,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Managed 10+ freelance clients, offering website development and marketing services tailored to their needs.",
        "Organized 8 small events and sessions, along with 3 large-scale events and 1 major fest, within a span of 2 years.",
        "As Marketing Head for Punjab University’s largest fest, secured over 1.5 lakhs in sponsorships.",
        "Co-convened Software Freedom Day (SFD), one of the largest tech conferences in Chandigarh.",
      ],
    },
    {
      title: "Business Development Intern",
      company_name: "Profcess & Metafied",
      icon: profcess,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2024- Present",
      points: [
        "Led the development of an automated lead-generation funnel, filtering prospective clients from a database of 7 million companies.",
        "Automated email, LinkedIn, and WhatsApp marketing strategies for improved client outreach and acquisition.",
        "Utilized AI tools to optimize client filtering and streamline marketing campaigns for efficiency.",
        "Contributed to business growth by identifying and implementing effective prospecting tools and strategies.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Sales Project",
      description:
        "I developed a comprehensive sales project by designing a strategic funnel, building an online lead-attraction model, and integrating three platforms for seamless operations and enhanced efficiency",
      tags: [
        {
          name: "#marketing",
          color: "blue-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Ecommerce",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };