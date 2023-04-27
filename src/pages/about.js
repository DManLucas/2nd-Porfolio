import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/Resume.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";
import Education from "@/Components/Education";
import TransitionEffect from "@/Components/TransitionEffect";

const AnimatedNo = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>About Page | LN Portfolio</title>
        <meta
          name="description"
          content="This is the about page of lucas Nakeli's portfolio where he goes into detail about himself and his work/study experience"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center 
      justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-7xl
            xs:!text-4xl sm:mb-8"
            text="Passionate & Ambitious..."
          />
          <div className="grid w-full grid-cols-8 gap-16
          sm:gap-8">
            <div className="col-span-3 flex flex-col 
            items-start justify-start xl:col-span-4
            md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold 
              uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi there! I'm Lucas Nakeli, a Front-End Engineer with a passion
                for creating beautifully designed and highly functional
                websites. With experience in a variety of web technologies,
                including JavaScript, NodeJS, React, HTML5, CSS3, TailwindCSS,
                and SCSS, I've developed web-based applications from design to
                coding and full implementation.
              </p>
              <p className="my-4 font-medium">
                In my current role as a Front-End Engineer, I've consistently
                produced terrific code within customer-set deliverable time
                frames by relying on solid programming knowledge and excellent
                oral and verbal communication skills. I'm committed to staying
                up-to-date with all technological advancements and growing as a
                developer.
              </p>
              <p className="font-medium">
                I'm always excited to take on new challenges and bring fresh
                ideas to the table. So, let's collaborate and create something
                amazing together!
              </p>
            </div>

            <div
              className="col-span-3 relative 
              h-max rounded-2xl border-2 border-solid
             border-dark bg-light p-8 dark:bg-dark
             dark:border-light xl:col-span-4 md:order-1
             md:col-span-8"
            >
              <div
                className="absolute top-0 -right-3 
              -z-10 w-[102%] h-[103%] rounded-[2rem]
               bg-dark dark:bg-light"
              />
              <Image
                src={profilePic}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
                alt="Lucas"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div
              className="col-span-2 flex flex-col 
            items-end justify-between xl:col-span-8
            xl:flex-row xl:items-center md:order-3"
            >
              <div
                className="flex flex-col items-end
               justify-center xl:items-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl
                 xs:text-4xl"
                >
                  <AnimatedNo value={20} />+
                </span>
                <h2 className="text-xl font-medium 
                capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Satisfied Clients
                </h2>
              </div>

              <div
                className="flex flex-col items-end
               justify-center xl:items-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl
                 xs:text-4xl"
                >
                  <AnimatedNo value={50} />+
                </span>
                <h2 className="text-xl font-medium 
                capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div
                className="flex flex-col items-end
               justify-center xl:items-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold md:text-6xl sm:text-5xl
                 xs:text-4xl"
                >
                  <AnimatedNo value={4} />+
                </span>
                <h2 className="text-xl font-medium 
                capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
