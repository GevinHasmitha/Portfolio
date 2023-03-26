import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import java from "../assets/java.png";
import node from "../assets/node.png";
import php from "../assets/php.png";
import python from "../assets/python.png";
import r from "../assets/r.png";
import sql from "../assets/sql-server.png";

const Experience = () => {
  const iconCards = [
    {
      id: 1,
      text: "HTML",
      img: html,
      style: "shadow-orange-600",
    },
    {
      id: 2,
      text: "CSS",
      img: css,
      style: "shadow-blue-600",
    },
    {
      id: 3,
      text: "JavaScript",
      img: javascript,
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      text: "React.js",
      img: react,
      style: "shadow-blue-400",
    },
    {
      id: 5,
      text: "Node.js",
      img: node,
      style: "shadow-green-500",
    },
    {
      id: 6,
      text: "Tailwind",
      img: tailwind,
      style: "shadow-blue-400",
    },

    {
      id: 7,
      text: "PHP",
      img: php,
      style: "shadow-purple-500",
    },
    {
      id: 8,
      text: "SQL",
      img: sql,
      style: "shadow-white",
    },
    {
      id: 9,
      text: "Java",
      img: java,
      style: "shadow-orange-500",
    },
    {
      id: 10,
      text: "Python",
      img: python,
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      text: "R",
      img: r,
      style: "shadow-blue-500",
    },
    {
      id: 12,
      text: "Github",
      img: github,
      style: "shadow-green-500",
    },
  ];
  return (
    <div name="experience" className=" w-full h-fit ">
      <div className="max-w-screen-lg m-auto p-4 flex flex-col justify-center  w-full h-full text-white shadow-blue-400">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6">
            Following is a list of technologies that i have worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {iconCards.map(({ id, text, img, style }) => (
            <div
              key={id}
              className={
                "shadow-lg hover:scale-105 duration-500 py-2 rounded-lg bg-gray-700/70 backdrop-blur-sm" +
                " " +
                style
              }
            >
              <img src={img} alt="" className=" mt-4 w-20 mx-auto" />
              <p className="mt-4">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
