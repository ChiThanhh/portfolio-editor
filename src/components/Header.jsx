import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // hoặc Heroicons tùy bạn
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Kéo xuống
        setShowHeader(false);
      } else {
        // Kéo lên
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  const menuItems = ["About", "Projects", "Contact"];

  return (
    <header
      className={`w-full px-14 py-4 flex items-center justify-between bg-[#0b192f] fixed top-0 z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <a href="/" className="group flex items-center space-x-2 ">
        <div className="w-10 h-10 text-teal-300 group-hover:scale-110 transition-transform duration-300">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 96"
            fill="none"
            className="w-full h-full"
          >
            <polygon
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points="39 0 0 22 0 67 39 90 78 68 78 23"
            />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              fill="currentColor"
              fontSize="32"
              fontFamily="monospace"
              dy=".3em"
            >
              B
            </text>
          </svg> */}
        </div>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 items-center text-sm font-mono text-gray-300">
        {menuItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: index * 0.3 }}
          >
            <Link
              to={item.toLowerCase()}
              smooth={true}
              duration={800}
              offset={-80}
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer hover:text-teal-300 transition-colors duration-200"
            >
              <span className="text-teal-300 mr-1">0{index + 1}.</span> {item}
            </Link>
          </motion.div>
        ))}

        {/* <motion.a
          href="/CV_DOCHITHANH_DEVELOPER.pdf"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: menuItems.length * 0.3 }}
          className="ml-4 px-4 py-2 border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-[#0b192f] transition-colors duration-300"
        >
          Resume
        </motion.a> */}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-teal-300">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full right-0 mt-2 w-48 bg-[#112240] rounded-md shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col items-start p-4 space-y-3 text-sm font-mono text-gray-300">
              {menuItems.map((item, index) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-teal-300 cursor-pointer"
                >
                  <span className="text-teal-300 mr-1">0{index + 1}.</span>{" "}
                  {item}
                </Link>
              ))}
              {/* <a
                href="/CV_DOCHITHANH_DEVELOPER.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-3 py-1 border border-teal-300 text-teal-300 rounded hover:bg-teal-300 hover:text-[#0b192f]"
              >
                Resume
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
