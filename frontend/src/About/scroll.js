import React, { useRef } from "react";

const ImageScroll = () => {
    const images = [
        "/scroll/tanu_jain.png",
        "/scroll/suresh.png",
        "/scroll/seju.png",
        "/scroll/saurabh.png",
        "/scroll/sashi bhushan.png",
        "/scroll/sarada.png",
        "/scroll/rohitkumar_oza.png",
        "/scroll/rishabh.png",
        "/scroll/praveer.png",
        "/scroll/neeraj.png",
        "/scroll/maneesh.png",
        "/scroll/kr._bhagat.png",
        "/scroll/khalid.png",
        "/scroll/johari.png",
        "/scroll/deputy_cm.png",
        "/scroll/creators_economy.png",
        "/scroll/closing_ceremony.png",
        "/scroll/chamaria.png",
        "/scroll/appalla.png",
        "/scroll/anant_kumar.png",
        "/scroll/akanksha.png",
        "/scroll/agarwal.png",
        "/scroll/abhishek.png"
    ];
    
    

  const scrollRef = useRef(null); // ✅ Scroll reference

  // Disable vertical scroll & enable smooth horizontal scroll
  const disableScroll = (e) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY * 1.5; // ✅ Increase multiplier for smooth scrolling
      e.preventDefault(); // ✅ Prevent default vertical scrolling
    }
  };

  return (
   <>
        <h1 className="text-3xl text-white font-sans font-bold py-4 ">PAST SPEAKERS</h1>
    <div className="relative w-full overflow-hidden">
      <div
        ref={scrollRef} // ✅ Ref added
        className="flex space-x-4 p-4 overflow-x-auto touch-pan-x scrollbar-hide no-scrollbar"
        onWheel={disableScroll} // ✅ Prevent vertical scroll, allow horizontal
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none", // ✅ Hide scrollbar (for Firefox)
          msOverflowStyle: "none", // ✅ Hide scrollbar (for IE)
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Speaker ${index + 1}`}
            className="w-56 md:w-64 lg:w-72 rounded-lg shadow-lg object-cover"
          />
        ))}
      </div>

      {/* ✅ Extra CSS to hide scrollbar completely */}
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
   </>
  );
};

export default ImageScroll;
