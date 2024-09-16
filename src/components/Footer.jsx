import React, { useState } from "react";
import Link from "next/link";
import { FiGithub, FiInstagram, FiYoutube, FiLinkedin, FiTwitter } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
   
   
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "www.linkedin.com/in/cosmooguide-guide-130792325",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/cosmooguide/",
    }
  ];

  // Replace with your company name and logo PNG path
  const companyName = "COSMOOGUIDE";
  const companyLogo = "DS.png";

  return (
    <footer className="footer bg-[#f7f5de]">
      <div className="container mx-auto flex justify-between items-center py-4 ml-1">
        <div className="flex items-center">
          {companyLogo && (
            <img src={companyLogo} alt={companyName} className="mr-6 h-8 ml-10 sm:ml-19" />
          )}
          <p className="font-bold font-serif text-xl">{companyName}</p>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#404145] mr-4">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <ul
          className={`flex-col sm:flex-row sm:flex gap-8 mr-12 items-center ${isOpen ? "flex" : "hidden"}`}
        >
          {socialLinks.map(({ icon, link, name }) => (
            <li
              key={name}
              className="text-2xl text-[#404145] hover:text-[#1DBF73] transition-all"
            >
              <Link href={link}>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
