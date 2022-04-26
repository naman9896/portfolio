import React from "react";
import data from "./skillsData";
import Particles from "react-tsparticles";
import options from "./options";

const Skills = () => {
  const skillCards = data.map((card) => {
    return (
      <div className="shadow-md shadow-[#040c16] bg-[#0a192f] hover:scale-110 duration-500">
        <img
          className="w-20 mx-auto"
          src={`./icons/${card.image}`}
          alt={card.text + " icon"}
        />
        <p className="my-4">{card.text}</p>
      </div>
    );
  });
  return (
    <div name="skills" className="text-gray-300 w-full h-screen">
      {/* Container */}
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillCards}
        </div>
      </div>
    </div>
  );
};

export default Skills;
