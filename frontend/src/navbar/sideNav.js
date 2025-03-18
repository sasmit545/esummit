import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const SocialSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null); // 🔥 useRef for timeout ID

  useEffect(() => {
    if (isOpen) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 5000);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isOpen]);

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col z-50">
      {/* 🔥 Toggle Button */}
      <button
        className={`border border-gray-500 backdrop-blur-lg bg-white/20 w-10 h-10 flex items-center justify-center rounded-md shadow-lg hover:scale-110 transition-all duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} className="text-white text-lg" />
      </button>

      {/* 🚀 Social Icons */}
      <div
        className={`flex flex-col gap-3 bg-black/40 backdrop-blur-md p-3 rounded-lg transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-90 -translate-x-5 pointer-events-none"
        }`}
      >
        <a href="https://www.instagram.com/ecell_iitpatna/" target="_blank" rel="noopener noreferrer" className="group">
          <img alt="Instagram" className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="instagram.png" />
        </a>
        <a href="https://x.com/ecelliitp/" target="_blank" rel="noopener noreferrer" className="group flex justify-center">
          <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl transition-transform duration-300 transform hover:scale-110" />
        </a>
        <a href="https://www.facebook.com/ecelliitp/" target="_blank" rel="noopener noreferrer" className="group">
          <img alt="Facebook" className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="facebook.png" />
        </a>
        <a href="https://www.linkedin.com/company/ecell-iit-patna/" target="_blank" rel="noopener noreferrer" className="group">
          <img alt="LinkedIn" className="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="linkedin.png" />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
