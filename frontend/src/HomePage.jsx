import React from "react";

const ESummitPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black overflow-hidden relative text-white text-center font-sans">
      <img
        src="background.png"
        alt="Background"
        className="absolute w-full h-full object-cover animate-fadeIn"
      />
      <div className="relative z-10 p-5 animate-slideUp">
        <div className="relative inline-block">
          <img
            src="bulb.png"
            alt="Bulb"
            className="absolute mt-12 w-4/5 h-full object-contain opacity-0 animate-fadeIn delay-1000"
          />
          <img
            src="es2.png"
            alt="E-Summit Logo"
            className="relative w-4/5 h-auto animate-zoomIn"
          />
        </div>
        <h3 className="text-2xl font-bold opacity-0 animate-fadeIn delay-500"></h3>
        <p className="absolute left-[1050px] top-[270px] w-[170.29px] h-[106.85px] flex flex-col justify-center font-poppins font-bold text-lg mt-5 opacity-0 animate-fadeIn delay-1500">
          <span className="text-white text-2xl font-bold">21st-23rd</span>
          <span className="text-[#2BB8FF] text-2xl font-bold">March</span>
        </p>
        <p className="mt-12 text-white text-5xl font-bold font-poppins capitalize animate-fadeIn">
          WHERE CREATIVITY MEETS CAPITAL
        </p>
      </div>
    </div>
  );
};

export default ESummitPage;