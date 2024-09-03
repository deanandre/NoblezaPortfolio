import { HERO_CONTENT } from "../constants";
import profilePicture from "../assets/deanNoblezaProfile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="w-full sm:px-0 lg:px-10 md:pb-40 md:mb-35 sm:pb-0">
      <div className="flex flex-wrap items-center max-[1030px]:flex-col-reverse border-b border-neutral-500 pb-20">
        {/* Hero Contents */}
        <div className="w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-3 text-base font-semibold tracking-tight lg:mt-1 lg:text-xl max-[640px]:pb-0"
            >
              Front-End Developer
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" font-bold text-4xl tracking-tight xl:text-7xl max-[1030px]:text-center"
            >
              Hello I'm <br />
              <span className="text-accent"> Dean Nobleza</span>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-widest max-[1030px]:text-center sm:text-xs md:text-sm lg:text-base max-[640px]:py-2"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="border border-accent text-accent rounded-full py-2 px-8 transition-colors duration-300 hover:bg-accent hover:text-white max-[640px]:px-6 max-[640px]:text-sm"
            >
              View Resume
            </motion.a>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center w-1/2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.5,
                duration: 0.4,
                ease: "easeIn",
              },
            }}
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
              className="mt-10 w-[160px] xl:w-[330px] mix-blend-lighten absolute max-[640px]:mt-3"
            >
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="object-contain"
              />
            </motion.div>

            <motion.svg
              className="w-[230px] lg:w-[306px] xl:w-[506px] mb-10"
              fill="none"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22",
                  ],
                  rotate: [120, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
