import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'

import profile from '../../../public/images/profle.jpg'
const Banner = () => {
  return (
    <div className="border-t-2">
    
      <div className="main flex items-center flex-col lg:flex-row lg:justify-around  p-6  my-10 lg:my-20 ">

        <div className="content flex  items-center gap-6 lg:gap-8  lg:w-[500px]">
          <div className="content-icon">
          <FaFacebook className=" text-[20px ] lg:text-4xl text-red-400 my-6" />
          <FaGithub  className=" text-[20px ] lg:text-4xl text-red-400 my-6"/>
          <FaLinkedin  className=" text-[20px ] lg:text-4xl text-red-400 my-6"/>
          </div>

          <div className="content-title">
            <h1 className=" text-[22px] lg:text-3xl w-[350px] lg:w-[450px] font-bold text overflow-hidden text-red-500 font">
      <span className="text-white font-serif  "  >      Hi , I'm  </span>
            <Typewriter  words={[' AKBOR SHANTO']}
            loop={Infinity}
            cursor
            cursorStyle='🌟'
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000} />

            </h1>


            <h3 className=" text-[16px] lg:text-2xl font-serif my-2 lg:my-4">FrontEnd Web Developer</h3>
            <button className=" bg-red-500 p-2  lg:p-4 rounded-md   font-bold text-white my-4  lg:my-4">Download CV</button>
          </div>
        </div>

        <div className="img mt-8 w-[250px] lg:w-[400px]">
        <img src={profile} alt="IMAGE" className="rounded-full " />
        </div>


      </div>
    </div>
  );
};

export default Banner;
