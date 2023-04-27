import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light
    sm:text-base"
    >
      <Layout className="py-8 flex items-center 
      justify-center lg:flex-col lg:py-6
      ">
        <span>2018 - {new Date().getFullYear()} &copy; All Rights Reserved.</span>
        {/* <div className="flex items-center">
          Built With <span className="text-sky-500 text-2xl px-1">&#9825;</span>
          By
          <Link className="underline underline-offset-2" href="https://www.luminouslucas.com/">Luminous Lucas</Link>
        </div> 
        <Link href="/">Say Hello</Link>*/}
      </Layout>
    </footer>
  );
};

export default Footer;
