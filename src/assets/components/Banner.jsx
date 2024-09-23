import React from 'react';

const Banner = () => {
  return (
    <section>
      <div className="bg-banner lg:py-[257px] py-[50px] text-center lg:text-start w-full bg-no-repeat bg-center bg-cover relative after:absolute after:left-0 after:top-0 after:content-[''] after:w-full after:h-full ">
        <div className="max-w-container mx-auto">
          <div className="w-full md:w-10/12 lg:w-9/12 mx-auto">
            <h2 className="font-poppins lg:text-[64px] text-[24px] text-white font-bold">
              We exist since 1975 on the oil and gas industry.
            </h2>
            <button className="bg-[#F40404] lg:px-6 lg:py-3 lg:text-[18px] px-2 py-1 text-[12px] mt-[20px] text-white font-poppins hover:bg-[#5BBCFF] transition duration-700 ease-in-out ">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
