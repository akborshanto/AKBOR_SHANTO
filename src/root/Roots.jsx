import React from 'react'
import Home from '../pages/home/Home'
import { Outlet } from 'react-router-dom'
import Navbar from './../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';

const Roots = () => {
  return (
    <div className='container mx-auto'>
    <Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>
    </div>
  )
}

export default Roots
