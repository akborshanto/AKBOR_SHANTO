import React from 'react'
import Banner from './banner'
import Aboutme from './Aboutme'
import MySkills from './mySkills'
import Portfolio from './portfolio'
import ContactMe from './contactMe'
import Education from '../education/Education'

const Home = () => {
  return (
    <div className=' overflow-hidden  '>
  
<Banner></Banner>
<Aboutme></Aboutme>
<MySkills></MySkills>
<Portfolio></Portfolio>
<Education></Education>
<ContactMe></ContactMe>


    </div>
  )
}

export default Home
