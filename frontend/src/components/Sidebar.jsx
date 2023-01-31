import React from "react";
import { NavLink, Link } from "react-router-dom";
import {RiHomeFill} from 'react-icons/ri'
import { categories } from "../utils/data";

const isNotActiveStyle='flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle='flex items-center px-5 gap-3 font-extrabold border-r-2 border-black hover:text-black transition-all duration-200 ease-in-out capitalize'

const Sidebar = ({user, closeToggle}) => {
  console.log('side ar ',user)
  const handleCloseSidebar=()=>{
    if(closeToggle) closeToggle(false)
  }
  return(
    <div className="flex flex-col bg-gray h-full overflow-y-scrikk min-w-210 hide-scrollbar">
      {user?" ":<a href="/login" className="flex justify-center mt-4 font-bold font-Poppins ">LOGIN</a>}
      <div className="flex flex-col">
        <Link to="/"
          className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
          onClick={handleCloseSidebar}
        >
          <img src="logo" alt="" className="w-full"/>
        </Link>
        <div className="flex flex-col gap-5 bg-gray">
          <NavLink
            to="/"
            className={({isActive}) => isActive? isActiveStyle: isNotActiveStyle}
            onClick={handleCloseSidebar}
          >
            <RiHomeFill/>
            <p className="font-bold font-sans font-Poppins text-neutral-600">Home</p>
          </NavLink>
          <h3 className="mt-2 mb-4 px-5 text-base 2xl:text-xl">Categories</h3>
          {categories.slice(0, categories.length-1).map((category) => (
            <NavLink
            to={`/category/${category.name}`}
            className={({isActive}) => isActive? isActiveStyle: isNotActiveStyle}
            onClick={handleCloseSidebar}
            key={category.name}
            >
            <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" alt="" />
            <p className="font-bold font-sans font-Poppins text-neutral-600">{category.name}</p>
          </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
