import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Naman</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a{" "}
          <Typed
            strings={["Developer", "Designer", "Blogger", "Freelancer"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm specialized in Full-Stack Development. Currently, I'm pursuing my
          BCA from Chitkara University. I'm passionate about web development so
          that I can leverage my creativity.
        </p>
        <div>
          <a href="/work">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
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
