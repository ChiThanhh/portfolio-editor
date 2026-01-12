import React from "react";
import { Star, TrendingUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-center text-sm font-mono text-slate-300 mt-20 mb-4 cursor-pointer hover:text-white hover transition duration-500">
      <p className="mb-2 text-xs">Designed & Built by Minh Chien</p>
      <div className="flex justify-center space-x-4 text-xs">
        <div className="flex items-center space-x-1">
          <Star size={12} />
          <span>7.926</span>
        </div>
        <div className="flex items-center space-x-1">
          <TrendingUp size={12} />
          <span>4.054</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
