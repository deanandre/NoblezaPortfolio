import { HERO_CONTENT } from "../constants";
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
    <div className="w-full sm:px-0 lg:px-10 md:pb-48 md:mb-35 sm:pb-0">
      <div className="flex flex-wrap items-center max-[1030px]:flex-col-reverse">
        {/* Hero Contents */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-3 text-base font-semibold tracking-tight lg:mt-1 lg:text-xl max-[640px]:pb-0 text-gray-600"
            >
              Front-End Developer
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="font-bold text-4xl tracking-tight xl:text-7xl max-[1030px]:text-center"
            >
              Hello I'm <br />
              <span className="text-accent"> Dean Nobleza</span>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 text-lg font-thin lg:font-normal tracking-widest max-[1030px]:text-center max-[640px]:text-sm max-[640px]:py-2 bg-gradient-to-r from-gray-500 via-gray-700 to-black bg-clip-text text-transparent"
            >
              {HERO_CONTENT}
            </motion.p>

            <div className="">
              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="bg-accent mr-5 text-white text-lg font-medium rounded-full py-2 px-8 transition-colors duration-300 max-[640px]:px-6 max-[640px]:text-sm max-[640px]:mr-2"
              >
                Contact Me
              </motion.a>

              <motion.a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className=" bg-black text-white text-lg rounded-full py-2 px-8 transition-colors duration-300  max-[640px]:px-6 max-[640px]:text-sm"
              >
                View Resume
              </motion.a>
            </div>
          </div>
        </div>

        {/* Profile Picture */}
        <div className="w-full lg:w-1/2 flex justify-center max-[640px]:mb-5">
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
            className="relative"
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
              className="mix-blend-lighten"
            >
              <div className="blob"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
