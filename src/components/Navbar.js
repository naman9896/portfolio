import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "../index.css";
import Logo from "../assets/logo.png";
import Pdf from "../assets/NamanResume.pdf";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <a href="/">
          <img src={Logo} alt="Logo Image" className="logo" />
        </a>
      </div>

      {/* Menu */}
      <ul className=" hidden md:flex ya">
        <li className="hover:text-pink-600">
          <NavLink
            to="/"
            className={(navData) => (navData.isActive ? "text-pink-600" : "")}
          >
            Home
          </NavLink>
        </li>
        <li className="hover:text-pink-600">
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? "text-pink-600" : "")}
          >
            About
          </NavLink>
        </li>
        <li className="hover:text-pink-600">
          <NavLink
            to="/skills"
            className={(navData) => (navData.isActive ? "text-pink-600" : "")}
          >
            Skills
          </NavLink>
        </li>
        <li className="hover:text-pink-600">
          <NavLink
            to="/work"
            className={(navData) => (navData.isActive ? "text-pink-600" : "")}
          >
            Work
          </NavLink>
        </li>
        <li className="hover:text-pink-600">
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? "text-pink-600" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-50">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 z-20 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
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
            >
              <FaLinkedin className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a href="https://github.com/naman9896" target="_blank">
              <FaGithub className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a href="mailto: namanmattu4450@gmail.com" target="_blank">
              <HiOutlineMail className="hover:text-pink-500" size={20} />
            </a>
          </li>
          <li>
            <a href={Pdf} target="_blank">
              <BsFillPersonLinesFill
                className="hover:text-pink-500"
                size={20}
              />
            </a>
          </li>
        </ul>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 introLoadSocial">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/naman-0308321a9/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/naman9896"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              href="mailto: namanmattu36166@gmail.com"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href={Pdf}
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
