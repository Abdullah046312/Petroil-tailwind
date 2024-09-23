import React from 'react';
import images11 from "../../assets/images11.png";
import images12 from "../../assets/images12.png";
import images13 from "../../assets/images13.png";
import images14 from "../../assets/images14.png";

const Fivethpart = () => {
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row p-5 md:p-20 gap-5">
          <div className="w-full md:w-2/6 bg-Read1 py-10 pl-5 md:py-[75px] md:pl-[46px] bg-no-repeat bg-cover">
            <p className='text-[20px] md:text-[24px] font-poppins font-semibold text-[#FFFF]'>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
            <button className='bg-[rgba(255,255,255,0.5)] h-[38.72px] w-[123px] text-[12px] md:text-[14px] font-semibold text-white mt-[20px] md:mt-[50px] hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-gray-1000'>
              Read more
            </button>
          </div>
          <div className="w-full md:w-2/6 bg-Read2 py-10 pl-5 md:py-[75px] md:pl-[46px] bg-no-repeat bg-cover">
            <p className='text-[20px] md:text-[24px] font-poppins font-semibold text-[#FFFF]'>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
            <button className='bg-[rgba(255,255,255,0.5)] h-[38.72px] w-[123px] text-[12px] md:text-[14px] font-semibold text-white mt-[20px] md:mt-[50px] hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-gray-1000'>
              Read more
            </button>
          </div>
          <div className="w-full md:w-2/6 bg-Read3 py-10 pl-5 md:py-[75px] md:pl-[46px] bg-no-repeat bg-cover">
            <p className='text-[20px] md:text-[24px] font-poppins font-semibold text-[#FFFF]'>
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
            </p>
            <button className='bg-[rgba(255,255,255,0.5)] h-[38.72px] w-[123px] text-[12px] md:text-[14px] font-semibold text-white mt-[20px] md:mt-[50px] hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-gray-1000'>
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6597929999757!2d89.64516957601121!3d23.182613710335552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffb9a16173dac5%3A0x6816f16ca8d5633c!2sLohagara%20Thana!5e0!3m2!1sen!2sbd!4v1727019647223!5m2!1sen!2sbd" 
          width="100%" 
          height="450" 
          className="border-0"
        ></iframe>
      </div>

      <section className='bg-[#F40404]'>
        <div className="max-w-container mx-auto">
          <div className="p-5 md:p-10 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-4/5">
              <h2 className='font-poppins text-white font-bold text-[24px] md:text-[36px]'>
                Want to join as a member branch in your area?
              </h2>
            </div>
            <div className="w-full md:w-1/5 mt-5 md:mt-0">
              <button className='bg-[#F40404] px-6 py-2 text-[16px] md:text-[18px] text-white border-2 hover:bg-[#D6A033] transition duration-700 ease-in-out shadow-gray-1000'>
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Fivethpart;
