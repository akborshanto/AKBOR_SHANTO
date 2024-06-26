import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  /* navlinks */
  const navLink = (
    <>
      <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/"}
      >
        HOME
      </NavLink>
{/*       <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/about"}
      >
        ABOUT
      </NavLink> */}
{/*       <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/skills"}
      >
        SKILLS
      </NavLink> */}
{/*       <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/portfolio"}
      >
        PORTFOLIO
      </NavLink> */}
      
{/*       <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/blog"}
      >
        BLOG{" "}
      </NavLink> */}
      <NavLink
        className="text-white mx-4   hover:text-[#fb5200]   hover:underline   hover:transition-transform font-bold text-[18px] mb-2 lg:mb-0 lg:text-xl "
        to={"/contact"}
      >
        CONTACT
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar mt-6 mb-4   ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" text-white bg-none hover:text-[#fb5200] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>

          <span className="text-[#fb5200] mx-4   hover:text-white  hover:transition-transform font-bold text-xl lg:text-2xl ">
            AKBOR SHANTO{" "}
          </span>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a  href="#contact"
            className="text-[#fb5200] mx-4   hover:text-white  hover:transition-transform font-bold text-xl lg:text-2xl  "
            to={"/"}
          >
            LOGIN
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
