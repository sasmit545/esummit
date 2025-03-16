import React from "react";
import exu from "./exeutive.jpg";

const Event4 = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-6 py-10 relative overflow-auto">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-green-600 clip-triangle rotate-45"></div>
        <div className="absolute top-5 right-10 w-20 h-20 bg-green-500 clip-triangle rotate-12"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-green-400 clip-triangle -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Right Section - Image First */}
        <div className="flex justify-center md:order-first">
          <img
            src={exu}
            alt="Executive Desk Event"
            className="w-full md:w-4/5 rounded-lg shadow-lg"
          />
        </div>

        {/* Left Section - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            EXECUTIVE DESK
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-green-600">
              Build Your Dream Team — Bid for the C-Suite!
            </span>{" "}
            Ever dreamed of creating your own powerhouse company? At Executive
            Desk, you get to bid for top roles like CEO, CFO, CTO, COO, CMO, CIO
            — featuring executives from world-renowned companies! Assemble your
            dream leadership squad, unlock insights, and compete for glory.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            Prizes worth ₹30,000 await the best strategists! Don’t miss this
            chance to lead, strategize, and win!
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            <strong>Date:</strong> 23rd March <br />
            <strong>Venue:</strong> CLH LT002 <br />
            <strong>Time:</strong> TBD <br />
            <strong>Prizes Worth:</strong> ₹30,000
          </p>

          {/* Registration and Rulebook Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="https://forms.gle/qssGBnibbBwWG1nAA"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
            <a
              href="https://drive.google.com/file/d/1gDLDWY2vGk2sm4ZMvIBBBgTxKP7-Dyqr/view?usp=drivesdk"
              className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Rulebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event4;
