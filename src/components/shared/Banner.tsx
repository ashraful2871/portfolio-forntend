"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Facebook, Linkedin, Download } from "lucide-react";

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cvLink =
    "https://drive.usercontent.google.com/u/0/uc?id=1tizXuiyUe_5kzQYO0KNCPsmSiPbcZrnj&export=download";

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="min-h-screen bg-black text-white flex items-center justify-center px-6"
    >
      <div className="flex flex-col lg:flex-row-reverse w-full max-w-6xl justify-evenly items-center gap-8">
        {/* Right Section (Image + Socials) */}
        <div className="relative text-center">
          <Image
            src="https://i.ibb.co.com/zhYdQPqr/ash-propfollio-image-removebg.png"
            alt="Ashraful Islam"
            width={400}
            height={400}
            className="h-[500px] sm:h-[500px] md:h-[600px] mx-auto lg:h-[600px] p-3 object-cover rounded-full border-4 border-[#DAC6A8]"
          />

          {/* Social Media Links (Desktop) */}
          <div className="hidden md:flex justify-center space-x-4 mt-4">
            <Link
              href="https://github.com/ashraful2871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </Link>
            <a
              href="https://www.linkedin.com/in/ashraful-islam-1ba47b318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Left Section (Text Content) */}
        <div className="max-w-lg text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-sm font-medium text-[#D2B48C]"
          >
            ✦ Starting as a web developer is an exciting and rewarding journey
            ahead.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-4xl font-bold leading-tight mt-4 text-[#DAC6A8]"
          >
            Building Websites with Passion and Purpose
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="text-sm mt-4 text-[#DAC6A8]"
          >
            As a web developer, I’m focused on creating clean, user-friendly
            websites that deliver seamless experiences. I’m constantly learning
            new skills to craft responsive and interactive web solutions that
            bring ideas to life.
          </motion.p>

          {/* Social Media Links (Mobile) */}
          <div className="flex md:hidden justify-center space-x-4 mt-4">
            <Link
              href="https://github.com/ashraful2871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ashraful-islam-1ba47b318/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </Link>
            <Link
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-[#DAC6A8] hover:text-white w-6 h-6" />
            </Link>
          </div>

          {/* CV Download Button */}
          <Link href={cvLink} target="_blank">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="flex items-center gap-2 bg-[#D2B48C] text-black px-5 py-2 rounded-md font-medium hover:bg-[#C0A276] mt-6 transition"
            >
              Download CV <Download size={18} />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
