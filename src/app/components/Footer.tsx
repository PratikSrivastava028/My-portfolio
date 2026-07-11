"use client";
import { motion } from "motion/react";
import { fadeInRight } from "../data/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeInRight}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      className="bg-[var(--background)] tracking-wide sm:tracking-wider border-t flex max-md:gap-2 max-md:flex-col-reverse gap-20 justify-center items-center border-[var(--border)] text-[var(--foreground)] text-center text-sm lg:py-6 pb-8 pt-4"
    >
      <p className="">
        &copy; {new Date().getFullYear()} Pratik Srivastava. All rights reserved.{" "}
      </p>
    
    </motion.footer>
  );
};

export default Footer;
