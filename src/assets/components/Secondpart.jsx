import React from 'react';
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import images4 from "../../assets/images4.png";
import images5 from "../../assets/images5.png";

const Secondpart = () => {
  return (
    <section className="p-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-full md:w-1/4">
          <img className="w-full h-auto object-cover" src={images2} alt="Image 2" />
        </div>
        <div className="w-full md:w-1/4">
          <img className="w-full h-auto object-cover" src={images3} alt="Image 3" />
        </div>
        <div className="w-full md:w-1/4">
          <img className="w-full h-auto object-cover" src={images4} alt="Image 4" />
        </div>
        <div className="w-full md:w-1/4">
          <img className="w-full h-auto object-cover" src={images5} alt="Image 5" />
        </div>
      </div>
    </section>
  );
};

export default Secondpart;
