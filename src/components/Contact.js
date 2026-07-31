import React from "react";
import Particles from "react-tsparticles";
import options from "./options";
import { Button as MovingBorderButton } from "./ui/moving-border";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <Particles className="absolute z-[-1]" options={options} />
      <form
        action="https://getform.io/f/e1b7af9e-7af0-4f2b-a99c-fb430a600573"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-foreground">
            Contact
          </p>
          <p className="text-foreground pt-4">
            Submit the form below or shoot me an email -
            namanmattu4450@gmail.com
          </p>
        </div>
        <input
          className="bg-card shadow-md focus:shadow-lg outline-none text-foreground placeholder:text-muted-foreground p-2 transition-shadow duration-300"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-card shadow-md focus:shadow-lg outline-none text-foreground placeholder:text-muted-foreground transition-shadow duration-300"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-card shadow-md focus:shadow-lg outline-none text-foreground placeholder:text-muted-foreground transition-shadow duration-300"
          rows="8"
          name="message"
          placeholder="Message"
        ></textarea>
        <MovingBorderButton
          as="button"
          type="submit"
          containerClassName="w-48 h-14 my-8 mx-auto"
          className="hover:text-white hover:bg-pink-600 transition-colors duration-300"
        >
          Let's Collabrate
        </MovingBorderButton>
      </form>
    </div>
  );
};

export default Contact;
