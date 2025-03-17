import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
    </>
  );
};

export default Navbar;
