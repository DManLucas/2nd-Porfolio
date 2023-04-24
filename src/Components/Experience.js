import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 
    w-[60%] mx-auto flex flex-col items-start 
    justify-between"
    >
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full 
      text-center"
      >
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] 
        h-full bg-dark origin-top"
        />
        <ul
          className="w-full flex flex-col items-start
        justify-between ml-4"
        >
          <Details
            position="Front-end developer"
            companyLink="https://www.leveragebpo.com/"
            company="LeverageBPO"
            time="May 2021 – Dec 2022"
            address="Shelton, Connecticut, United States"
            work="As a Web Developer, I maintained and improved websites for the company's clients. My work included updating, fixing issues, designing templates, modernizing old websites, and optimizing for mobile and speed. I also assisted Backend developers, maintained brand consistency, and turned UI/UX designs into prototypes using reusable code."
          />
          <Details
            position="Lecturer"
            companyLink="https://attibloemfontein.co.za/"
            company="ATTI Bloemfontein"
            time="Sep 2019 – Dec 2019"
            address="41 Barnes Street, Bloemfontein | Free State"
            work="As an Instructor, my responsibilities included accessing students' work through the CMS system for marking and distributing assignments. I also taught End User and CompTIA courses, and assigned practical work to students."
          />
          <Details
            position="Front-end developer"
            companyLink="https://ooweboo.co.za/"
            company="Ooweboo"
            time="Sep 2017 – Jan 2018"
            address="25 Frans Wessels Street, Langenhoven Park, Bloemfontein"
            work="As a Web Developer, I created and deployed high-performing websites and mobile apps while adhering to high-quality development standards. I built stable codebases and completed four major projects, collaborating with agile teams. I wrote reusable code and attended morning meetings to streamline workflows."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
