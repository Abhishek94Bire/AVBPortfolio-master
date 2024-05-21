import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import bootstrap from "../assets/bootstrap.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/express.png";
import java from "../assets/core java.png";
import git from "../assets/github.png"


const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-indigo-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: node,
      title: "NODE",
      style: "shadow-lime-500",
    },

    {
      id: 8,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-green-600",
    },
    {
      id: 9,
      src: express,
      title: "EXPRESS",
      style: "shadow-white",
    },
    {
      id: 10,
      src: java,
      title: "Core Java",
      style: "shadow-orange-500"
    },
    {
      id: 11,
      src: git,
      title: "Github",
      style: "shadow-white",
    },
  ];
  return (
    
    <div
      name="skills"
      className="w-full h-screen max-[660px]:mt-32 my-20"
    >
      <div className="max-w-screen-lg max-[520px]:mt-96 mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-black p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 text-white">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} bg-black`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
