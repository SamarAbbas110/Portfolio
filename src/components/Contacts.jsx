import { motion } from "framer-motion";
import React from "react";
import { CONTACT } from "../constant";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from "@remixicon/react";

const Contacts = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };
  return (
    <section
      className=" flex flex-col justify-center px-4 md:px-10"
      id="contact"
    >
      <h2 className="text-4xl lg:text-5xl md:text-6xl font-medium tracking-tight mb-10">
        Contact
      </h2>
      <div className="h-1 w-20 mb-8 bg-white"></div>

      <motion.h3
        className="text-6xl lg:text-7xl md:text-8xl leading-none"
        initial="hidden"
        whileInView="visible"
        custom={0.4}
        variants={textVariants}
      >
        {CONTACT.headline}
      </motion.h3>

      <motion.p
        className="text-lg md:text-2xl mt-6 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        custom={0.6}
        variants={textVariants}
      >
        {CONTACT.description}
      </motion.p>

      <motion.a
        href={`mailto:${CONTACT.email}`}
        className="text-2xl lg:text-xl md:text-3xl font-medium mt-8"
        initial="hidden"
        whileInView="visible"
        custom={0.8}
        variants={textVariants}
      >
        {CONTACT.email}
      </motion.a>

      <div className="flex space-x-6 mt-8">
        {CONTACT.socialLinks.map((links, index) => {
          const Icon =
            links.icon === "RiLinkedinBoxFill"
              ? RiLinkedinBoxFill
              : links.icon === "RiGithubFill"
              ? RiGithubFill
              : RiTwitterFill;
          return (
            <motion.a
              key={links.platform}
              href={links.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={links.ariaLabel}
              initial="hidden"
              whileInView="visible"
              custom={1.0 + index * 0.2}
              variants={iconVariants}
            >
              <Icon size={36} />
            </motion.a>
          );
        })}
      </div>

      <motion.p
        className="text-sm text-stone-400 mt-10 lg:mt-36 mb-5"
        initial="hidden"
        whileInView="visible"
        custom={1.6}
        variants={textVariants}
      >
        {CONTACT.footerText || "Default footer text"}
      </motion.p>
    </section>
  );
};

export default Contacts;
