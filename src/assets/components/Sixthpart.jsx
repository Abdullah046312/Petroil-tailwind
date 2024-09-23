import React from 'react';
import logo from "../../assets/logo.png";
import images15 from "../../assets/images15.png";
import images16 from "../../assets/images16.png";
import { TfiEmail } from "react-icons/tfi";
import { MdPhoneBluetoothSpeaker } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Sixthpart = () => {
  return (
    <section className='bg-[#1F1F1F]'>
      <div className="max-w-container mx-auto">
        <div className="p-5 md:p-20 flex flex-col md:flex-row">
          <div className="w-full md:w-2/5">
            <img src={logo} alt="Company Logo" className="mb-8" />
            <div className="flex items-center gap-2 mt-4">
              <TfiEmail className='text-white' />
              <p className='text-white font-poppins'>mail@yourcompany.com</p>
            </div>
            <div className="flex items-center gap-1 mt-2.5">
              <MdPhoneBluetoothSpeaker className='text-white' />
              <p className='text-white font-poppins'>+896 120 5889 (Toll free)</p>
            </div>
            <div className="flex items-center gap-1 mt-2.5">
              <FaMapLocationDot className='text-white' />
              <p className='text-white font-poppins'>101 Baker Street, New York, USA, 12345</p>
            </div>
            <div className="flex items-center gap-x-3 mt-2.5">
              <ImFacebook2 className='text-[#F40404]' />
              <BsTwitter className='text-[#F40404]' />
              <FaLinkedin className='text-[#F40404]' />
              <FaInstagramSquare className='text-[#F40404]' />
            </div>
          </div>
          <div className="w-full md:w-1/5 text-white mt-10 md:mt-0">
            <h2 className='font-poppins font-bold text-[16px] pb-2.5'>Company</h2>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Home</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>About</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Services</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Gallery</h4>
          </div>
          <div className="w-full md:w-1/5 text-white mt-10 md:mt-0">
            <h2 className='font-poppins font-bold text-[16px] pb-2.5'>Others</h2>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Blog</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Contact</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Terms & Conditions</h4>
            <h4 className='font-poppins font-normal text-[14px] pb-2'>Privacy Policy</h4>
          </div>
          <div className="w-full md:w-1/5 mt-10 md:mt-0">
            <h2 className='font-poppins font-bold text-[16px] pb-7 text-white'>Certificate</h2>
            <div className="flex gap-2">
              <img src={images15} alt="Certificate 1" className="h-auto w-24" />
              <img src={images16} alt="Certificate 2" className="h-auto w-24" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sixthpart;
