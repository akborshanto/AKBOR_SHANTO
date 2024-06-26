import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer  bg-gray-900 text-neutral-content p-10">
    <aside>
      
    <span className="text-[#fb5200] mx-4   hover:text-white  hover:transition-transform font-bold text-xl lg:text-2xl ">
    AKBOR SHANTO{" "}
  </span>
      <p className='text-white font-bold descFont'>
       
        <br />
        Copyright © <span className=' animate-bounce text-red-500'>{new Date().toLocaleDateString()}</span> - All right reserved
      </p>
    </aside>
    <nav>

      <div className="grid grid-flow-col gap-4">

      <a href="https://www.facebook.com/akbor.shanto.1" target="_blank"  >
        {" "}
        <FaFacebook className=" text-[20px ] lg:text-4xl text-red-400 my-6" data-aos="fade-right"    />
      </a>
      <a href="https://github.com/akborshanto" target="_blank">
        {" "}
        <FaGithub className=" text-[20px ] lg:text-4xl text-red-400 my-6" data-aos="fade-right"  />
      </a>

      <a href="https://www.linkedin.com/in/akborshanto/" target="_blank"  >
        {" "}
        <FaLinkedin className=" text-[20px ] lg:text-4xl text-red-400 my-6" data-aos="fade-right" />
      </a>
    </div>

    </nav>
  </footer>
  )
}

export default Footer
