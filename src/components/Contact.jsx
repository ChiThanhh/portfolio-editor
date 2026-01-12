import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-40 min-h-[500px] px-6 flex flex-col items-center justify-center text-center"
    >
      <p className="text-teal-300 font-mono text-sm mb-4">03 What’s Next?</p>

      <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">
        Get In Touch
      </h2>

      <p className="max-w-xl text-slate-400 mb-10 text-base sm:text-lg">
        I'm currently open to new opportunities, especially roles related to
        Video Editing, Post-production, and Creative Content Production. Whether
        you have a project idea, need an editor for your videos, or simply want
        to connect — feel free to reach out!
      </p>

      <a
        href="mailto:thanhdohn2003@gmail.com"
        className="border text-sm font-mono text-teal-300 px-6 border-teal-300
  py-3 rounded hover:bg-teal-300 hover:text-[#0b192f] transition duration-500"
      >
        Say Hello
      </a>
    </motion.div>
  );
};

export default Contact;
