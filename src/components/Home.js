import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";
import Typed from "react-typed";
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";
import options from "./options";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 introLoadMain">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] introLoadMain">
          Naman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] introLoadMain">
          I'm a{" "}
          <TextLoop
            springConfig={{ stiffness: 70, damping: 31 }}
            adjustingSpeed={100}
          >
            <span>Developer</span>
            <span>Designer</span>
            <span>Freelancer</span>
          </TextLoop>{" "}
          {/* <Typed
            strings={["Developer", "Blogger", "Designer", "Freelancer"]}
            showCursor={false}
            typeSpeed={40}
            backSpeed={50}
            loop
          /> */}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] introLoadMain">
          I'm specialized in Front-end Development. I recently completed my
          Master of Information Technology from University of Newcastle. I'm
          passionate about web development so that I can leverage my creativity.
        </p>
        <div>
          <a href="/work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 introLoadMain">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-4" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
