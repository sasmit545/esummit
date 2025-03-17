import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Elon Musk",
    designation: "CEO, Tesla & SpaceX",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-KLtd5bvMkSeXrPa6RTc7f8cd36AWgbErQ&s",
    bio: "Elon Musk is a business magnate and investor. He is the CEO of Tesla, SpaceX, Neuralink, and The Boring Company. He is known for pushing the boundaries of space travel, electric vehicles, and AI.",
    topics: ["Space Exploration", "AI & Innovation", "Entrepreneurship"],
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Sundar Pichai",
    designation: "CEO, Google",
    image: "https://assets.bizclikmedia.net/668/6efa624d603f2d6bb39f4ffd6e2461a6:87093b7c50b1e36984a1d0f48111c3a5/sundar-pichai.jpg",
    bio: "Sundar Pichai is the CEO of Google and Alphabet. Under his leadership, Google has expanded its AI initiatives and cloud computing services globally.",
    topics: ["AI in Business", "Cloud Computing", "Leadership"],
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
  
  {
    name: "Satya Nadella",
    designation: "CEO, Microsoft",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROw8Nq408pFWDn1mk1o1q9G3fBmhKjBald6a62P7FHGQoIp7mBl2Keinw-LKJNBSSYb2C72gO5pmRS99ugSQAJYT5nAoexSavnyxl24VY",
    bio: "Satya Nadella transformed Microsoft by shifting its focus to cloud computing, AI, and enterprise solutions. He is a strong advocate for digital transformation.",
    topics: ["Cloud & AI", "Digital Transformation", "Future of Work"],
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
  },
];

const SpeakerCard = ({ speaker, index }) => {
  return (
    <li
  className="sticky top-0 pt-[calc(var(--index)*2em)] transition-all duration-300"
  style={{ "--index": index + 1 }}
>
  <div className="shadow-xl bg-gray-700 text-white rounded-2xl overflow-hidden flex flex-col md:flex-row p-0 h-auto md:h-96 transition-all hover:shadow-2xl hover:scale-[1.02]">
    {/* Image Section */}
    <div className="md:order-2 md:w-1/2">
      <div className="relative h-72 md:h-full">
        <img
          className="w-full h-full object-cover rounded-t-2xl md:rounded-none"
          src={speaker.image}
          alt={speaker.name}
        />
        {/* Social Media Icons */}
        <div className="absolute bottom-3 right-3 flex gap-3">
          {speaker.socials.linkedin && (
            <a
              href={speaker.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            >
              <FaLinkedin className="text-blue-700 text-xl" />
            </a>
          )}
          {speaker.socials.twitter && (
            <a
              href={speaker.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            >
              <FaTwitter className="text-blue-400 text-xl" />
            </a>
          )}
          {speaker.socials.instagram && (
            <a
              href={speaker.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-300 transition"
            >
              <FaInstagram className="text-pink-600 text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="md:order-1 md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
      <div>
        <h2 className="text-3xl font-bold text-white">{speaker.name}</h2>
        <p className="text-lg md:text-xl text-blue-400 font-semibold">{speaker.designation}</p>
      </div>

      {/* Bio */}
      <p className="text-gray-300 my-4 text-sm md:text-base line-clamp-4">
        {speaker.bio}
      </p>

      {/* Topics */}
      <div>
        <p className="font-semibold text-white mb-2">Topics:</p>
        <div className="flex flex-wrap gap-2">
          {speaker.topics.map((topic, i) => (
            <span
              key={i}
              className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs md:text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
</li>

  );
};

const SpeakersPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">E-Summit Speakers</h1>
        <p className="text-lg text-gray-400 mt-2">
          Scroll down to explore the visionary minds behind the E-Summit.
        </p>
      </header>
      <ul className="list-none grid gap-10 pb-40">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default SpeakersPage;
