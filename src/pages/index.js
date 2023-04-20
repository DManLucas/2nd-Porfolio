import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import animePic from "../../public/images/profile/Lucas.png";
import AnimatedText from "@/Components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/Components/Icons";
import HireMe from "@/Components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas Nakeli's Portfolio</title>
        <meta name="description" content="Lucas Nakeli's Portfolio" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={animePic}
                width="1200"
                height="1200"
                alt="Lucas"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Hello there I'm Lucas Nakeli"
                className="!text-5xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                I'm currently a Web Developer for LeverageBPO from South Africa.
                The purpose of this website promotes me to prospective clients
                and employers. So peruse at your leisure and drop me a line if
                you appreciate what you perceive. "With exceptional programming
                comes great projects."
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  className="flex items-center bg-dark 
                  text-light p-2.5 px-6 rounded-lg 
                  text-lg font-semibold hover:bg-light 
                  hover:text-dark border-2 border-solid
                  border-transparent hover:border-dark"
                  href="/LucasNakeliResume.pdf"
                  target={"_blank"}
                  download={true}
                >
                  Resume
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  className="ml-4 text-lg font-medium 
                  capitalize text-dark underline"
                  href="mailto:luminouslucas@duck.com"
                  target={"_blank"}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Luminous Lucas" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
