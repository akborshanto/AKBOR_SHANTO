import React from 'react'
import Banner from './banner'
import Aboutme from './Aboutme'
import MySkills from './mySkills'
import Portfolio from './portfolio'

import Education from '../education/Education'
import ContactMe from './Contact'

const Home = () => {
  return (
    <div className=' overflow-hidden mx-auto text-center p-2  '>
  
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
