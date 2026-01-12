import React from "react";
import { Folder, GithubIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const OtherProjects = () => {
const projects = [
  {
    title: "Recruitment Website",
    desc: "Developed a recruitment platform for Tam Luxury to manage job postings and applications. Built a responsive UI and integrated backend APIs for candidate tracking.",
    tags: ["React.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Payroll Management System",
    desc: "Designed and implemented a payroll calculation web app for Tam Luxury to automate salary processing, tax deductions, and exportable reports.",
    tags: ["React.js", "MUI", "Node.js"],
  },
  {
    title: "AI-assisted Product Detection App",
    desc: "Collaborated with the AI team to develop a web app that filters and classifies products based on uploaded images. Improved product identification speed in production.",
    tags: ["React.js", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Gold & Diamond Pricing Tool",
    desc: "Created a pricing calculator for internal production use to estimate costs for gold and diamond materials. Focused on accuracy and intuitive UI for factory staff.",
    tags: ["React.js", "MUI", "Node.js"],
  },
  {
    title: "Financial CRM System",
    desc: "Built a CRM platform for Pascal Group to track customer sales, revenue, and engagement metrics. Enhanced data visualization and user workflows.",
    tags: ["React.js", "PHP", "MySQL"],
  },
];


  return (
    <div className="mt-40 min-h-[500px] px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <h2 className="text-white text-2xl font-bold text-center">
        Other Noteworthy Projects
      </h2>
      <p className="text-center text-teal-400 mt-2 mb-12">
        <a href="#" className="hover:underline">
          view the archive
        </a>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.18 }}
            viewport={{ once: true }}
            className="bg-[#112240] p-6 rounded-md hover:-translate-y-1 transition transform duration-500"
          >
            <div className="flex justify-between items-start mb-4">
              <Folder />
              {/* <div className="flex space-x-2 text-gray-400">
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <GithubIcon
                    size={20}
                    className="hover:text-teal-300 transition"
                  />
                </a>
                <a
                  href="https://external-link.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ExternalLinkIcon
                    size={20}
                    className="hover:text-teal-300 transition"
                  />
                </a>
              </div> */}
            </div>
            <h3 className="text-white font-bold text-lg mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
              {project.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="text-sm border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-black transition duration-500">
          Show More
        </button>
      </div>
    </div>
  );
};

export default OtherProjects;
