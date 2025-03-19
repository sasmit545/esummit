import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Amit Lodha",
    designation: "Additional Director General of Police (ADGP), IPS Officer",
    image: "/main/amit.jpg",
    bio: "Amit Lodha is an IIT graduate and IPS officer known for his work in Bihar...",
    socials: {
      linkedin: "https://www.linkedin.com/in/amit-lodha-07452776/",
      twitter: "https://x.com/ipsamitlodha7?lang=en",
      instagram: "https://www.instagram.com/ipsamitlodha7",
    },
  },
  {
    name: "Anubhav Dubey",
    designation: "Co-Founder, Chai Sutta Bar",
    image: "/main/csb.jpg",
    bio: "Anubhav Dubey is the co-founder of Chai Sutta Bar...",
    socials: {
      linkedin: "https://in.linkedin.com/in/anubhavdubey",
      twitter: "https://x.com/tbhanubhav?lang=en",
      instagram: "https://www.instagram.com/anubhavdubey1/?hl=en",
    },
  },
  {
    name: "Sandeep Jain",
    designation: "Founder, Geeks for Geeks",
    image: "/main/gfg.jpeg",
    bio: "Sandeep Jain is the founder of GeeksforGeeks...",
    socials: {
      linkedin: "https://in.linkedin.com/in/sandeep-jain-",
      twitter: "https://twitter.com/sandeep_jain",
      instagram: "https://www.instagram.com/sandeep_gfg/?hl=en",
    },
  },
];

const HorizontalSpeakers = () => {
  return (
    <div className="py-10 px-5">
        <h2 className="text-4xl font-bold text-center my-4">Speakers</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg shadow-lg w-80 p-5 space-y-4 transition-transform hover:scale-105 z-10"
          >
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-60 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold text-center">{speaker.name}</h2>
            <p className="text-sm text-gray-400 text-center">{speaker.designation}</p>
            
            <div className="flex gap-3 mt-3 justify-center">
              {speaker.socials.linkedin && (
                <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-500 text-xl hover:text-blue-400" />
                </a>
              )}
              {speaker.socials.twitter && (
                <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-blue-400 text-xl hover:text-blue-300" />
                </a>
              )}
              {speaker.socials.instagram && (
                <a href={speaker.socials.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-500 text-xl hover:text-pink-400" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalSpeakers;
