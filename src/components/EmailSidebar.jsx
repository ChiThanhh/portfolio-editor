import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EmailSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.4, delay: 1.3 }}
      className="hidden xl:flex fixed right-20 bottom-0 flex-col items-center space-y-4 z-40"
    >
      <a
        href="mailto:tranminhchien9977@gmail.com"
        className="text-gray-400 text-sm hover:text-teal-300 transition-transform duration-500 writing-transform vertical transform hover:-translate-y-1"
        style={{ writingMode: "vertical-rl" }}
      >
        tranminhchien9977@gmail.com
      </a>
      <div className="w-px h-32 bg-gray-400 mt-10 ml-3" />
    </motion.div>
  );
};

export default EmailSidebar;
