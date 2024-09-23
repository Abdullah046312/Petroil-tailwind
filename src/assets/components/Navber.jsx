import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

const Navber = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(prevShow => !prevShow);
  };

  return (
    <nav className='bg-[#F40404]'>
      <div className="max-w-container mx-auto">
        <div className="flex items-center py-3">
          <div className="w-1/4">
            <img src={logo} alt="Logo" />
          </div>
          <div className="w-3/4">
            <ul className={`lg:flex lg:static justify-end text-white absolute left-0 top-0 ${show ? "bg-red-600" : "hidden"}`}>
              <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Home</li>
              <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>About</li>
              <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Services</li>
              <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Gallery</li>
              <li className='text-[16px] font-poppins font-semibold p-3 hover:text-[#282828] duration-300 ease-in-out'>Blog</li>
              <li className='text-[16px] font-poppins font-semibold border-2 border-white py-[10px] px-[25px] hover:text-[#282828] duration-300 ease-in-out shadow-lg shadow-indigo-500/40'>CONTACT</li>
            </ul>
          </div>
          <div 
            onClick={handleToggle} 
            className="lg:hidden cursor-pointer" 
            aria-expanded={show} 
            aria-label="Toggle navigation"
          >
            {show ? <GiCrossedBones /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
