import React from "react";
import Particles from "react-tsparticles";
import options from "./options";
import MagnifiedBento from "./ui/magnified-bento";
import { IconCloud } from "./ui/interactive-icon-cloud";

const iconSlugs = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "react",
  "nextdotjs",
  "github",
  "git",
  "nodedotjs",
  "mongodb",
  "tailwindcss",
  "framer",
  "docker",
  "csharp",
  "android",
  "amazonaws",
  "firebase",
  "figma",
  "shopify",
  "vercel",
  "flutter",
];

const Skills = () => {
  return (
    <div name="skills" className="text-foreground w-full min-h-screen pt-28">
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full pb-8">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="relative z-10 w-full grid md:grid-cols-2 gap-4 my-2 py-2 bg-background rounded-3xl min-h-[420px]">
          <div className="h-full">
            <MagnifiedBento />
          </div>
          <div className="relative w-full h-full min-h-[420px]">
            <IconCloud iconSlugs={iconSlugs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
