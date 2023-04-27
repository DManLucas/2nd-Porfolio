import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import animePic from "../../public/images/profile/Lucas.png";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/Components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Nakeli's Portfolio</title>
        <meta name="description" content="Lucas Nakeli's Portfolio" />
      </Head>
      <TransitionEffect />
      <main
        className="flex items-center text-dark 
      w-full min-h-screen dark:text-light"
      >
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full
          lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
                src={animePic}
                width="1200"
                height="1200"
                alt="Lucas"
                className="w-full h-auto lg:hidden
                md:inline-block md:w-full"
              />
            </div>
            <div className="w-1/2 flex flex-col 
            items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hello there I'm Lucas Nakeli"
                className="!text-6xl !text-left xl:!text-5xl
                 lg:!text-center lg:!text-6xl md:!text-5xl 
                 sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium
              md:text-sm sm:text-xs">
                I'm currently a Web Developer for LeverageBPO from South Africa.
                The purpose of this website promotes me to prospective clients
                and employers. So peruse at your leisure and drop me a line if
                you appreciate what you perceive. "With exceptional programming
                comes great projects."
              </p>
              <div className="flex items-center self-start 
              mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark 
                  text-light p-2.5 px-6 rounded-lg 
                  text-lg font-semibold hover:bg-light 
                  hover:text-dark border-2 border-solid
                  border-transparent hover:border-dark

                  dark:bg-light dark:text-dark
                  hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light
                  
                  md:p-2 md:px-4 md:text-base"
                  href="/LucasNakeliResume.pdf"
                  target={"_blank"}
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium 
                  capitalize text-dark underline
                  dark:text-light md:text-base"
                  href="mailto:luminouslucas@duck.com"
                  target={"_blank"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            src={lightBulb}
            alt="Luminous Lucas"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
