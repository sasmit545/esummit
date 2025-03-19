import React from "react";
import About from "./About/about";
import InvestorsPage from './InvestorsPage';
import SponsorsPage from './SponsorsPage';
import Countdown from './TimeLeft';
import { motion } from "framer-motion";

const ESummitPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen overflow-hidden relative text-white text-center font-sans">
        {/* Background Image */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 py-12">
          {/* E-Summit Logo Section */}
          <div className="relative flex flex-col items-center mb-4">
          {/* Bulb Image behind the E-Summit Logo */}
          <motion.img
            src="/bulb.svg"
            alt="Bulb"
            className="absolute top-[45%] left-[47%] w-[40%] max-w-[350px] h-auto transform -translate-x-[47%] -translate-y-1/2 mix-blend-overlay opacity-40 z-0"
          />

          <img
            src="/es2.svg"
            alt="E-Summit Logo"
            className="w-[80%] max-w-[900px] h-auto relative z-10"
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
        <Countdown />

        <div className="w-full my-16">
          <InvestorsPage />
        </div>
        <div className="w-full my-16">
          <SponsorsPage />
        </div>
      </div>

      <About />
    </>
  );
};

export default ESummitPage;