import { motion, stagger } from "framer-motion";
import React from "react";
import { EXPERIENCE, LINKS } from "../constant";

const Experience = () => {
  const containerVariants = {
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
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };

  return (
    <section className="px-6 py-10" id="experience">
      <h2 className="text-4xl lg:text-5xl md:text-6xl font-medium tracking-tight mb-10">
        Work Experience
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.div
        className="space-y-10"
         initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {EXPERIENCE.map((exp, index) => (
          <motion.div key={index} variants={childVariants}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div className="text-xl md:w/1/4 mb-2 md:mb-0 p-4">
                {exp.yearRange}
              </div>

              <div className="md:w-3/4 mb-10">
                <div className="max-w-7xl backdrop-blur-3xl p-4 rounded-lg ">
                  <h2 className="text-lg mb-2 font-bold">
                    {exp.title}
                    </h2>
                    <p className="mb-4 text-sm italic">{exp.location}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                      ))}
                    </ul>
                
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default Experience;
