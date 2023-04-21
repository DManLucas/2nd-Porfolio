import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/Resume.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/Components/Skills";

const AnimatedNo = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

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
          content="This is the about page of lucas Nakeli's porfolio where he goes into detail about himself and his work/study experience"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 text-4xl"
            text="Passionate & Ambitious..."
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
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
             border-dark bg-light p-8"
            >
              <div
                className="absolute top-0 -right-3 
              -z-10 w-[102%] h-[103%] rounded-[2rem]
               bg-dark"
              />
              <Image
                src={profilePic}
                alt="Lucas"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div
              className="col-span-2 flex flex-col 
            items-end justify-between"
            >
              <div
                className="flex flex-col items-end
               justify-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold"
                >
                  <AnimatedNo value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Satisfied Clients
                </h2>
              </div>

              <div
                className="flex flex-col items-end
               justify-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold"
                >
                  <AnimatedNo value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects Completed
                </h2>
              </div>
              <div
                className="flex flex-col items-end
               justify-center"
              >
                <span
                  className="inline-block text-7xl
                 font-bold"
                >
                  <AnimatedNo value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Years Of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills/>
        </Layout>
      </main>
    </>
  );
};

export default about;
