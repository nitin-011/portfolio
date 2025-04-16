import React, { useEffect, useState } from "react";
import thepoppypie from "../assets/company/poppypie.png";
import {
  FaAddressCard,
  FaCross,
  FaBolt,
  FaGem,
} from "react-icons/fa";
import t1 from "../assets/testimonials/t1.png";
import t2 from "../assets/testimonials/t2.png";
import t3 from "../assets/testimonials/t3.png";
import t4 from "../assets/testimonials/t4.png";
import image1 from "../assets/Marketingimages/image1.jpg";
import image2 from "../assets/Marketingimages/image2.jpg";
import image3 from "../assets/Marketingimages/image3.jpg";
import image4 from "../assets/Marketingimages/image4.jpg";
import image from "../assets/image.png";
import reel from "../assets/reel.png";
import thumbnail from "../assets/thumbnail.png";
import leads from "../assets/leads.png";

const testimonials = [
  { id: 1, bgImage: t1 },
  { id: 2, bgImage: t2 },
  { id: 3, bgImage: t3 },
  { id: 4, bgImage: t4 },
];

const collections = [
  {
    title: "Brands We Have Worked With",
    text: [
      "Worked with 10+ brands.",
      "Experienced in building and executing brand strategies.",
      "Collaborated with companies like Business Enablers, Profess, Eduacademy, and Uniqus.",
      "Contributed to a project in association with Harvard University.",
      "Strong understanding of branding implementation in real scenarios.",
    ],
    img: image1,
  },
  {
    title: "Content Collection",
    text: [
      "Created a video for IDA that reached 70K organic views.",
      "Produced a video for Kahba Design Studio that gained 1.5K organic views.",
      "Started my own podcast series, FROM SCRATCH — the first reel received 1.5K organic views.",
      "Built a community of 500+ marketing enthusiasts.",
      "Wrote a blog for Business Enablers, which was read by nearly 1,000 people.",
    ],
    img: image2,
    dark: true,
  },
  {
    title: "Tech Collection",
    text: [
      "www.kahbadesignstudio.com",
      "www.bizzenablers.com",
      "www.nitinchalana.in",
      "www.uniqusedutech.com",
      "www.shopida.in",
      "Email Automation using Python",
      "Worked on 25+ such projects",
    ],
    img: image3,
  },
  {
    title: "Brand Strategies",
    text: [
      "Worked on an installation in Sector-17 for Kahba Design Studio.",
      "Closed a deal with 100+ clients for Profcess using LinkedIn and email automation",
      "Successfully conducted 10+ events across the Tricity region",
      "Automated the data extraction process for Business Enablers.",
      "Launched Airbnb and built a community for Culinary Crescendo, resulting in ₹80K in sales within one month.",
      "Developed strategic campaigns for various other brands as well.",
    ],
    img: image4,
  },
];

const items = [
  {
    title: "Best Website",
    description: "My own personal portfolio website",
    img: image,
    link: "https://www.nitinchalana.in",
  },
  {
    title: "Best Reel",
    description: "Created reel for IDA",
    img: reel,
    link: "https://www.instagram.com/reel/DFP1cyUPlzG/",
  },
  {
    title: "Best Podcast",
    description: "Our first podcast with Horseshoe Hospitality",
    img: thumbnail,
    link: "https://youtu.be/WWn2jGYcJDs?si=3k1nyH_UdbQ0O4zi",
  },
  {
    title: "Best strategy",
    description: "Automated the process of lead generation for Profcess",
    img: leads,
  },
];

const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black">
      {/* Navbar */}
      <nav className="flex justify-center items-center py-4 shadow-md sticky top-0 bg-white z-10 font-handwriting">
        <ul className="flex items-center justify-between w-full max-w-[82rem] px-6 text-lg">
          <li><a href="/#contact" className="transition-colors hover:text-gray-500">Contact us</a></li>
          <li><a href="/#service" className="transition-colors hover:text-gray-500">About Us</a></li>
          <li className="flex flex-col items-center">
            <img src={thepoppypie} alt="The Poppy Pie Logo" className="border border-gray-400 rounded-full p-2 h-[55px]" />
          </li>
          <li><a href="/#services" className="transition-colors hover:text-gray-500">Services</a></li>
          <li><a href="/#blog" className="transition-colors hover:text-gray-500">Blogs</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="w-full h-screen bg-gray-50 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="w-full lg:w-[45%] flex flex-col justify-center h-full py-10">
          <h3 className="text-sm uppercase tracking-widest text-gray-600">Your Growth, Our Mission</h3>
          <h1 className="text-4xl sm:text-5xl font-semibold mt-2 leading-tight">
            This <em className="italic font-light">is where</em> your <strong>brand grows.</strong>
          </h1>
          <p className="text-gray-500 mt-4 max-w-lg text-base sm:text-lg">
            We craft tailored marketing strategies that connect you with the right audience, boost your brand visibility, and drive real results.
          </p>
        </div>

        <div className="relative w-full lg:w-[55%] h-[500px] flex items-center justify-center overflow-hidden">
          {testimonials.map((card, index) => {
            const position = (index - activeIndex + testimonials.length) % testimonials.length;
            let zIndex = 0;
            let transform = "";

            if (position === 0) {
              zIndex = 30;
              transform = "scale-110";
            } else if (position === 1) {
              zIndex = 20;
              transform = "-translate-x-[10rem] scale-100";
            } else {
              zIndex = 10;
              transform = "translate-x-[10rem] scale-100";
            }

            return (
              <div
                key={card.id}
                className={`absolute transition-all duration-700 ease-in-out bg-cover bg-center w-72 h-96 rounded-3xl shadow-2xl ${transform}`}
                style={{
                  zIndex,
                  backgroundImage: `url(${card.bgImage})`,
                }}
              ></div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left md:w-1/4">
            <h4 className="uppercase text-sm font-bold tracking-widest text-gray-800">Few Facts</h4>
            <p className="text-gray-500 mt-2 text-lg">Statistics of <br /> Our Sales.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-between md:flex-1 gap-10">
            <div className="text-center">
              <FaAddressCard size={28} className="mx-auto text-black" />
              <h3 className="text-4xl font-medium mt-2">10+</h3>
              <p className="uppercase text-gray-400 text-sm">Brands</p>
            </div>
            <div className="text-center">
              <FaCross size={28} className="mx-auto text-black" />
              <h3 className="text-4xl font-medium mt-2">3+</h3>
              <p className="uppercase text-gray-400 text-sm">Years</p>
            </div>
            <div className="text-center">
              <FaBolt size={28} className="mx-auto text-black" />
              <h3 className="text-4xl font-medium mt-2">100+</h3>
              <p className="uppercase text-gray-400 text-sm">Clients</p>
            </div>
            <div className="text-center">
              <FaGem size={28} className="mx-auto text-black" />
              <h3 className="text-4xl font-medium mt-2">500+</h3>
              <p className="uppercase text-gray-400 text-sm">Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`relative group h-80 md:h-96 bg-cover bg-center flex items-center justify-center text-center transition-all duration-300 ${
              item.dark ? "text-white" : "text-black"
            }`}
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-60 transition-all duration-300 z-10" />
            <div className="relative z-20 transition-opacity duration-300 group-hover:opacity-0 px-5 py-2 text-sm font-medium bg-black text-white hover:bg-gray-800 rounded-[20px]">
              <h3 className="text-2xl font-bold">{item.title}</h3>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500 z-20">
              <ul className="text-sm text-white list-disc list-inside space-y-1 text-left">
                {item.text.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export { ServicePage };
