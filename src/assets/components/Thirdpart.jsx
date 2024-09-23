import React from 'react';
import images6 from "../../assets/images6.png";
import images7 from "../../assets/images7.png";
import images8 from "../../assets/images8.png";

const Thirdpart = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2 md:pl-24 pt-10 md:pt-20">
          <h2 className='text-[32px] md:text-[64px] font-bold font-poppins text-center'>Our Services</h2>
          <p className='text-[14px] md:text-[16px] font-medium font-poppins text-center lg:px-[200px]'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
        </div>
        
        <div className="w-full md:w-1/2 bg-service py-[50px] md:py-[147px] pl-[20px] md:pl-[116px] bg-no-repeat bg-cover">
          <h2 className='font-poppins font-bold text-white text-[24px] md:text-[36px]'>
            Modern natural oil and gas refineries.
          </h2>
          <button className='bg-[#F40404] px-6 py-2 text-[14px] md:text-[16px] text-white mt-2 hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-lg'>
            Learn More
          </button>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row w-full mt-5">
        <div className="w-full md:w-1/2 bg-service1 py-[50px] md:py-[147px] pl-[20px] md:pl-[116px] bg-no-repeat bg-cover">
          <h2 className='font-poppins font-bold text-white text-[24px] md:text-[36px]'>
            Supply of national industries.
          </h2>
          <button className='bg-[#F40404] px-6 py-2 text-[14px] md:text-[16px] text-white mt-2 hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-lg'>
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2 bg-service2 py-[50px] md:py-[147px] pl-[20px] md:pl-[116px] bg-no-repeat bg-cover">
          <h2 className='font-poppins font-bold text-white text-[24px] md:text-[36px]'>
            National fuel distribution and supply.
          </h2>
          <button className='bg-[#F40404] px-6 py-2 text-[14px] md:text-[16px] text-white mt-2 hover:bg-[#5BBCFF] transition duration-700 ease-in-out shadow-lg'>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Thirdpart;
