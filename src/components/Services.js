import React from "react";
import Particles from "react-tsparticles";
import options from "./options";
import servicesData from "./data/servicesData";
import { CircularCarousel } from "./ui/circular-carousel";

const carouselItems = servicesData.map(({ id, title, description, tag }) => ({
  id: String(id),
  title,
  description,
  tag,
}));

const Services = () => {
  return (
    <div name="services" className="w-full min-h-screen text-foreground">
      <Particles className="absolute z-[-1]" options={options} />
      <div className="max-w-[1000px] mx-auto p-4 pt-28 flex flex-col w-full pb-8">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-foreground border-pink-600">
            Services
          </p>
          <p className="py-6">Here's what I can help you with</p>
        </div>

        <div className="w-full overflow-hidden py-8">
          <CircularCarousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
};

export default Services;
