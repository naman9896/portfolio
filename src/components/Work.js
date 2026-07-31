import React from "react";

import Particles from "react-tsparticles";
import options from "./options";
import data from "./data/projectData";
import StackingCards from "./ui/stacking-card";

const Work = () => {
  return (
    <div name="work" className="w-full text-foreground">
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto p-4 pt-28 flex flex-col w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-foreground border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
      </div>
      <StackingCards projects={data} />
    </div>
  );
};

export default Work;
