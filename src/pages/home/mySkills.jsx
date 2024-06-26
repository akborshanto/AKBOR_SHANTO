import React from 'react'
import UseTitle from '../../hook/UseTitle'
import html from '../../../public/images/html (1).png'
import css from '../../../public/images/css.png'
import js from '../../../public/images/javascript.png'
import mongodb from '../../../public/images/mongodb.png'
import nodejs from '../../../public/images/node-js.png'
import expressjs from '../../../public/images/express.png'
import boostrap from '../../../public/images/bootstrap.png'
import git from '../../../public/images/github.png'
import tailwind from '../../../public/images/tailwind-css.png'
import react from '../../../public/images/react.png'
const MySkills = () => {
  return (
    <div>
    <UseTitle heading={"MY SKILLS"}></UseTitle>
  
<div className='grid grid-cols-2    lg:grid-cols-4 gap-2 lg:gap-10 justify-items-center  mt-5 lg:mt-20'>

<div   className='border hover:border-red-500 '>

<img src={html} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>HTML</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={css} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>CSS</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={tailwind} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4 bg-blue-500  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>Tailwind Css</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={boostrap} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '> Boostrap</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={js} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>JavaScript</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={react} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>React JS</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={nodejs} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>Node JS</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={expressjs} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4 bg-white " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>Express JS</h1>

</div>
<div   className='border hover:border-red-500 '>

<img src={mongodb} alt="Html" className="  w-[140px] lg:w-[220px] p-2 lg:p-4  " />
<h1 className='text-center text-xl lg:text-2xl my-3 font-bold '>Mongo Db</h1>

</div>



</div>





    </div>
  )
}

export default MySkills
