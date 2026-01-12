import React from 'react';
import { motion, AnimatePresence } from "framer-motion";

const SocialSidebar = ({ socialLinks }) => {
  return (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 2.4, delay:1.3 }}
className="hidden xl:flex fixed left-20 bottom-0 flex-col items-center space-y-4 z-40 mx-10"
>

      {socialLinks.map((link, index) => (
        <a
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-teal-300 transition-transform duration-500 transform hover:-translate-y-1 cursor-pointer"
        >
          {link.icon}
        </a>
      ))}
      <div className="w-px h-32 bg-gray-400 mt-4" />
    </motion.div>
  );
};

export default SocialSidebar;