import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaAddressCard,
} from "react-icons/fa";
import "../index.css";
import Logo from "../assets/logo.png";
import Pdf from "../assets/Naman-Resume.pdf";
import { NavLink } from "react-router-dom";
import { playHover, playClick } from "@/lib/sound";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = (e) => {
      if (e.matches) setNav(false);
    };
    mediaQuery.addEventListener("change", closeOnDesktop);
    return () => mediaQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <div className="fixed w-full z-50">
      <div className="relative z-30 h-[80px] flex justify-between items-center px-4 bg-background/95 backdrop-blur shadow-md text-foreground">
        <div>
          <a href="/" onMouseEnter={() => playHover()}>
            <img src={Logo} alt="Logo" className="logo" />
          </a>
        </div>
        {/* Menu */}
        <ul className=" hidden md:flex ya">
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/skills"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/services"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              Services
            </NavLink>
          </li>
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/work"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              Work
            </NavLink>
          </li>
          <li className="hover:text-pink-600" onMouseEnter={() => playHover()}>
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? "text-pink-600" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/* Hamburger */}
        <div
          onClick={() => {
            playClick();
            handleClick();
          }}
          className="relative z-50 md:hidden"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-20 w-full h-screen bg-background flex flex-col justify-center items-center text-foreground"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/services">Services</a>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600">
          <a href="/contact">Contact</a>
        </li>

        <ul className="absolute flex bottom-[30px]">
          <li>
            <a
              href="https://www.linkedin.com/in/naman-0308321a9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/naman9896"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a
              href="mailto: namanmattu4450@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              <FaAddressCard className="hover:text-pink-500" size={20} />
            </a>
          </li>
        </ul>
      </ul>
      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-1/2 -translate-y-1/2 left-0 introLoadSocial">
        <ul>
          <li className="group w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-card shadow-lg rounded-r-xl">
            <a
              href="https://www.linkedin.com/in/naman-0308321a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full h-full text-foreground"
              onMouseEnter={() => playHover()}
            >
              <span className="flex-1 pl-4 whitespace-nowrap">LinkedIn</span>
              <span className="w-[60px] h-full shrink-0 flex items-center justify-center">
                <FaLinkedin
                  className="text-gray-400 group-hover:text-[#0A66C2] transition-colors duration-300"
                  size={26}
                />
              </span>
            </a>
          </li>
          <li className="group w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-card shadow-lg rounded-r-xl">
            <a
              href="https://github.com/naman9896"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full h-full text-foreground"
              onMouseEnter={() => playHover()}
            >
              <span className="flex-1 pl-4 whitespace-nowrap">Github</span>
              <span className="w-[60px] h-full shrink-0 flex items-center justify-center">
                <FaGithub
                  className="text-gray-400 group-hover:text-foreground transition-colors duration-300"
                  size={26}
                />
              </span>
            </a>
          </li>
          <li className="group w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-card shadow-lg rounded-r-xl">
            <a
              href="mailto: namanmattu36166@gmail.com"
              className="flex items-center w-full h-full text-foreground"
              onMouseEnter={() => playHover()}
            >
              <span className="flex-1 pl-4 whitespace-nowrap">Email</span>
              <span className="w-[60px] h-full shrink-0 flex items-center justify-center">
                <FaEnvelope
                  className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                  size={26}
                />
              </span>
            </a>
          </li>
          <li className="group w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-card shadow-lg rounded-r-xl">
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center w-full h-full text-foreground"
              onMouseEnter={() => playHover()}
            >
              <span className="flex-1 pl-4 whitespace-nowrap">Resume</span>
              <span className="w-[60px] h-full shrink-0 flex items-center justify-center">
                <FaAddressCard
                  className="text-gray-400 group-hover:text-foreground transition-colors duration-300"
                  size={26}
                />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
