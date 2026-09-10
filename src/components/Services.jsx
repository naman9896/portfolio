import React from "react";
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
      <div className="max-w-[1000px] mx-auto p-4 pt-28 flex flex-col w-full pb-8">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-foreground border-pink-600">
            Services
          </h2>
          <p className="py-6">
            Web development services for small businesses and startups in
            Newcastle, Lake Macquarie and the Hunter region — here's what I can
            help you with.
          </p>
        </div>

        <div className="w-full overflow-hidden py-8">
          <CircularCarousel items={carouselItems} />
        </div>
      </div>
    </div>
  );
};

export default Services;
