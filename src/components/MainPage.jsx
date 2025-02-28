import { motion } from "framer-motion";
import myphoto from "../assets/photo.jpg";
import React from "react";
import { HERO_CONTENT } from "../constant";

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const imageVariant = {
  hidden: {
    clipPath: "inset(0 50% 0 50%)",
  },
  visible: {
    clipPath: "inset(0 0% 0 0%)",
    transition: {
      duration: 1.2,
      ease: "easeInOut",
    },
  },
};

const MainPage = () => {
  return (
    <div
      className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-between text-white"
    >
      {/* Text Content */}
      <motion.div
        className="w-full md:w-10/12 p-8 order-2 md:order-none "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl md:text-2xl lg:text-6xl my-5"
          variants={textVariants}
        >
          {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p className="text-2xl md:text-lg lg:text-3xl mb-3">
          {HERO_CONTENT.introduction}
        </motion.p>
        <motion.p className="text-xl md:text-lg lg:text-xl">
          {HERO_CONTENT.description}
        </motion.p>

        <motion.a
          className="bg-stone-50 text-stone-900 p-2 lg:p-3 mt-8 inline-block rounded-xl"
          href={HERO_CONTENT.resumeLink}
          download
          rel="noopener noreferrer"
          target="_blank"
          variants={textVariants}
        >
          {HERO_CONTENT.resumeLinkText}
        </motion.a>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 p-10 flex justify-center md:justify-end order-1 md:order-none"
        initial="hidden"
        animate="visible"
        variants={imageVariant}
      >
        <img
          src={myphoto}
          alt="my photo"
          width={350}
          height={250}
          className="my-16  border border-stone-900 rounded-3xl"
        />
      </motion.div>
    </div>
  );
};

export default MainPage;