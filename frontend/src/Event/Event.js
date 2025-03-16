import React from "react";
import quize from "./pitch.jpg";

const Event = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-6 py-10 relative overflow-auto">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 clip-triangle rotate-45"></div>
        <div className="absolute top-5 right-10 w-20 h-20 bg-blue-500 clip-triangle rotate-12"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-blue-400 clip-triangle -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PITCH IT UP</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-blue-600">
              "Pitch It Up" is a high-energy entrepreneurial competition
            </span>{" "}
            where individuals or teams of up to five pitch their game-changing
            ideas. Participants start by submitting concise presentations or
            executive summaries, with top entries advancing to the hybrid second
            round.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            Here, they present their visions to a panel of judges, either{" "}
            <span className="font-semibold text-blue-600">
              in-person at IIT Patna or virtually
            </span>
            , ensuring inclusivity. This event is all about fueling innovation,
            empowering entrepreneurs to turn bold ideas into impactful
            businesses, and providing a platform to make their mark on the
            entrepreneurial world.
          </p>

          {/* Links Section */}
          <div className="mt-6">
            <a
              href="https://forms.gle/y5mQPuPKGZ9828gf7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Register Now
            </a>
            <a
              href="https://drive.google.com/file/d/1VrnRaBPVc3BYWaVyuUnYZINODnoAUDFe/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
            >
              View Rulebook
            </a>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src={quize}
            alt="Pitch It Up Event"
            className="w-full md:w-4/5 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
