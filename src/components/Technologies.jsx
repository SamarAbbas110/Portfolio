import { motion } from "framer-motion";
import React from "react";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

const IconVariant = (duration) => ({
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
    <div className="pb-10 px-6 text-xl md:text-2xl lg:text-6xl " id="technologies">
      <h2
        // whileInView={{ opacity: 1, y: 0 }}
        // initial={{ opacity: 1, y: -100 }}
        // transition={{ duration: 1.5 }}
        className="text-3xl lg:text-5xl md:text-6xl font-medium tracking-tight mb-10">
      Tech Stacks 👨‍💻</h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(2.5)}
        >
          <SiJavascript className="text-8xl text-yellow-300" />
        </motion.div>
        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(3)}
          className="p-4"
        >
          <RiReactjsLine className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(4)}
          className="p-4"
        >
          <SiRedux className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(5)}
          className="p-4"
        >
          <SiExpress className="text-8xl text-green-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(6)}
          className="p-4"
        >
          <SiTailwindcss className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(5)}
          className="p-4"
        >
          <BiLogoMongodb className="text-8xl text-green-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={IconVariant(4)}
          className="p-4"
        >
          <FaNode className="text-8xl text-green-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
