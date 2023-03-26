import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

const NavBar = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  });
  // ----------------------------------------------------------------------------------------------------
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  //  =========================================================================================================
  return (
    <div
      className="flex justify-between items-center w-full
     h-22 text-white fixed bg-black px-6 z-50"
    >
      <div>
        <h1 className="text-4xl font-signature ml-8 mt-5">Gevin's Portfolio</h1>
      </div>
      {/* -------------------------------------------------------------------------------- */}

      {/*Created a navigation bar. A array is created and list items are created by
        iterating over the array(We can also do this the normal was by defining
        individual list items and copying and pasting the tailwind classes to each
        list item by by iterating using a loop, code duplication is prevented) */}
      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-medium 
            text-gray-500 hover:scale-105 duration-200 "
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* ----------------------------------------------------------------------------------
        If the div(icon) is clicked FaTimes icon will change to FaBars icon and vice versa */}
      <div
        onClick={() => setNav(!nav)}
        className=" md:hidden  cursor-pointer pr-4 z-96 text-gray-500 z-50"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* --------------------------------------------------------------------------------
      if nav(which was set by clicking on the icon) is true, the below code will be displayed/
      returned therby showing the mobile view */}

      {nav === true ? (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 
             w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 md:hidden "
        >
          {/* setNav set to false so when linked clicked, it will exit out of mobile view */}
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(false)} to="home">
              home
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(false)} to="about">
              about
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(false)} to="portfolio">
              portfolio
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(false)} to="experience">
              experience
            </Link>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => setNav(false)} to="contact">
              contact
            </Link>
          </li>
        </ul>
      ) : (
        <></>
      )}
      {/* ------------------------------------------------------------------------------- */}
    </div>
  );
  //   ==========================================================================================================================
};

export default NavBar;
