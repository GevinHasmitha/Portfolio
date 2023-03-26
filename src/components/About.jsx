import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full "
        data-aos="fade-right"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Heyyy!!! First of all, let me introduce myself. I'm currently a
          software engineering undergraduate and am in my second year. I'm 19
          years old and completing my degree at university of westminster.
        </p>
        <br />
        <p className="text-xl">
          So, about me, I would say that I'm a passionate and independant
          learner, always eager to learn new technologies and explore different
          opportunities. I do karate, love football and dogs. In my free time I
          love reading books and playing the guitar.
        </p>
      </div>
    </div>
  );
};

export default About;
