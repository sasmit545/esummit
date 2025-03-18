import React, { useRef } from "react";

const ImageScroll = () => {
  const images = [
    "/scroll/scrollimage1.png",
    "/scroll/scrollimage2.png",
    "/scroll/scrollimage3.png",
    "/scroll/scrollimage4.png",
    "/scroll/scrollimage5.png",
    "/scroll/scrollimage6.png",
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
