import React from "react";
import "../index.css";
import Particles from "react-tsparticles";
import options from "./options";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <Particles className="absolute z-[-1]" options={options} />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 introLoadSocial">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold introLoadSocial">
            <p>Hi, I'm Naman, nice to meet you. Please take a look around.</p>
          </div>
          <div className="introLoadAbout">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              cum vel amet, impedit distinctio repellendus quasi ab corporis
              eveniet molestiae aliquam perspiciatis est harum nemo
              voluptatibus! Deserunt, laudantium? Provident temporibus quisquam
              quibusdam inventore iste commodi laborum alias illum voluptatum
              enim debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
