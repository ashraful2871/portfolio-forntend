"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="max-w-7xl mx-auto w-full px-4 py-8 lg:flex lg:justify-between lg:items-center">
      {/* Left Section: Image */}
      <div className="lg:flex lg:justify-center lg:items-center lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="https://i.ibb.co.com/zhYdQPqr/ash-propfollio-image-removebg.png"
          alt="Ashraful Islam"
          width={400}
          height={400}
          className="h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px] mx-auto p-3 object-cover rounded-full border-4 border-[#DAC6A8]"
        />
      </div>

      {/* Right Section: Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-4xl font-bold text-[#D2B48C]">About Me</h2>

        <p className="text-gray-400 text-lg mt-6 leading-relaxed">
          <span className="text-4xl">Hi</span>, I&apos;m{" "}
          <strong>Ashraful Islam</strong>. I am a Full-stack Developer (MERN
          Stack), and I have progressively learned web technologies like HTML,
          CSS, JavaScript, React, and MongoDB. I am continuously learning and
          exploring many new technologies.
        </p>

        <p className="text-gray-400 text-lg mt-4 leading-relaxed">
          I am a student and an enthusiastic web developer dedicated to
          mastering the art of creating innovative web solutions. Beyond
          acquiring knowledge of technologies like HTML, CSS, JavaScript, React,
          and MongoDB, I have gained practical experience in applying these
          skills to real-world projects. My curiosity drives me to continually
          learn new tools and techniques, ensuring I stay ahead in this dynamic
          field. I strive to build user-focused applications and enjoy tackling
          challenges with creative problem-solving approaches.
        </p>

        {/* Contact Button */}
        <div className="mt-8 hidden">
          <button className="flex items-center gap-2 bg-[#D2B48C] text-black px-5 py-2 rounded-md font-medium hover:bg-[#C0A276] transition">
            Contact Me <Phone size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
