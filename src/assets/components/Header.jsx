import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneBluetoothSpeaker } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Header = () => {
  return (
    <section className='py-3 bg-hbg '>
        <div className="max-w-container mx-auto font-poppins">
            <div className="flex items-center flex-wrap">
                <div className="w-full lg:w-1/4">
                <div className="flex items-center  lg:justify-start justify-center gap-2">
                    <TfiEmail className='text-white'/>
                    <p  className='text-white text-[12px] font-normal'>mail@yourcompany.com</p>
                </div>
                </div>
                <div className="w-full lg:w-1/4 lg:py-0 py-2">
                <div className="flex items-center gap-1 lg:justify-start justify-center">
                    <MdPhoneBluetoothSpeaker className='text-white'/>
                    <p  className='text-white text-[12px] font-poppins'>+896 120 5889 (Toll free)</p>
                </div>
                </div>
                <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-x-3 lg:justify-end justify-center text-[25px] lg:text-[16px] lg:py-0 py-3">
                    <ImFacebook2 className=' lg:text-white text-[#78C1F3]'/>
                    <BsTwitter className=' lg:text-white text-[#78C1F3]'/>
                    <FaLinkedin className=' lg:text-white text-[#78C1F3]'/>
                    <FaInstagramSquare className=' lg:text-white text-[#78C1F3]'/>
                   
                </div>
                </div>
            </div>
       
       
        </div>

    </section>
  )
}

export default Header
