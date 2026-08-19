import React from "react";
import Particles from "react-tsparticles";
import options from "./options";
import servicesData from "./data/servicesData";
import {
  FaStore,
  FaShoppingCart,
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaTools,
  FaCloud,
  FaMobileAlt,
} from "react-icons/fa";

const icons = {
  FaStore,
  FaShoppingCart,
  FaLaptopCode,
  FaPaintBrush,
  FaSearch,
  FaTools,
  FaCloud,
  FaMobileAlt,
};

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

        <div className="grid sm:grid-cols-2 gap-4">
          {servicesData.map(({ id, icon, title, description }) => {
            const Icon = icons[icon];
            return (
              <div
                key={id}
                className="bg-card text-card-foreground rounded-2xl p-6 shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <Icon className="text-pink-600" size={28} />
                <h3 className="text-xl font-bold mt-4">{title}</h3>
                <p className="mt-2 text-sm opacity-80">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
