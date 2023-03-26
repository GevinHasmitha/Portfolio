import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Lets connect!! Submit the form below.... </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/fbf2dd82-3149-46b0-bfca-01e9d5de2b53"
            method="POST"
            className="flex flex-col w-full md:w-1/2 h-full gap-4 "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            ></textarea>
            <button className="text-white bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 my-8 mx-auto flex items-center  rounded-md hover:scale-110 duration-300">
              Let's Connect!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
