import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Introduction = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <motion.p
        className="text-teal-300 font-mono text-lg mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        Tran Minh Chien.
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-500 mt-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.9 }}
      >
        I craft visual stories that captivate audiences.
      </motion.h2>

      <motion.p
        className="mt-8 text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
      >
        I'm a Video Editor with a strong passion for transforming raw footage
        into meaningful, engaging, and visually compelling stories. I specialize
        in creating clean, dynamic, and high-impact video content using modern
        editing tools and techniques. Whether it’s promotional videos, social
        media content, cinematic edits, or storytelling pieces, I focus on
        delivering polished, professional, and audience-ready results. My goal
        is to bring clarity, emotion, and creativity into every project I work
        on.
      </motion.p>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
      >
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-70}
          className="cursor-pointer px-7 py-3.5 border border-teal-300 text-teal-300 font-mono rounded hover:bg-teal-300 hover:text-[#0b192f] transition text-base duration-500"
        >
          Learn more about me!
        </Link>
      </motion.div>
    </div>
  );
};

export default Introduction;
