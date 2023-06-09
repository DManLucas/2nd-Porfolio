import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex item-center justify-center 
        rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute
        dark:text-dark dark:bg-light lg:py-2 lg:px-4
        md:text-sm md:py-1.5 md:px-3 xs:bg-transparent
        xs:dark:bg-transparent xs:text-dark xs:dark:text-light
        sm:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-64 w-full 
        text-center md:text-6xl md:mt-32"
      >
        Skills
      </h2>
      <div
        className="w-full h-screen relative 
        flex items-center justify-center rounded-full
        bg-circularLight dark:bg-circularDark 2xl:h-[150vh] xl:h-[130vh] lg:h-[100vh]
        sm:h-[80vh] xs:h-[70vh] lg:bg-circularLightLg
        lg:dark:bg-circularDarkLg md:bg-circularLightMd
        md:dark:bg-circularDarkMd sm:bg-circularLightSm
        sm:dark:bg-circularDarkSm"
      >
        <motion.div
          className="flex item-center justify-center 
        rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer
        dark:text-dark dark:bg-light lg:p-6
        md:p-4 xs:text-xs xs:p-2 "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS3" x="-7vw" y="-7vw" />
        <Skill name="HTML5" x="5vw" y="7vw" />
        <Skill name="Javascript" x="-19vw" y="0vw" />
        <Skill name="TailwindCSS" x="17vw" y="-5vw" />
        <Skill name="ReactJS" x="-18vw" y="12vw" />
        <Skill name="SCSS" x="10vw" y="-15vw" />
        <Skill name="NodeJS" x="21vw" y="15vw" />
        <Skill name="WordPress" x="-21vw" y="-15vw" />
        <Skill name="Github" x="-3vw" y="24vw" />
        <Skill name="NextJS" x="3vw" y="-24vw" />
      </div>
    </>
  );
};

export default Skills;
