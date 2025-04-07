import { motion } from "framer-motion";
import { styles } from "../styles";
import homepage from "../assets/homepage.png";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-7 h-11 rounded-full bg-[#915EFF] mt-[7rem]" />
          <div className="w-1 sm:h-80 h-85 violet-gradient" />
        </div>

        <div className="mt-[15px]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Nitin</span>
          </h1>

          <div className="bg-[#1f1f1f] rounded-xl p-6 w-full max-w-2xl mx-auto overflow-hidden">
            <p className="text-[18px] sm:text-[20px] text-white-100 text-justify">
              <span className="font-semibold">Founder of The Poppy Pie</span>{" "}
              <br className="sm:block hidden" />
              I develop businesses <br />
              <br />
              <ul className="list-disc pl-6 space-y-2">
                <li>
                Developed more than 25+ websites for startups and business owners
                </li>
                <li>
                Built intelligent automation tools and AI agents to optimize workflows
                </li>
                <li>
                Worked with 10+ brands helping them finding their voice and achieve thier potential.
                </li>
              </ul>
              <br/>
              I partner with businesses to build bold brands, shape
              compelling brand strategies, and unlock real growth.
              <br />
              <span className="font-semibold">Full-Stack & AI Developer | Market & Growth Strategist</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src={homepage}
          alt="hero"
          className="hidden md:block md:absolute md:left-[65rem] md:bottom-[1px] w-auto"
        />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full justify-center items-center hidden sm:flex">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 translate-y-[65px] border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
