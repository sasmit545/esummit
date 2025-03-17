import React from "react";
import quize1 from "./pitch.png";
import quize2 from "./bizz.png";
import quize3 from "./expo.png";
import quize4 from "./exeutive.jpg";
import quize5 from "./exu2.png";

const events = [quize1, quize3, quize4, quize2, quize5];

const Events = () => {
  return (
    <div className="text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-8">EVENTS</h2>

      <div className="flex flex-wrap justify-center gap-10 px-4 max-w-6xl mx-auto">
        {events.map((img, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all w-full sm:w-[45%] lg:w-[30%] flex justify-center"
          >
            <img
              src={img}
              alt={`Event ${index + 1}`}
              className="w-full h-90 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
