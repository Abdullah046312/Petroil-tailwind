import React from 'react';
import images9 from "../../assets/images9.png";
import images10 from "../../assets/images10.png";

const Fourthpart = () => {
  return (
    <section>
      <div className="max-w-container mx-auto p-5">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4">
            <h2 className='text-[24px] md:text-[34px] font-poppins font-semibold text-center bg-[#F40404] px-5 lg:px-10 py-[50px] lg:py-[150px] text-white h-auto md:h-[443px]'>
              Learn more about our company
            </h2>
          </div>
          <div className="w-full md:w-3/4 bg-Learn py-10 md:py-[182px] px-5 md:px-[312px] bg-no-repeat bg-cover text-center">
            <button className='bg-[#FFFFFF] px-6 lg:h-[51px] h-[40px] lg:w-[162px] w-[150px] text-[14px] md:text-[16px] mt-[30px] text-[#F40404] font-poppins font-semibold hover:bg-[#FFA62F] transition duration-700 ease-in-out shadow-lg'>
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F0F0] py-11">
        <div className="max-w-container mx-auto">
          <div className="py-5 md:py-11">
            <img className='w-full' src={images10} alt="Company" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fourthpart;
