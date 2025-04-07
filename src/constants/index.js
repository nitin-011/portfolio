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
import poppypie from "../assets/company/poppypie.png"

  
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
      title: "Full Stack Developer",
      icon: creator,
      navLinks:"https://www.thepoppypie/ourwork"
    },
    {
      title: "Ai and Automation Sollutions",
      icon: creator,
    },
    {
      title: "Growth and Market Expert",
      icon: creator,
    },
    {
      title: "Create. Strategize. Deliver",
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
      title: "Founder and CEO",
      company_name: "The Poppy Pie",
      icon: poppypie,
      iconBg: "#ffffff",  // Replace with preferred color
      date: "Jan 2025 - Present",
      points :[
        "Poppy Pie is a dynamic brand-building company dedicated to accelerating business growth through smart, scalable strategies. We help startups and established businesses reach their full potential.",
        "Targeted Lead Generation – Drive high-quality leads with proven strategies tailored to your ideal customer profile.",
        "Sales & Outreach Campaigns – Boost conversions with personalized outreach and automated sales funnels that actually work.",
        "Social Media & Content Strategy – Elevate your online presence with engaging content, creative storytelling, and platform-specific strategies.",
        "SEO & Organic Brand Building – Improve visibility on search engines through keyword optimization, link-building, and content-driven SEO.",
        "Marketing Automation – Streamline your marketing workflows using cutting-edge automation tools to save time and increase ROI.",
        "End-to-End Branding – From awareness to acquisition, we help craft a brand identity that stands out and scales."
      ]
    },
    {
      title: "Marketing and Growth Strategist",
      company_name: "Uniqus Edutech",
      icon: uniqus,  // Replace with actual icon
      iconBg: "#383E56",  // Replace with preferred color
      date: "Jan 2025 - Present",
      points: [
        "Spearheaded outreach efforts, successfully setting up meetings with 10+ educational institutions.",
        "Played a key role in converting leads into clients by understanding their needs and presenting tailored solutions.",
        "Contributed to the development of strategic sales plans to boost client acquisition and brand presence.",
        "Collaborated closely with the core team to refine the startup’s positioning and improve pitch effectiveness."
      ],
    },
    {
      title: "Business Development Strategist",
      company_name: "Profcess & Metafied",
      icon: profcess,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2024- Present",
      points: [
        "Led the development of an automated lead-generation funnel, filtering prospective clients from a database of 7 million companies.",
        "Automated email, LinkedIn, and WhatsApp marketing strategies for improved client outreach and acquisition. Reached 100+ clients and secure",
        "Utilized AI tools to optimize client filtering and streamline marketing campaigns for efficiency.",
        "Contributed to business growth by identifying and implementing effective prospecting tools and strategies.",
      ],
    },
    {
      title: "Developer and Growth Strategist",
      company_name: "Kahba Design Studio",
      icon: kahba,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2024 [Nov] - Present",
      points: [
        "Streamlined the studio’s online presence by creating a dynamic website [Kahba Design Studio](https://www.kahbadesignstudio.com/).",
        "Built and managed their [LinkedIn page], growing the follower base from 0 to 100+ in just 2 months organically.",
        "Developed and executed tailored marketing strategies to enhance brand visibility and client engagement.",
        "Created an efficient online content creation process, ensuring consistency across platforms.",
      ],
    },
    {
      title: "Developer",
      company_name: "EduAcademy",
      icon: eduacademy,  // Replace with actual icon
      iconBg: "#383E56",
      date: "March 2024 - September 2024",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and developers to create high-quality products.",
        "Implemented responsive design and ensured cross-browser compatibility.",
        "Participated in code reviews and provided constructive feedback to fellow developers.",
      ],
    },
    {
      title: "Freelance Developer & Marketing Consultant",
      company_name: "Freelance",
      icon: freelance,  // Replace with actual icon
      iconBg: "#383E56",
      date: "2023 - Present",
      points: [
        "Managed 20+ freelance clients, offering website development and marketing services tailored to their needs.",
        "Organized 8 small events and sessions, along with 3 large-scale events and 1 major fest, within a span of 2 years.",
        "As Marketing Head for Punjab University’s largest fest, secured over 1.5 lakhs in sponsorships.",
        "Co-convened Software Freedom Day (SFD), one of the largest tech conferences in Chandigarh.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "Sales Project",
      description:
        "I developed a comprehensive sales project by designing a strategic funnel for metafied, building an online lead-attraction model, and integrating three platforms for seamless operations and enhanced efficiency",
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
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js & Express.js",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
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
    {
      name: "Assignment Solver",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "React.js",
          color: "green-text-gradient",
        },
        {
          name: "Sql",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };