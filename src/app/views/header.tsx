"use client"

import React from 'react'
import { ImYelp } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";
import Link from 'next/link';
import { useState } from 'react';



const Header = () => {
  
  const [open, setOpen]=useState(false);
  
  return (
    <div className='flex bg-gray-200 w-full h-20 '>
        <div className='flex justify-start items-center ml-4'>
        <ImYelp className=' w-20 h-16 text-blue-500 mt-1'/>
        <p className=' flex items-center font-semibold text-3xl 
            mt-2 font-samsung mx-4 '>Age</p>
            <p className=' flex items-center text-blue-500 font-semibold text-3xl 
            mt-2.5 font-samsung -mx-4 '>Cal</p>
        </div>
        
        <div className='flex items-center space-x-16 max-auto 
        ml-auto mr-10  '>
        <Link className='  py-1.5 px-2 rounded-lg 
        hover:bg-gray-100' href={'#'}>Home</Link>
        <Link className=' p-1.5 rounded-lg  
        hover:bg-gray-100' href={'#'}>About</Link>
        <Link className=' p-1.5 rounded-lg  
        hover:bg-gray-100' href={'#'}>Profile</Link>
      </div>

        <div className='flex items-center m-5 relative'>

        <button className=' p-1.5 rounded-lg  
        hover:bg-gray-100' onClick={()=>{setOpen(!open)}}>
          Setings
        </button>
        <div>
       <BiChevronDown onClick={()=>{setOpen(!open)}} className={`mr-4 
       cursor-pointer ${open ? "transform rotate-180":""} `}/>
        {open &&(
        <div className='absolute mt-6  shadow-lg
         text-white p-2 right-0'>
          <Link href= {'#'}>Display </Link>
          <Link href= {'#'}>Brightness </Link>
          <Link href= {'#'}>Report</Link>
        </div>
        )}
        </div>
        </div>

                

    
<div className='flex items-center mr-8  '>
  <button className='bg-blue-500  text-white px-6 py-1.5 
  rounded-2xl hover:bg-blue-600'>Login</button>
</div>
    </div>
  )
}

export default Header;