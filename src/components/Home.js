import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
// import { Link } from "react-scroll";
// import Typed from "react-typed";
import TextLoop from "react-text-loop";
import Particles from "react-tsparticles";
import options from "./options";
import { Button as MovingBorderButton } from "./ui/moving-border";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 introLoadMain">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-foreground introLoadMain">
          Naman
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-muted-foreground introLoadMain">
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
        <p className="text-muted-foreground py-4 max-w-[700px] introLoadMain">
          I'm specialized in Front-end Development. I recently completed my
          Master of Information Technology from University of Newcastle. I'm
          passionate about web development so that I can leverage my creativity.
        </p>
        <div className="introLoadMain">
          <MovingBorderButton
            as="a"
            href="/work"
            containerClassName="w-44 h-14 my-2"
            className="group hover:text-white hover:bg-pink-600 transition-colors duration-300"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300 ml-2">
              <HiArrowNarrowRight />
            </span>
          </MovingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
