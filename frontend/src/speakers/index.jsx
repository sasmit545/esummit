import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";

const speakers = [
  {
    name: "Elon Musk",
    designation: "CEO, Tesla & SpaceX",
    image: "https://via.placeholder.com/150",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      website: "#",
    },
  },
  {
    name: "Sundar Pichai",
    designation: "CEO, Google",
    image: "https://via.placeholder.com/150",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      website: "#",
    },
  },
  {
    name: "Indra Nooyi",
    designation: "Former CEO, PepsiCo",
    image: "https://via.placeholder.com/150",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      website: "#",
    },
  },
];

const SpeakerCard = ({ speaker }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl text-center transition-transform transform hover:scale-105">
      <img
        className="w-32 h-32 mx-auto rounded-full border-4 border-gray-200"
        src={speaker.image}
        alt={speaker.name}
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
        {speaker.name}
      </h3>
      <p className="text-gray-500 dark:text-gray-300">{speaker.designation}</p>
      <div className="mt-4 flex justify-center space-x-4">
        {speaker.socials.linkedin && (
          <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 text-2xl hover:text-blue-500 transition" />
          </a>
        )}
        {speaker.socials.twitter && (
          <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-blue-400 text-2xl hover:text-blue-300 transition" />
          </a>
        )}
        {speaker.socials.instagram && (
          <a href={speaker.socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 text-2xl hover:text-pink-400 transition" />
          </a>
        )}
        {speaker.socials.website && (
          <a href={speaker.socials.website} target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-gray-600 text-2xl hover:text-gray-400 transition" />
          </a>
        )}
      </div>
    </div>
  );
};

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
        E-Summit Speakers
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-300 mt-2">
        Meet the industry leaders speaking at our summit.
      </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersPage;
