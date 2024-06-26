import React from 'react'
import profile from '../../../public/images/profle.jpg'
import { Typewriter } from 'react-simple-typewriter'
const Aboutme = () => {
  return (
    
    <div className="border-t-2 lg:border-none">
      <div className="main flex items-center flex-col lg:flex-row-reverse lg:justify-around   p-3 lg:p-6  my-10 lg:my-20 ">

        <div className="content flex  items-center gap-6 lg:gap-8">
    

          <div className="content-title w-[300px] lg:w-[500px]">
            <h1 className=" text-red-500 text-[18px] lg:text-3xl font-bold text descFont">
            <Typewriter  words={[' ABOUT ME']}
            loop={Infinity}
            cursor
            cursorStyle='🌟'
            typeSpeed={70}
            deleteSpeed={80}
            delaySpeed={1000} />
            
        </h1>
            <h3 className=" text-[16px] lg:text-2xl font-serif my-2 lg:my-4   selection:text-[#fb5200] font">Lorem ipsum dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit onsectetur adipisicing. consectetur adipisicing elit. consectetur adipisicing elit. Impedit eum  est eligendi consectetur doloremque maxime velit perferendis,maiores ex quis.</h3>
 
          </div>
        </div>

        <div className="img mt-8 w-[250px] lg:w-[400px]">
        <img src={profile} alt="IMAGE" className="rounded-full " />
        </div>


      </div>
    </div>
  )
}

export default Aboutme
