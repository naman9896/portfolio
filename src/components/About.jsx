import React from "react";
import "../index.css";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-foreground">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 introLoadSocial">
            <h2 className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </h2>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold introLoadSocial">
            <p>Hi, I'm Naman, nice to meet you. Please take a look around.</p>
          </div>
          <div className="introLoadAbout">
            <p>
              I'm a web developer based in Newcastle, NSW, and I enjoy creating
              things that live on the internet. I work with small businesses,
              tradies and startups across Newcastle, Lake Macquarie and the wider
              Hunter region to build fast, modern websites. My interest in web
              development started back in 2020 when I decided to try editing
              custom Tumblr themes — turns out hacking together a custom reblog
              button taught me a lot about HTML & CSS!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
