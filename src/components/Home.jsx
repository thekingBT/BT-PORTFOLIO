import React from "react";
import profile from "../assets/pro.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll';
function Home  ()  {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#0a192f] via-[#15616d]"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
        <p className='text-pink-600 mt-3'>Hi, my name is</p>
        <h1 className='text-5xl sm:text-6xl mt-3 font-bold text-[#ccd6f6]'>
          Bhavya Trivedi
        </h1>
        <h2 className='text-3xl sm:text-1xl mt-3 font-bold text-[#8892b0]'>
          I'm a Web Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a Web Developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        
          <div>
          <Link to="work" smooth={true} duration={500}>
          <button  className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      
        </div>

        <div>
          <img
            src={profile}
            alt="my profile"
            className="rounded-2xl mt-28 mx-auto mb-20  md:w-full object-scale-down h-72 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;