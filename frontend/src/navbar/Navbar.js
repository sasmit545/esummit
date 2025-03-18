import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  // Function to check if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="flex justify-between items-center px-9 py-3 text-white"
        style={{
          position: 'fixed',
          width: '100%',
          backgroundColor: 'rgba(26, 27, 36, 0.9)',
          zIndex: 50,
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 mr-4" />
        </Link>

        {/* Navbar Links */}
        <ul className={`md:flex gap-10 hidden text-[20px]`}>
          {['/', '/events', '/speakers', '/team'].map((path, index) => (
            <li key={index}>
              <Link
                to={path}
                className={`transition-all pb-2 break-words ${
                  isActive(path) ? 'text-[#00aaff] font-bold' : ''
                } hover:shadow-[0_3px_0_#00aaff]`}
                onClick={closeNavbar}
                style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden flex flex-col gap-1 cursor-pointer" onClick={toggleNavbar}>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
          <span className="w-6 h-[3px] bg-white"></span>
        </div>

        {/* Mobile Navbar */}
        {isOpen && (
          <ul
            className="absolute top-16 left-0 w-full bg-[#1e1e1e] flex flex-col items-center py-16 gap-6 z-50 animate-slideDown"
            style={{
              position: 'fixed',
              width: '100%',
              backgroundColor: 'rgba(26, 27, 36, 0.9)',
              zIndex: 50,
              marginTop: '12',
            }}
          >
            {['/', '/events', '/speakers', '/team'].map((path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className={`text-[20px] hover:shadow-[0_3px_0_#00aaff] ${
                    isActive(path) ? 'text-[#00aaff] font-bold' : ''
                  }`}
                  onClick={closeNavbar}
                  style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}
                >
                  {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>

      <div
        style={{
          width: '100%',
          height: '75px',
          position: 'relative',
          backgroundImage: "url('background.png')",
        }}
      ></div>
      <div className="fixed left-2 md:right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
  <a href="https://www.instagram.com/ecell_iitpatna/" target="_blank" rel="noopener noreferrer" className="group">
    <img alt="Instagram" className="w-10 h-10 md:w-8 md:h-8 transition-transform duration-300 transform group-hover:scale-110" src="instagram.png" />
  </a>
  <a href="https://x.com/ecelliitp/" target="_blank" rel="noopener noreferrer" className="group">
  <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl md:text-3xl transition-transform duration-300 transform hover:scale-125" />
</a>
  <a href="https://www.facebook.com/ecelliitp/" target="_blank" rel="noopener noreferrer" className="group">
    <img alt="Facebook" className="w-10 h-10 md:w-8 md:h-8 transition-transform duration-300 transform group-hover:scale-110" src="facebook.png"/>
  </a>
  <a href="https://www.linkedin.com/company/ecell-iit-patna/" target="_blank" rel="noopener noreferrer" className="group">
    <img alt="LinkedIn" className="w-10 h-10 md:w-8 md:h-8 transition-transform duration-300 transform group-hover:scale-110" src="linkedin.png"/>
  </a>
</div>

    </>
  );
};

export default Navbar;
