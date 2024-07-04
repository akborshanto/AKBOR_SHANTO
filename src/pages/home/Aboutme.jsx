import React from "react";
import profile from "../../../public/images/profle.jpg";
import { Typewriter } from "react-simple-typewriter";
import businness from '../../../public/images/businessman-working-on-laptop.png'
const Aboutme = () => {
  return (
    <section id="about">
    <div className="border-t-2 lg:border-none ">
    <div className="main flex items-center flex-col lg:flex-row-reverse lg:justify-around   p-3 lg:p-6  my-10 lg:my-20 ">
      <div className="content flex  items-center gap-6 lg:gap-8">
        <div className="content-title w-[300px] lg:w-[500px]">
          <h1 className=" text-red-500 text-[18px] lg:text-3xl font-bold text descFont">
            <Typewriter
              words={[" ABOUT ME"]}
              loop={Infinity}
              cursor
              cursorStyle="🌟"
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
          <h3
            className=" text-[16px] lg:text-2xl font-serif my-2 lg:my-4
             selection:text-[#fb5200] font"
          >
          I'm a skilled <span className="text-2xl  text-[#fb5200] animate-pulse  " > FrontEnd </span> Web Developer with experience in JavaScript, and expertise in Library like React, Node.js, Express.js and MongoDB also NEXT JS. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
          </h3>
        </div>
      </div>

      <div className="img mt-8 w-[250px] lg:w-[420px] "  data-aos="flip-right">
        <img
          src={businness}
          alt="IMAGE"
          className="rounded-full shadow-[11px_3px_23px_0px_#e53e3e] "
        />
      </div>
    </div>
  </div>
    </section>

  );
};

export default Aboutme;
