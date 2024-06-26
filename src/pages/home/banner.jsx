import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'
import akbor from '../../../public/images/akbor.jpg'
import profile from '../../../public/images/profle.jpg'
const Banner = () => {
  return (
    <div className="border-t-2 " data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
    
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


            <h3 className=" text-[16px] lg:text-2xl font-serif my-2 lg:my-4">  <span className="animate-pulse text-[#fb5200] ">FrontEnd</span>Web Developer</h3>
         <a download='Akbor shanto resume' href="../../../public/resume/AKBOR SHANTO (3).pdf">   <button className=" bg-red-500 p-2  lg:p-4 rounded-md   font-bold text-white my-4  lg:my-4" >Download CV</button></a>
          </div>
        </div>

        <div className="img mt-8 w-[250px] lg:w-[350px]">
        <img src={akbor} alt="IMAGE" className="rounded-lg shadow-[-14px_-3px_23px_5px_#e53e3e]" />
        </div>


      </div>
    </div>
  );
};

export default Banner;
