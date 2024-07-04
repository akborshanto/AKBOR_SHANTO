import React from "react";

const Education = () => {
  return (
    <section id="education">
      <div className="text-center text-xl my-20  lg:my-40 flex flex-col lg:flex-row gap-4  justify-center lg:justify-between ">
      <div class="rounded-2xl shadow-sm shadow-red-500 mx-auto lg:mx-0">
      <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-500 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-64 lg:w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
          <div class="z-10 flex flex-col items-center gap-2">
              <span class="text-slate-400 text-6xl font-bold">BBA </span>
              <p class="text-gray-50">National University of Bangladesh</p>
              <h1>Management</h1>
            </div>
          </div>
        </div>
        <div class="rounded-2xl shadow-sm shadow-red-500 mx-auto lg:mx-0">
        <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-500 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-64 lg:w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div class="z-10 flex flex-col items-center gap-2">
              <span class="text-slate-400 text-6xl font-bold">SSC </span>
              <p class="text-gray-50">ZAH School</p>
              <h1>Business Studies</h1>
            </div>
          </div>
        </div>

        <div class="rounded-2xl shadow-sm shadow-red-500 mx-auto lg:mx-0">
        <div class="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-500 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 after:w-12 after:h-12  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 before:w-12 before:h-12  hover:rotate-12 flex justify-center items-center h-56 w-64 lg:w-80 origin-bottom-right bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
        <div class="z-10 flex flex-col items-center gap-2">
              <span class="text-slate-400 text-24 text-6xl font-bold">HSC </span>
              <p class="text-gray-50">Business studies</p>
              <p class="text-gray-50">Mirshari College</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
