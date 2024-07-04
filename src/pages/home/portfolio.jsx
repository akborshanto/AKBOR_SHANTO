import React from "react";
import UseTitle from "../../hook/UseTitle";
import a12 from "../../../public/images/protfolio/a12.png";
import a9 from "../../../public/images/protfolio/9.png";
import a11 from "../../../public/images/protfolio/11.png";
//import a9 from "../../../public/images/protfolio/9.png";
import an from "../../../public/images/protfolio/an.png";
import tourism from "../../../public/images/protfolio/tourism.png";
import { Typewriter } from "react-simple-typewriter";
const Portfolio = () => {
  return (
    <section>
      <div className=" my-10 lg:my-24  border-t-2 p-4" id="project">
        <div className="grid grid-col1 lg:grid-cols-2 gap-5 justify-items-center mt-8">
          <div className=" w-[ 300px] lg:w-[500px]  flex items-center justify-center">
            <h1 className=" text-[22px] lg:text-3xl w-[350px] lg:w-[450px] font-bold text overflow-hidden text-red-500 font">
              <Typewriter
                words={[" MY PROJECTS"]}
                loop={Infinity}
                cursor
                cursorStyle="🌟"
                typeSpeed={70}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </h1>
          </div>






          <div class="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50  lg:h-72 w-72   lg:w-96  rounded-2xl hover:duration-700 duration-700">
            <div class=" mx-auto h-72 text-gray-800">
              <div
                className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565] relative"
                data-aos="flip-right"
              >
                <div className="absolute  top-1/3 left-1/3  ">
                  <a href="https://south-asia-3915c.web.app/">
                    <button
                      onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                      class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                    >
                      LIVE 
                    </button>
                  </a>
                  <a href="https://github.com/akborshanto/SOUTH_ASIA_CLIETN">
                    <button
                      onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                      class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                    >
                      CLIENT
                    </button>
                  </a>
                  <a href="https://github.com/akborshanto/SOUHTH_ASI_SERVER">
                    <button
                      onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                      class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                    >
                      SERVER
                    </button>
                  </a>
                </div>

        
                  <img src={tourism} alt="PORT FOLIO" className="h-auto" />
       
              </div>{" "}
            </div>
            <div class="absolute bg-gray-50 mx-auto -bottom-24 w-72 lg:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span class="text-lime-400 font-bold text-xs">Tourism Asia</span>

              <p class="text-neutral-800">
                The Tourism site promote Tourist spot with latest detailed
                information to help and provide tourist the best quality Tours.
                Provide the Trending and Popular Tours.
              </p>
            </div>
          </div>

          <div class="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50  lg:h-72 w-72   lg:w-96  rounded-2xl hover:duration-700 duration-700">
            <div class=" mx-auto h-72 text-gray-800">
              <div
                className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565] relative"
                data-aos="flip-right"
              >
                <div className="absolute  top-1/3 left-1/3  ">
                <a href="https://dazzle-food.web.app/">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1 font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  LIVE 
                </button>
              </a>
              <a href="https://github.com/akborshanto/DAZZLE_FOOD_CLIENT">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1 font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  CLIENT
                </button>
              </a>
              <a href="https://github.com/akborshanto/DAZZLE_FOOD_SERVER">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1 font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  SERVER
                </button>
              </a>
            </div>
           
              {" "}
              <img src={a11} alt="PORT FOLIO" />
     
              </div>{" "}
            </div>
            <div class="absolute bg-gray-50 mx-auto -bottom-24 w-72 lg:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span class="text-lime-400 font-bold text-xs">Query PD</span>

              <p class="text-neutral-800">
              Welcome to the Alternative Product Information System repository. This project allows users to manage and interact with queries and recommendations about products
              </p>
            </div>
          </div>

          <div class="relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50  lg:h-72 w-72   lg:w-96  rounded-2xl hover:duration-700 duration-700">
            <div class=" mx-auto h-72 text-gray-800">
              <div
                className=" w-[ 300px] lg:w-[500px] shadow-[-3px_-6px_39px_0px_#f56565] relative"
                data-aos="flip-right"
              >
                <div className="absolute  top-1/3 left-1/3  ">
                <a href="https://graceful-boba-f97b97.netlify.app/">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  LIVE 
                </button>
              </a>
              <a href="https://github.com/akborshanto/BOOK_STUDY">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  CLIENT
                </button>
              </a>
              <a href="https://github.com/akborshanto/BOOK_STUDY">
                <button
                  onClick="location.href='https://github.com/akborshanto/SOUTH_ASIA_CLIETN'"
                  class="border-red-100 hover:border-green-200   text-white rounded-lg border-4 cursor-pointer py-1  font-bold -skew-x-12 bg-gradient-to-bl from-red-400 to-red-300 opacity-80 hover:opacity-100 focus:opacity-100 focus:scale-105 transition-all duration-300 font-sans"
                >
                  SERVER
                </button>
              </a>
            </div>

        
       
              <img src={a9} alt="PORT FOLIO" />
         
              </div>{" "}
            </div>
            <div class="absolute bg-gray-50 mx-auto -bottom-24 w-72 lg:w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
              <span class="text-lime-400 font-bold text-xs">Book Study</span>

              <p class="text-neutral-800">
              Studypool is an online platform that connects students with questions with tutors who can answer them
              </p>
            </div>
          </div>


    



















        </div>
      </div>
    </section>
  );
};

export default Portfolio;
