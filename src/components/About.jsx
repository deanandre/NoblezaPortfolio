import { ABOUT_ITEMS } from "../constants";
import { motion } from "framer-motion";
import AnimatedBackground from "./animated-background";

const About = () => {
  return (
    <div className="pb-36 max-[640px]:pb-0">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1.5 }}
        className="mt-10 text-center text-4xl max-[640px]:text-2xl"
      >
        About <span className="text-accent"> Me</span>
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 p-10 lg:grid-cols-3"
      >
        <AnimatedBackground
          className="rounded-lg bg-gray-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {ABOUT_ITEMS.map((item, index) => (
            <div key={index} data-id={`card-${index}`}>
              <div className="flex select-none flex-col space-y-1 p-7">
                <h3 className="text-xl font-semibold text-accent max-[640px]:text-center max-[640px]:mb-2 ">
                  {item.title}
                </h3>
                <p className="text-base text-white max-[640px]:text-center max-[640px]:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </motion.div>
    </div>
  );
};

export default About;
