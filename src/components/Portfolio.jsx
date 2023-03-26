import React from "react";
import skinConsultation from "../assets/portfolio/SkinConsultation.png";
import docsearch from "../assets/portfolio/DocSearchbar.png";
import mrRobott from "../assets/portfolio/mrRobott.png";
import cabinbooker from "../assets/portfolio/CabinBooker.png";
import portimg from "../assets/portfolio/portimg.png";
import covidMapper from "../assets/portfolio/CovidMapper.png";
import markspred from "../assets/portfolio/markspred.png";

const Portfolio = () => {
  const cards = [
    {
      id: 1,
      src: covidMapper,
      link: "https://github.com/GevinHasmitha/CovidMapper",
    },
    {
      id: 2,
      src: cabinbooker,
      link: "https://github.com/GevinHasmitha/Cruise-ship-room-management-system",
    },
    {
      id: 3,
      src: portimg,
      link: "https://github.com/GevinHasmitha/Portfolio",
    },
    {
      id: 4,
      src: docsearch,
      link: "https://github.com/GevinHasmitha/Algo_Flex",
    },
    {
      id: 5,
      src: mrRobott,
      link: "https://github.com/GevinHasmitha/MrRobot_Computer_Store",
    },
    {
      id: 6,
      src: skinConsultation,
      link: "https://github.com/GevinHasmitha/Skin-consultation-management-system",
    },
    {
      id: 7,
      src: markspred,
      link: "https://github.com/GevinHasmitha/Student-progression-prediction-System",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-gray-800 to-black text-white md:h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check Out Some of my work!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-8 px-12 sm:px-0">
          {cards.map(({ id, src, link }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 ">
                  Demo
                </button>
                <a href={link}>
                  <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200 ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
