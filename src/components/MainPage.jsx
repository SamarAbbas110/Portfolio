import { easeOut, motion, stagger } from "framer-motion";
import { clipPath } from "framer-motion/client";
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
      className="relative z-10 min-h-screen flex flex-wrap flex-col
    md:flex-row items-center justify-center text-white"
    >
      <motion.div
        className="w-full md:w-1/2 p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-xl md:text-2xl lg:text-4xl my-10"
          variants={textVariants}
        >
          {HERO_CONTENT.greeting}
        </motion.h1>
        <motion.p className="text-base md:text-lg lg:text-xl mb-3">
          {HERO_CONTENT.introduction}
        </motion.p>
        <motion.p className="text-xl md:text-lg lg:text-xl !important">
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

      <motion.div
        className="w-full md:w-1/2 p-20"
        initial="hidden"
        animate="visible"
        variants={imageVariant}
      >
        <img
          src={myphoto}
          alt="my photo"
          width={400}
          height={400}
          className="rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default MainPage;
