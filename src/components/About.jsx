import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay },
  },
});

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      id="about"
      className="mt-50 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10"
    >
      {/* Left content */}
      <div className="md:w-2/3">
        <motion.div
          variants={fadeInUp(0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex items-center mb-12"
        >
          <h2 className="text-teal-300 text-2xl font-mono whitespace-nowrap">
            01. <span className="text-3xl font-bold text-white">About Me</span>
          </h2>
          <div className="flex-grow h-px bg-[#29497a] ml-6"></div>
        </motion.div>

        {[
          {
            text: `Hello! My name is Tran Minh Chien, a Video Editor passionate about crafting visual stories that connect and inspire. I specialize in turning raw footage into polished, cinematic, and engaging content that captures attention and delivers emotion.`,
            delay: 0.2,
          },
          {
            text: `Over the past years, I’ve worked on a variety of projects including short-form content, marketing videos, product showcases, and storytelling pieces. These experiences strengthened my sense of pacing, color, sound design, and creative direction.`,
            delay: 0.3,
          },
          {
            text: `I’m passionate about clean, impactful edits and creating smooth, modern visuals. I enjoy exploring new editing techniques, motion graphics, and tools that help elevate video quality. I also love leveraging AI to speed up workflows and bring fresh ideas to life.`,
            delay: 0.4,
          },
          // {
          //   text: `Here are a few technologies I’ve been working with recently:`,
          //   delay: 0.5,
          // },
        ].map((item, index) => (
          <motion.p
            key={index}
            className="text-gray-400 leading-relaxed mb-4 text-sm"
            variants={fadeInUp(item.delay)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {item.text}
          </motion.p>
        ))}

        <motion.ul
          className="grid grid-cols-2 gap-1 mt-2 font-mono text-xs text-gray-400"
          variants={fadeInUp(0.6)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "Tailwind CSS",
            "PostgreSQL",
          ].map((tech, index) => (
            <></>
            // <li
            //   key={index}
            //   className="before:content-['▹'] before:text-teal-300 before:mr-2"
            // >
            //   {/* {tech} */}
            // </li>
          ))}
        </motion.ul>
      </div>

      {/* Right Avatar */}
      <motion.div
        className="md:w-1/3 flex justify-center"
        variants={fadeInUp(0.7)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full max-w-xs aspect-square overflow-hidden rounded border-1 border-teal-300 group">
          <img
            src="/NMS_2511.JPG"
            alt="Avatar"
            className="w-full h-full object-cover  group-hover:grayscale-0 transition duration-500"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
