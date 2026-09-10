import React from "react";
import { ClientOnly } from "vite-react-ssg";
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
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full pb-8">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </h2>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="relative z-10 w-full grid md:grid-cols-2 gap-4 my-2 py-2 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl min-h-[420px]">
          <div className="h-full">
            <MagnifiedBento />
          </div>
          <div className="relative w-full h-full min-h-[420px]">
            <ClientOnly>{() => <IconCloud iconSlugs={iconSlugs} />}</ClientOnly>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
