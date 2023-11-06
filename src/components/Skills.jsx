import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import kali from '../assets/kali.png';
import Tailwind from '../assets/tailwind.png';
import PHP from '../assets/php-logo.png';
import csharp from '../assets/csharp.png';
import python from '../assets/python.png';
const Skills = () => {
  const Skill = [
    
    {
      id: 1,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-teal-400",
    },
    {
      id: 6,
      src: kali,
      title: "kali linux",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: csharp,
      title: "c sharp",
      style: "shadow-purple-400",
    },
    {
      id: 8,
      src: PHP,
      title: "php",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: python,
      title: "python",
      style: "shadow-yellow-300",
    },
  ];

  return (
    <div
      name="Skills"
      className= "bg-[#0a192f] w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className='mt-20'>
          <p className="text-4xl font-bold text-gray-300 border-pink-600 border-b-4  p-2 inline">
            Skills
          </p>
          <p className="py-6">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {Skill.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg   ${style}`}
            >
              <img src={src} alt="" className="w-20  mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;