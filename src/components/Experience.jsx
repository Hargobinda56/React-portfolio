import React from 'react';
import html from "../Assests/html.png";
import css from "../Assests/css.png";
import javascript from "../Assests/javascript.png";
import reactImage from "../Assests/reactImage.png";
import github from "../Assests/github.png";
import tailwind from "../Assests/tailwind.png";
import bootstrapImage from "../Assests/bootstrapImage.png";
import node from "../Assests/node.png";
import MYSQL from "../Assests/MYSQL.png";
import MongoDB from "../Assests/MongoDB.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-white",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: bootstrapImage,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: node,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: MYSQL,
      title: "MYSQL",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-400",
    },
  ];

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-2xl md:text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-sm md:text-base">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-2 md:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-14 md:w-20 mx-auto" />
              <p className="mt-2 text-xs md:text-sm">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
