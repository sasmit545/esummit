import React from "react";

const ESummitPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#0A1929] overflow-hidden relative text-white text-center font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 py-12">
        
        {/* E-Summit Logo Section */}
        <div className="relative flex flex-col items-center mb-4">
          <img
            src="/es2.svg"
            alt="E-Summit Logo"
            className="w-[80%] max-w-[900px] h-auto"
          />

          {/* Bulb Image */}
          <img
            src="/bulb.svg"
            alt="Bulb"
            className="absolute top-1/2 left-1/2 w-[50%] max-w-[400px] h-auto transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-50"
          />
        </div>

        {/* Date Component (Now placed directly below E-Summit Text) */}
        <div className="flex flex-col items-center text-center my-4">
          <span className="text-white text-3xl font-bold capitalize">21st-23rd</span>
          <span className="text-sky-400 text-3xl font-bold capitalize">March</span>
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