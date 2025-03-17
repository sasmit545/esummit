import React from "react";
import quize from "./pitch.png";

const Event = () => {
  return (
    <div className=" min-h-screen flex justify-center items-center px-6 py-10 relative overflow-auto">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 clip-triangle rotate-45"></div>
        <div className="absolute top-5 right-10 w-20 h-20 bg-blue-500 clip-triangle rotate-12"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-blue-400 clip-triangle -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Right Section - Image (Mobile pe pehle aayega) */}
  <div className="flex justify-center order-1 md:order-2">
    <img
      src={quize}
      alt="Pitch It Up Event"
      className="w-full md:w-4/5 rounded-lg shadow-lg"
    />
  </div>

  {/* Left Section - Text Content (Mobile pe baad me aayega) */}
  <div className="order-2 md:order-1 space-y-6">
    <h1 className="text-4xl font-bold text-white mb-2">PITCH IT UP</h1>
    <p className="text-white text-lg leading-relaxed">
      <span className="font-semibold text-blue-600">
        "Pitch It Up" is a high-energy entrepreneurial competition
      </span>{" "}
      where individuals or teams of up to five pitch their game-changing
      ideas. Participants start by submitting concise presentations or
      executive summaries, with top entries advancing to the hybrid second
      round.
    </p>
    <p className="text-white text-lg leading-relaxed">
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
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href="https://forms.gle/y5mQPuPKGZ9828gf7"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-center"
      >
        Register Now
      </a>
      <a
        href="https://drive.google.com/file/d/1VrnRaBPVc3BYWaVyuUnYZINODnoAUDFe/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition duration-300 text-center"
      >
        View Rulebook
      </a>
    </div>
  </div>
</div>

    </div>
  );
};

export default Event;
