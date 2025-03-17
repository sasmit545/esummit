import React from "react";
// import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
// import Events from "../Event/Events";
// import "./about.css";
const Footer = () => {
  return (
    <>
      {/* Background Image */}
    
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('background.png')" }}
      ></div>
      {/* Important Contacts Section */}
      <div className="text-white py-10 px-8 md:px-16 relative bottom-0">
        <img
          src="page_head _1.png"
          alt="E-Summit Logo"
          className="w-[218px] mb-8"
        />

        <div className="text-white text-center md:text-left">
          <h2 className="text-2xl font-bold mb-6">IMPORTANT CONTACTS</h2>

          <div className="space-y-6">
            <div>
              <p className="font-bold text-lg">
                TANAY CHHAJED:{" "}
                <span className="text-[#ffffff]">8852874830</span>
              </p>
              <p className="text-sm text-gray-400">OVERALL COORDINATORS</p>
            </div>

            <div>
              <p className="font-bold text-lg">
                MAYANK SEN: <span className="text-[#ffffff]">7023256707</span>
              </p>
              <p className="text-sm text-gray-400">OVERALL COORDINATORS</p>
            </div>

            <div>
              <p className="font-bold text-lg">
                NALIN: <span className="text-[#ffffff]">8789727404</span>
              </p>
              <p className="text-sm text-gray-400">HEAD EVENTS</p>
            </div>
          </div>
        </div>
        {/* Socials Section */}
        <div class="md:absolute md:right-[6rem] md:bottom-[17rem] flex flex-col gap-6 mt-10 md:mt-0 items-center md:items-start text-center">
  <h2 class="text-2xl font-bold text-center">SOCIALS</h2> 
  <div class="flex gap-8 md:justify-start justify-center">
    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="group">
      <img alt="Instagram" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="instagram.png" />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" class="group">
      <img alt="Twitter" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="twitter.png"/>
    </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="group">
      <img alt="Facebook" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="facebook.png"/>
    </a>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="group">
      <img alt="LinkedIn" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="linkedin.png"/>
    </a>
  </div>
</div>

        <img
          src="blue_shapes.png"
          alt="Background Shape"
          className="absolute bottom-0 right-0 w-[68%] z-[-1]"
        />
      </div>
    </>
  );
};

export default Footer;
