import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Naman, nice to meet you. Please take a look around.</p>
          </div>
          <div>
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
