import AnimatedText from "@/Components/AnimatedText";
import { GithubIcon } from "@/Components/Icons";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import whatsappLucas from "../../public/images/projects/whatsappLucas.png";
import ToDoApp from "../../public/images/projects/ToDoApp.png";
import QuizApp from "../../public/images/projects/QuizApp.png";
import MixMatch from "../../public/images/projects/MixMatch.png";
import DiceGame from "../../public/images/projects/DiceGame.png";
import WorldEditor from "../../public/images/projects/VirtualWorld.png";
import SelfDC from "../../public/images/projects/self-driving-car.png";
import ReceipeApp from "../../public/images/projects/ReceipeApp.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/Components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between 
        rounded-3xl rounded-br-2xl border border-solid border-dark bg-light
        shadow-2xl p-12 relative dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl
        xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 
              -z-10 w-[101%] h-[103%] rounded-[2.5rem]
               bg-dark rounded-br-3xl dark:bg-light
               xs:-right-2 sm:h-[102%] xs:w-full
               xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden 
        rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          className="w-full !h-[auto] "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div
        className="w-1/2 flex flex-col items-start 
      justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
      >
        <span
          className="text-primary font-medium 
        text-xl dark:text-primaryDark xs:text-base"
        >
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-4xl 
          dark:text-light font-bold sm:text-sm"
          >
            {title}
          </h2>
        </Link>
        <p
          className="my-2 font-medium text-dark
        dark:text-light sm:text-sm"
        >
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2
            px-6 text-lg font-semibold dark:bg-light
            dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, github }) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-2xl
       border border-solid border-dark bg-light 
       p-6 relative dark:bg-dark dark:text-light
       dark:border-light xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 
              -z-10 w-[101%] h-[103%] rounded-[2rem]
               bg-dark rounded-br-3xl md:-right-2
               md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={github}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full !h-[280px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-6">
        <span
          className="text-primary font-medium 
        text-xl dark:text-primaryDark lg:text-lg md:text-base"
        >
          {type}
        </span>
        <Link
          href={github}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2
            className="my-2 w-full text-left text-3xl
           font-bold lg:text-2xl"
          >
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10
          md:w-6"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>Projects Page | LN Portfolio</title>
        <meta
          name="description"
          content="This is the projects page of lucas Nakeli's portfolio where he has a showcase of his projects"
        />
      </Head>
      <TransitionEffect />

      <main
        className="w-full mb-16 flex flex-col 
      items-center justify-center dark:text-light"
      >
        <Layout className="pt-16">
          <AnimatedText
            text="'AIM: Active Imagination Mode'"
            className="mb-16 lg:!text-7xl sm:mb-8
            sm:!text-6xl xs:!text-4xl"
          />
          <div
            className="grid grid-cols-12 gap-24 gap-y-32
          xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
          >
            <div className="col-span-12">
              <FeaturedProject
                title="V-World-Editor"
                summary="IV-World Editor is a user-friendly application designed to simplify the process of creating and editing virtual environments. Whether you're a game developer, a virtual reality enthusiast, or a hobbyist, V-World Editor provides the tools you need to bring your ideas to life."
                link="https://vworld-editor.netlify.app/"
                type="Featured Project"
                img={WorldEditor}
                github="https://github.com/DManLucas/V-World-editor"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Self Driving Car"
                type="Secondary Project"
                img={SelfDC}
                github="https://github.com/DManLucas/Self_Driving_Car"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="WhatsAppLucas"
                summary="Implemented WhatsApp clone using NextJs that has 1-1 Messaging, 
              Live Status, used Styled Components, React.JS and hosted through Netlify 
              from Github. Used Firebase for storing data, creating a chat and google authentication."
                link="https://whatsaplucas.netlify.app/"
                type="Featured Project"
                img={whatsappLucas}
                github="https://github.com/DManLucas/WhatsappClone"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ToDoApp"
                type="Secondary Project"
                img={ToDoApp}
                github="https://github.com/DManLucas/ToDoApp"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Quiz App"
                type="Secondary Project"
                img={QuizApp}
                github="https://github.com/DManLucas/LucasQuizApp"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="MixMatch Game"
                summary="Designed a Halloween themed card matching game
                Used JavaScript, HTML5 and CSS to code the game with Halloween music themed 
                and also image assets"
                link="https://mixlucasmatch.netlify.app/"
                type="Featured Project"
                img={MixMatch}
                github="https://github.com/DManLucas/MixMatchGame"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Dice Game"
                type="Secondary Project"
                img={DiceGame}
                github="https://github.com/DManLucas/Pig-Game"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Receipe App"
                type="Secondary Project"
                img={ReceipeApp}
                github="https://github.com/DManLucas/ReceipeRandom"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
