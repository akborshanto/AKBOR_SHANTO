import React from "react";
import UseTitle from "../../hook/UseTitle";
import a12 from "../../../public/images/protfolio/a12.png";
import a9 from "../../../public/images/protfolio/9.png";
import a11 from "../../../public/images/protfolio/11.png";
import { Typewriter } from "react-simple-typewriter";
const Portfolio = () => {
  return (
    <div className=" my-10 lg:my-20  border-t-2 p-4">
    
      <div  className="grid grid-col1 lg:grid-cols-2 gap-5 justify-items-between mt-8">
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
        <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565]">
          <img src={a12} alt="PORT FOLIO" />
        </div>{" "}
        <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565]">
          <img src={a11} alt="PORT FOLIO" />
        </div>
        <div className=" w-[ 300px] lg:w-[500px] shadow-[-3px_26px_39px_0px_#f56565]">
          <img src={a9} alt="PORT FOLIO" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
