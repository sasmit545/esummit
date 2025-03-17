import React from "react";
import quize from "./expo.png";

const Event3 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 py-10 relative overflow-auto">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 clip-triangle rotate-45"></div>
        <div className="absolute top-5 right-10 w-20 h-20 bg-blue-500 clip-triangle rotate-12"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-blue-400 clip-triangle -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
  {/* Right Section - Image (Mobile me pehle aayega, larger screens pe doosra) */}
  <div className="flex justify-center order-1 md:order-2">
    <img
      src={quize}
      alt="Startup Expo Event"
      className="w-full md:w-4/5 rounded-lg shadow-lg"
    />
  </div>

  {/* Left Section - Text Content (Mobile me baad me aayega, larger screens pe pehle) */}
  <div className="order-2 md:order-1">
    <h1 className="text-4xl font-bold text-white mb-4">STARTUP EXPO</h1>
    <p className="text-white text-lg leading-relaxed">
      <span className="font-semibold text-blue-600">
        The Startup Expo is a dynamic platform
      </span>{" "}
      where early-stage startups showcase their ideas, products, and
      services to investors, mentors, students, and industry professionals.
    </p>
    <p className="text-white text-lg leading-relaxed mt-3">
      The expo fosters networking opportunities, enabling collaborations
      between entrepreneurs, students, and corporate leaders.
    </p>
    <p className="text-white text-lg leading-relaxed mt-3">
      By bridging the gap between budding entrepreneurs and the startup
      ecosystem,{" "}
      <span className="font-semibold text-blue-600">
        the Startup Expo plays a crucial role
      </span>{" "}
      in promoting innovation.
    </p>

    {/* Registration and Rulebook Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <a
        href="https://forms.gle/VXSGcsmCT8tRL3nW9"
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Now
      </a>
      <a
        href="https://drive.google.com/file/d/17nhZqooEVe-V0j0e6iYgEgN6nHmVbh4a/view?usp=drivesdk"
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

export default Event3;
