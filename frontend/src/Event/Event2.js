import React from "react";
import quize from "./quiz.jpg";

const Event2 = () => {
  return (
    <div className="bg-white min-h-screen flex justify-center items-center px-6 py-10 relative overflow-auto">
      {/* Background geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600 clip-triangle rotate-45"></div>
        <div className="absolute top-5 right-10 w-20 h-20 bg-blue-500 clip-triangle rotate-12"></div>
        <div className="absolute bottom-5 left-10 w-16 h-16 bg-blue-400 clip-triangle -rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-10 items-center">
        {/* Right Section - Image (Placed First) */}
        <div className="flex justify-center">
          <img
            src={quize}
            alt="Bizz Quiz Event"
            className="w-full md:w-4/5 rounded-lg shadow-lg"
          />
        </div>

        {/* Left Section - Text Content */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">BIZZ QUIZ</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-blue-600">
              BizzQuiz at E-Summit'25, hosted by the Quiz Club,
            </span>{" "}
            is an exhilarating intellectual challenge that tests participants'
            knowledge across a wide range of business topics. The event delves
            into economic principles, influential industry leaders, emerging
            market trends, and the compelling stories behind some of the world’s
            most successful companies.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-3">
            Designed for business enthusiasts, budding entrepreneurs, and those
            with a passion for global economic forces, BizzQuiz offers a dynamic
            platform to explore the depths of the business world while competing
            for exciting prizes. It’s an engaging blend of learning and
            competition, highlighting the essence of business acumen and
            strategic thinking.
          </p>

          {/* Links Section */}
          <div className="mt-6">
            <a
              href="https://forms.gle/vjbqJzDsJ8bSU4yaA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Register Now
            </a>
            <a
              href="https://drive.google.com/file/d/17nhZqooEVe-V0j0e6iYgEgN6nHmVbh4a/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-block bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
            >
              View Rulebook
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event2;
