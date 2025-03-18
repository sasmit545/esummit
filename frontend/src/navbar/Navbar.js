import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SocialSidebar from "./sideNav";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="flex justify-between items-center px-9 py-3 text-white fixed w-full bg-[rgba(26,27,36,0.9)] z-50"
      >
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 mr-4" />
        </Link>

        <ul className="md:flex gap-10 hidden text-[20px]">
          {["/", "/events", "/speakers", "/team"].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`transition-all pb-2 break-words ${
                  isActive(path) ? "text-[#00aaff] font-bold" : ""
                } hover:shadow-[0_3px_0_#00aaff]`}
                onClick={closeNavbar}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleNavbar}>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
        </div>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex flex-col items-center justify-center gap-4 z-50"
        >
          <button onClick={closeNavbar} className="absolute top-6 right-6">
            <X size={32} className="text-white" />
          </button>

          {["/", "/events", "/speakers", "/team"].map((path, index) => (
            <Link
              key={index}
              to={path}
              onClick={closeNavbar}
              className={`text-2xl font-semibold transition-all px-4 py-2 rounded-md ${
                isActive(path) ? "text-[#00aaff] font-bold" : "text-white hover:text-[#00aaff]"
              }`}
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </motion.div>
      )}

      <div className="w-full h-[75px] relative bg-cover" style={{ backgroundImage: "url('background.png')" }}></div>
      <SocialSidebar />
    </>
  );
};

export default Navbar;