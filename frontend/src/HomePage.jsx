import React from "react";

const ESummitPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#0A1929] overflow-hidden relative text-white text-center font-sans">
      {/* Background Image */}
      <div className="absolute w-full h-full">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        
        {/* E-Summit Logo Section */}
        <div className="relative flex justify-center items-center mb-8">
          <img
            src="/es2.svg"
            alt="E-Summit Logo"
            className="w-[1333.63px] h-96"
          />
          
          {/* Bulb Image */}
          <img
            src="/bulb.svg"
            alt="Bulb"
            className="w-[600px] h-[550px] left-[280px] top-[40px] absolute mix-blend-overlay opacity-50"
          />
          
          {/* Date */}
          <div className="absolute right-8 top-[90%] transform -translate-y-1/2 text-right">
          <div className="w-44 h-28 text-center justify-center"><span class="text-white text-3xl font-bold font-['Poppins'] capitalize">21st-23rd<br/> </span>
          <span class="text-sky-400 text-3xl font-bold font-['Poppins'] capitalize">March</span></div>
            {/* <p className="text-xl md:text-2xl font-bold">21st - 23rd</p>
            <p className="text-xl md:text-2xl font-bold text-[#2BB8FF]">March</p> */}
          </div>
        </div>
        
        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          WHERE CREATIVITY MEETS CAPITAL
        </h2>
      </div>
    </div>
  );
};

export default ESummitPage;