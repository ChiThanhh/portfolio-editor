import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const letterPaths = [
  // Đ
  "M10,80 L10,20 L35,20 C50,20 55,40 35,45 L10,45 M0,32.5 L45,32.5", // D with added bar
  // ỗ (o + circumflex)
  "M60,35 A10,10 0 1,1 59.9,35.01 M57,28 L60,20 L63,28", // o with circumflex
  // space
  "",
  // C
  "M90,45 C90,30 110,30 110,45 C110,60 90,60 90,45",
  // h
  "M120,65 L120,45 C120,35 135,35 135,45 L135,65",
  // í (i + acute accent)
  "M145,65 L145,45 M145,35 L145,30 M142,30 L148,20", // i with acute accent
  // space
  "",
  // T
  "M170,20 L200,20 M185,20 L185,65",
  // h
  "M210,65 L210,45 C210,35 225,35 225,45 L225,65",
  // a
  "M240,45 C240,35 255,35 255,45 C255,55 240,55 240,45 Z M255,45 L255,65",
  // n
  "M270,65 L270,45 C270,35 285,35 285,45 L285,65",
  // h
  "M295,65 L295,45 C295,35 310,35 310,45 L310,65",
];

const FadeInSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 5000); // 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <svg width="600" height="100" viewBox="0 0 600 100">
            {letterPaths.map((d, i) =>
              d ? (
                <motion.path
                  key={i}
                  d={d}
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                />
              ) : null
            )}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FadeInSection;
