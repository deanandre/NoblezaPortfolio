import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import LogoHTML from "../assets/html-5.png";
import LogoCSS from "../assets/css-3.png";
import LogoJS from "../assets/js.png";
import LogoReact from "../assets/react.png";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 max-[640px]:pb-0">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-20 text-center text-4xl max-[640px]:mb-10"
      >
        Tech Stack
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="bg-gray-200 rounded-2xl border-4 border-accent p-4"
        >
          <img src={LogoHTML} alt="HTML Logo" width={80} />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="bg-gray-200 rounded-2xl border-4 border-accent p-4"
        >
          <img src={LogoCSS} alt="CSS Logo" width={80} />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="bg-gray-200 rounded-2xl border-4 border-accent p-4"
        >
          <img src={LogoJS} alt="JS Logo" width={80} className="p-3" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="bg-gray-200 rounded-2xl border-4 border-accent p-4"
        >
          <img src={LogoReact} alt="React JS Logo" width={80} className="p-2" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="bg-gray-200 rounded-2xl border-4 border-accent p-4"
        >
          <RiTailwindCssFill className="text-7xl p-2 text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
