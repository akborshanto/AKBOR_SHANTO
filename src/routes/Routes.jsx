import { createBrowserRouter } from "react-router-dom";
import Roots from './../root/Roots';
import E404 from "../Error/404";
import Home from "../pages/home/Home";
// import About from "../pages/about/About";
// import Contact from './../pages/contact/Contact';
// import Skills from "../pages/skills/Skills";
// import Portfolio from "../pages/portfolio/Portfolio";
// import BLOG from "../pages/blog/blog";


export const router = createBrowserRouter([
    {
      path: "/",
      element:<Roots></Roots>
      ,errorElement:<E404></E404>
      ,
children:[
{path:'/',element:<Home></Home>},
// {path:'/about',element:<About></About>},
// {path:'/contact',element:<Contact></Contact>},
// {path:'/skills',element:<Skills></Skills>},
// {path:'/portfolio',element:<Portfolio></Portfolio>},

// {path:'/blog',element:<BLOG></BLOG>},



]
      
    },
  ]);