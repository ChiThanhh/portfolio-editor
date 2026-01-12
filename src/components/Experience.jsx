import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const fadeInSection = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay },
  },
});

const Experience = ({ experienceData, activeIndex, setActiveIndex }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const active = experienceData[activeIndex];

  return (
    <div
      ref={ref}
      id="experience"
      className="mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px]"
    >
      {/* Heading */}
      <motion.div
        variants={fadeInSection(0.1)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="flex items-center mb-12"
      >
        <h2 className="text-teal-300 text-2xl font-mono whitespace-nowrap">
          02.{" "}
          <span className="text-3xl font-bold text-white">Where I’ve Worked</span>
        </h2>
        <div className="flex-grow h-px bg-[#29497a] ml-6"></div>
      </motion.div>

      {/* Layout: Tabs & Content */}
      <motion.div
        className="flex flex-col sm:flex-row gap-10"
        variants={fadeInSection(0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Tabs */}
        <div className="sm:w-1/4 font-mono text-gray-400">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer py-2 transition-colors duration-300 pl-4 border-l border-teal-300 ${
                index === activeIndex
                  ? "text-teal-300 font-semibold"
                  : "hover:text-teal-300"
              }`}
              variants={fadeInSection(0.3 + index * 0.05)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {exp.company}
            </motion.div>
          ))}
        </div>

        {/* Content */}
        <motion.div
          className="sm:w-3/4"
          variants={fadeInSection(0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <h3 className="text-xl font-bold text-white">
                {active.position}{" "}
                <a
                  href={active.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-300 hover:underline"
                >
                  @ {active.company}
                </a>
              </h3>
              <p className="font-mono text-sm text-gray-500 mt-1">{active.time}</p>
              <ul className="mt-6 space-y-4 text-gray-400 text-sm">
                {active.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="before:content-['▹'] before:text-teal-300 before:mr-2 leading-relaxed"
                    variants={fadeInSection(0.4 + i * 0.1)}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
