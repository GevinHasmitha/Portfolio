import React from "react";
import HeroImage from "../assets/myself.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  return (
    //bg color:     bg-gradient-to-b from-black via-black to-gray-800
    <div name="home" className=" h-screen w-full ">
      <div className="max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center  px-4 md:flex-row">
        <div className="flex flex-col justify-center  h-full">
          {/* =========================================================================================================================================== */}
          <h2 className="text-4xl md:text-7xl font-bold p-4  text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text pl-0">
            lala
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            <b>
              I'm a Software engineering undergraduate with experience in a
              variety of programming languages. Skilled in problem-solving with
              a passion for learning new things and making an impact. I am an
              independent learner who can easily grasp new technologies by self
              learning.
            </b>
          </p>
          <div>
            <Link to="portfolio" smooth duration={600}>
              <button className="animate-bounce group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 cursor-pointer ">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
          {/* -------------------------------------------------------------- */}
        </div>
        <div>
          <img
            data-aos="fade-right"
            src={HeroImage}
            alt="my Pic"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        {/* ============================================================================================================================================ */}
      </div>
    </div>
  );
};

export default Home;
