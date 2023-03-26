import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const linksArray = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      hreff: "https://www.linkedin.com/in/gevin-karunarathne-8121a3223/",
      style: "rounded-tr-lg",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      hreff: "https://github.com/GevinHasmitha",
    },
    {
      id: 3,
      child: (
        <>
          Gmail <HiOutlineMail size={30} />
        </>
      ),
      hreff: "mailto:gevinkarunarathne@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      hreff: "https://www.linkedin.com/in/gevin-karunarathne-8121a3223/",
      style: "rounded-br-lg",
    },
  ];
  return (
    <div className=" hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {linksArray.map(({ id, child, hreff, style }) => (
          <li
            key={id}
            className={
              "flex justify-between  items-center w-40 h-14 px-4 bg-fuchsia-700/70 ml-[-100px] hover:ml-[-0px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={hreff}
              className="flex justify-between items-center w-full text-white "
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
