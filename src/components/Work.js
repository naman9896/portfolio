import React from "react";

import Particles from "react-tsparticles";
import options from "./options";
import data from "./data/projectData";

const Work = () => {
  const projects = data.map((project) => {
    return (
      <div
        key={project.id}
        style={{ backgroundImage: `url(./icons/${project.image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
      >
        {/* Hover Effects */}
        <div className="opacity-0 group-hover:opacity-100 text-center">
          <span className="text-2xl font-bold text-white tracking-wider ">
            {project.name}
          </span>
          <div className="pt-8 text-center">
            <a href={project.demo}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={project.code}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div name="work" className="w-full md:h-screen text-gray-300">
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects}
        </div>
      </div>
    </div>
  );
};

export default Work;
