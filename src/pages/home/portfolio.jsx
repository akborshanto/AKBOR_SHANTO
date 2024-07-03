import React from "react";
import UseTitle from "../../hook/UseTitle";
import a12 from "../../../public/images/protfolio/a12.png";
import a9 from "../../../public/images/protfolio/9.png";
import a11 from "../../../public/images/protfolio/11.png";
//import a9 from "../../../public/images/protfolio/9.png";
import an from "../../../public/images/protfolio/an.png";
import { Typewriter } from "react-simple-typewriter";
const Portfolio = () => {
  return (
  <section>
  <div className=" my-10 lg:my-24  border-t-2 p-4">
    
  <div  className="grid grid-col1 lg:grid-cols-2 gap-5 justify-items-center mt-8">
    <div className=" w-[ 300px] lg:w-[500px]  flex items-center justify-center">
    <h1 className=" text-[22px] lg:text-3xl w-[350px] lg:w-[450px] font-bold text overflow-hidden text-red-500 font">

          <Typewriter  words={[' MY PORTFOLIO']}
          loop={Infinity}
          cursor
          cursorStyle='🌟'
          typeSpeed={70}
          deleteSpeed={80}
          delaySpeed={1000} />

          </h1>


    </div>
    <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565] p-2" data-aos='flip-right'>
    <a href="https://ornate-granita-394c8f.netlify.app/">
    <img src={an} alt="PORT FOLIO" />
    </a>
    <div className=" ">
    <a
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      target="_blank"
    >
      {" "}
      <img
        src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
        alt="javascript"
        className=" w-[50px] lg:w-[50px] my-4   mx-auto"
      />{" "}
    </a>


  </div>

    </div>{" "}
    <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_10px_0px_#f56565] p-2" data-aos='flip-right'> 
    <a href="https://dazzle-food.web.app/">      <img src={a11} alt="PORT FOLIO" /></a>

    </div>
    <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_10px_10px_0px_#f56565] p-2" data-aos='flip-right'>
    <a href="https://graceful-boba-f97b97.netlify.app/"> <img src={a9} alt="PORT FOLIO" /></a>
     
    </div>
  </div>
</div>
  </section>
  );
};

export default Portfolio;
