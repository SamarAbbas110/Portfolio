import React from "react";
import { ABOUT_CONTENT } from "../constant";
import { motion } from "framer-motion";

const About = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-6 py-12" id="about">
      <h2 className="text-3xl lg:text-5xl md:text-6xl font-medium tracking-tight mb-10">
        About
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <div className="max-w-7xl mx-auto">
        {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            className="text-lg md:text-2xl lg:text-2xl mb-10 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default About;
