import React from "react";
// import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Events from "../Event/Events";
import "./about.css";
const About = () => {
  return (
    <>
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-no-repeat bg-cover bg-center z-[-1]"
        style={{ backgroundImage: "url('background.png')" }}
      ></div>

      <div className="text-white  font-sans py-16">
        {/* About Section */}
        <section className="py-12 px-8 md:px-16 flex flex-col md:flex-row items-center gap-10 justify-between text-center md:text-left about-section">
          <div className="mt-[-107px] w-full md:w-[46%]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About US</h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              E-Summit 2025, the flagship entrepreneurial event of IIT Patna, is
              a vibrant platform that brings together innovators, investors,
              startups, and industry leaders to foster entrepreneurship and
              business growth.
            </p>
          </div>

          {/* Images Section */}
          <div className="flex gap-4 image-section">
            <img
              src="img1.png"
              alt="Speaker 1"
              className="w-[60px] md:w-[142px] h-[150px] md:h-[359px] object-cover mt-[15px]"
            />
            <img
              src="img2.png"
              alt="Speaker 2"
              className="w-[60px] md:w-[142px] h-[150px] md:h-[359px] object-cover mb-[35px] mt-[-28px]"
            />
            <img
              src="img3.png"
              alt="Speaker 3"
              className="w-[60px] md:w-[142px] h-[150px] md:h-[359px] object-cover mt-[15px]"
            />
            <img
              src="img4.png"
              alt="Speaker 4"
              className="w-[60px] md:w-[142px] h-[150px] md:h-[359px] object-cover mb-[35px] mt-[-28px]"
            />
          </div>
        </section>

        {/* E-Summit Heading Section */}
        <section className="text-white py-12 px-8 md:px-16 flex flex-col md:flex-row items-center gap-14 text-center md:text-left">
          <div className="md:w-1/2">
            <img
              src="page_head _1.png"
              alt="E-Summit Logo"
              className="w-full md:w-auto"
            />
          </div>

          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              E-Summit'25: Where Creativity Meets Capital
            </h1>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              In The World Of Entrepreneurship, Great Ideas Need More Than Just
              Vision—They Need The Right Support To Grow. The Theme Of E-Summit
              2025,{" "}
              <span className="text-blue-400 cursor-pointer">
                "Where Creativity Meets Capital,"
              </span>{" "}
              Embodies The Fusion Of Innovation And Investment, Highlighting How
              Groundbreaking Ideas Flourish When Paired With Strategic Funding.
            </p>
          </div>
        </section>

        {/* Stats Section (With Background Frame Image) */}
        <section
          className="py-10 px-8 md:px-16 flex flex-col md:flex-row justify-between gap-10 md:gap-20 text-white relative"
          style={{
            backgroundImage: "url('Frame_11.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="text-center relative w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('Vector.png')" }}
            >
              <p className="text-2xl md:text-4xl font-bold flex items-center justify-center h-full">
                1000+
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold">Attendees</p>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="text-center relative w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('Vector.png')" }}
            >
              <p className="text-2xl md:text-4xl font-bold flex items-center justify-center h-full">
                100+
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold">Startups</p>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="text-center relative w-24 h-24 md:w-32 md:h-32 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('Vector.png')" }}
            >
              <p className="text-2xl md:text-4xl font-bold flex items-center justify-center h-full">
                25+
              </p>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-center">
              Competition <br /> Events
            </p>
          </div>
        </section>

        <Events />
      </div>

      {/* Important Contacts Section */}
      <div className="text-white py-10 px-8 md:px-16 relative">
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
              <img alt="Twitter" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="twitter.png" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" class="group">
              <img alt="Facebook" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="facebook.png" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="group">
              <img alt="LinkedIn" class="w-8 h-8 transition-transform duration-300 transform group-hover:scale-110" src="linkedin.png" />
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

export default About;
