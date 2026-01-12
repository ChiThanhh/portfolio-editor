import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GithubIcon, ExternalLinkIcon, PlayCircle } from "lucide-react";
import beforeBDS from "../assets/video/1.1 Before-VideoBĐS.mp4";
import afterBDS from "../assets/video/1.2 After-VideoBĐS.mp4";
import beforeAtus from "../assets/video/2.1 Before-VideoSocial-ATUS.mp4";
import afterAtus from "../assets/video/2.2 After-VideoSocial-ATUS.mp4";
import beforeTThanh from "../assets/video/3.1 Before-VideoSocial-TranThanh.mp4";
import afterTThanh from "../assets/video/3.2 After-VideoSocial-TranThanh.mp4";

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.2, 
      ease: "easeOut",
    },
  }),
};

const FeaturedProjects = () => {
  const projects = [
    {
      title: "Luxury Real Estate Showcase",
      description:
        "A cinematic transformation of raw property footage using professional color grading, smooth motion transitions, and subtle ambient sound design — designed to elevate visual storytelling and attract potential buyers.",
      tech: ["Capcut", "Color Grading", "Cinematic Effects"],
      videoBefore: beforeBDS,
      videoAfter: afterBDS,
    },
    {
      title: "Social Video Showcase",
      description:
        "Transforming raw social footage into a modern, engaging video through dynamic pacing, refined color grading, and smooth transitions — designed to highlight personality, emotion, and boost audience engagement across social platforms.",
      tech: ["Capcut", "Social Media Optimization", "Transitions"],
      videoBefore: beforeAtus,
      videoAfter: afterAtus,
    },
    {
      title: "Voice-to-Video Short",
      description:
        "Voice-Driven Short Video Creating short-form videos built from voice-over first, then crafted with visuals, pacing, and transitions that follow the rhythm and emotion of the voice — designed to deliver clear storytelling and strong audience retention.",
      tech: ["Capcut", "Multi-camera Editing", "Smooth Transitions"],
      videoBefore: beforeTThanh,
      videoAfter: afterTThanh,
    },
  ];

  return (
    <div id="projects" className="mt-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center mb-3">
        <h2 className="text-teal-300 text-2xl font-mono whitespace-nowrap">
          02.{" "}
          <span className="text-3xl font-bold text-white">
            Featured Video Projects
          </span>
        </h2>
        <div className="flex-grow h-px bg-[#29497a] ml-6"></div>
      </div>

      {projects.map((project, idx) => {
        const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
        const videoBeforeRef = useRef(null);
        const videoAfterRef = useRef(null);

        const handleVideoClick = (videoRef) => {
          if (videoRef.current) {
            const originalObjectFit = videoRef.current.style.objectFit;
            videoRef.current.style.objectFit = 'contain';
            
            if (videoRef.current.requestFullscreen) {
              videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) {
              videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) {
              videoRef.current.msRequestFullscreen();
            }
            
            const handleFullscreenChange = () => {
              if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                videoRef.current.style.objectFit = originalObjectFit;
                document.removeEventListener('fullscreenchange', handleFullscreenChange);
                document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
                document.removeEventListener('msfullscreenchange', handleFullscreenChange);
              }
            };
            
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.addEventListener('msfullscreenchange', handleFullscreenChange);
          }
        };

        return (
          <motion.div
            key={idx}
            ref={ref}
            variants={fadeInVariant}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={idx}
            className="py-16"
          >
            {/* Project Info */}
            <div className="text-center mb-8">
              <p className="text-teal-300 font-mono text-sm mb-2">
                Featured Project
              </p>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
                {project.description}
              </p>
              <ul className="flex justify-center flex-wrap gap-4 text-sm font-mono text-gray-400">
                {project.tech.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>

            {/* Before/After Comparison */}
            {/* Mobile View - Stacked */}
            <div className="md:hidden relative max-w-md mx-auto h-[600px]">
              {/* BEFORE - Bottom Left */}
              <div className="absolute bottom-0 left-0 w-[45%] z-10">
                <div className="absolute -top-3 left-2 z-20">
                  <span className="bg-gray-800 text-white px-3 py-1.5 rounded font-bold text-xs tracking-wider">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700 aspect-[9/16]">
                  <video
                    ref={videoBeforeRef}
                    src={project.videoBefore}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(videoBeforeRef)}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </div>

              {/* AFTER - Top Right */}
              <div className="absolute top-0 right-0 w-[70%] z-20">
                <div className="absolute -top-3 left-4 z-30">
                  <span className="bg-white text-gray-900 px-3 py-1.5 rounded font-bold text-xs tracking-wider">
                    AFTER
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-white aspect-[9/16]">
                  <video
                    ref={videoAfterRef}
                    src={project.videoAfter}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(videoAfterRef)}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  />
                  <div
                    onClick={() => handleVideoClick(videoAfterRef)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <PlayCircle size={40} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop View - Side by Side */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* BEFORE */}
              <div className="relative group/video">
                <div className="absolute -top-3 left-4 z-20">
                  <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold text-sm tracking-wider">
                    BEFORE
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700">
                  <video
                    ref={videoBeforeRef}
                    src={project.videoBefore}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(videoBeforeRef)}
                    className="w-full h-full object-cover cursor-pointer transition duration-300 grayscale-[30%]"
                  />
                  <div
                    onClick={() => handleVideoClick(videoBeforeRef)}
                    className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/video:opacity-100 cursor-pointer"
                  >
                    <PlayCircle size={48} className="text-white/80" />
                  </div>
                </div>
              </div>

              {/* AFTER */}
              <div className="relative group/video">
                <div className="absolute -top-3 left-4 z-20">
                  <span className="bg-teal-500 text-white px-4 py-2 rounded font-bold text-sm tracking-wider">
                    AFTER
                  </span>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl border-2 border-teal-500">
                  <video
                    ref={videoAfterRef}
                    src={project.videoAfter}
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={() => handleVideoClick(videoAfterRef)}
                    className="w-full h-full object-cover cursor-pointer transition duration-300"
                  />
                  <div
                    onClick={() => handleVideoClick(videoAfterRef)}
                    className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/video:opacity-100 cursor-pointer"
                  >
                    <PlayCircle size={48} className="text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
