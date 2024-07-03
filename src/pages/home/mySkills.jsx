import React from "react";
import UseTitle from "../../hook/UseTitle";
import html from "../../../public/images/html (1).png";
import css from "../../../public/images/css.png";
import js from "../../../public/images/javascript.png";
import mongodb from "../../../public/images/mongodb.png";
import nodejs from "../../../public/images/node-js.png";
import expressjs from "../../../public/images/express.png";
import boostrap from "../../../public/images/bootstrap.png";
import git from "../../../public/images/github.png";
import tailwind from "../../../public/images/tailwind-css.png";
import react from "../../../public/images/react.png";
import github from "../../../public/images/github (2).png";
import firebase from "../../../public/images/firebase.png";
const MySkills = () => {
  return (
    <div>
      <UseTitle heading={"MY SKILLS"}></UseTitle>

      <div className="grid grid-cols-3    lg:grid-cols-6 gap-2 lg:gap-10 justify-items-center  mt-5 lg:mt-20">
              { /* html */}
              <div className=" ">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="javascript"
                  className=" w-[80px] lg:w-[150px] my-4   mx-auto"
                />{" "}
              </a>
    
              <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
         HTML
              </h1>
            </div>
 {/* css */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src={css}
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
           CSS
          </h1>
        </div>
        {/* js */}
        <div className=" ">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            className=" w-[80px] lg:w-[150px] my-4   mx-auto"
          />{" "}
        </a>

        <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
          JavaScript
        </h1>
      </div>
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
            Git Hub
          </h1>
        </div>


        {/* nodejs */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
     Node Js
          </h1>
        </div>
        {/* express js */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg "
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto bg-white"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
         Express JS
          </h1>
        </div>
        {/* mongodb */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
          MongoDb
          </h1>
        </div>
        {/* postman */}        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src={tailwind}
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto bg-blue-400"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
      Tailwind
          </h1>
        </div>
        {/* github */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
            Git Hub
          </h1>
        </div>
        {/* google */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src={boostrap}
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
Boostrap
          </h1>
        </div>
        {/* sass */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
     SASS
          </h1>
        </div>
        {/* firebase */}
        <div className=" ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="javascript"
              className=" w-[80px] lg:w-[150px] my-4   mx-auto"
            />{" "}
          </a>

          <h1 className="text-center text-xl lg:text-2xl my-3 font-bold hover:animate-bounce hover:text-red-500">
            FiteBase
          </h1>
        </div>
      </div>

      <marquee
        behavior=" "
        direction=" right"
        scrollamount="5"
        className=" animate-bounce my-10  "
      >
        <div className="flex  flex-row gap-3 justify-center ">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://webpack.js.org/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
              alt="webpack"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://reactjs.org/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://www.gatsbyjs.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg"
              alt="gatsby"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://nodejs.org" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://expressjs.com" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://www.postman.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://git-scm.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://azure.microsoft.com/en-us/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
              alt="azure"
              width="40"
              height="40"
            />{" "}
          </a>

          <a href="https://cloud.google.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
              alt="google cloud"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://sass-lang.com" target="_blank">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
              alt="sass"
              width="40"
              height="40"
            />{" "}
          </a>
          <a href="https://firebase.google.com/" target="_blank">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="firebase"
              width="40"
              height="40"
            />{" "}
          </a>
        </div>
      </marquee>
    </div>
  );
};

export default MySkills;
