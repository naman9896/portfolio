import React from "react";

import data from "./data/projectData";
import StackingCards from "./ui/stacking-card";

const Work = () => {
  return (
    <div name="work" className="w-full text-foreground">
      <div className="max-w-[1000px] mx-auto p-4 pt-28 flex flex-col w-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-foreground border-pink-600">
            Work
          </h2>
          <p className="py-6">Check out some of my recent work</p>
        </div>
      </div>
      <StackingCards projects={data} />
    </div>
  );
};

export default Work;
