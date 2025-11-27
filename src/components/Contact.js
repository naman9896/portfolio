import React from "react";
import Particles from "react-tsparticles";
import options from "./options";

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
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-4">
            Submit the form below or shoot me an email -
            namanmattu4450@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          rows="8"
          name="message"
          placeholder="Message"
        ></textarea>
        <button
          type=""
          className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-3 px-4 my-8 mx-auto flex items-center"
        >
          Let's Collabrate
        </button>
      </form>
    </div>
  );
};

export default Contact;
