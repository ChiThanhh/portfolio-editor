import React, { useState } from 'react';
import Introduction from './Introduction';
import About from './About';
import Experience from './Experience';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';
import Contact from './Contact';
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';
import EmailSidebar from './EmailSidebar';
import {
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  CodepenIcon,
  Linkedin,
} from 'lucide-react';

const socialLinks = [
  { href: 'https://facebook.com', icon: <GithubIcon size={22} /> },
  { href: 'https://instagram.com', icon: <InstagramIcon size={22} /> },
  { href: 'https://twitter.com', icon: <TwitterIcon size={22} /> },
  { href: 'https://linkedin.com', icon: <Linkedin size={22} /> },
];

 const experienceData = [
  {
    company: "Tam Luxury",
    companyUrl: "https://tamluxury.vn",
    position: "Fullstack Developer",
    time: "Mar 2025 – Present",
    responsibilities: [
      "Developed an internal ERP system using React.js, Node.js, and PostgreSQL to manage inventory, HR, and workflows.",
      "Integrated AWS S3 for file storage and implemented secure authentication with role-based access control.",
      "Built a real-time internal chat app using Socket.IO, improving communication across departments.",
      "Collaborated with internal users to optimize UI/UX and adapt features based on real usage."
    ],
  },
  {
    company: "Pascal Group",
    companyUrl: "https://pascalgroup.vn",
    position: "Fullstack Developer",
    time: "Aug 2024 – Mar 2025",
    responsibilities: [
      "Built a credit card onboarding web app using React.js and Node.js for partner clients.",
      "Integrated third-party APIs like TrustingSocial for facial recognition and ID scanning.",
      "Focused on responsive design with Tailwind CSS and enhanced security for user data.",
      "Worked closely with stakeholders to align technical implementation with business logic."
    ],
  },
  {
    company: "Bluesky Technology",
    companyUrl: "https://blueskytech.vn",
    position: "Frontend Intern",
    time: "Jun 2024 – Aug 2024",
    responsibilities: [
      "Worked on a café management web app using Next.js and Tailwind CSS.",
      "Developed responsive UI components and integrated APIs from backend team.",
      "Practiced agile collaboration, Git workflows, and frontend performance tuning.",
    ],
  },
];



const Main = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="relative flex justify-center items-center text-start text-white min-h-screen ">
      <section className="max-w-screen-xl pt-40 w-full text-left ">
        <Introduction />
        <About />
        {/* <Experience
          data={experienceData}
          experienceData={experienceData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        /> */}
        <FeaturedProjects />
        {/* <OtherProjects /> */}
        <Contact />
        <Footer />
      </section>
      <SocialSidebar socialLinks={socialLinks} />
      <EmailSidebar />
    </main>
  );
};

export default Main;