import React from 'react';

const Firstpart = () => {
  return (
    <section>
      <div className="max-w-container mx-auto p-5 md:p-10">

        <div className="flex flex-col md:flex-row gap-10 md:gap-10">
          <div className="w-full md:w-1/4">
            <h2 className='text-[24px] md:text-[42px] font-bold font-poppins text-center'>
              The biggest supplier in the country
            </h2>
          </div>
          <div className="w-full md:w-3/4 items-center">
            <p className='text-[14px] md:text-[16px]  md:p-20 font-poppins font-medium text-center lg:text-start  '>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Firstpart;
