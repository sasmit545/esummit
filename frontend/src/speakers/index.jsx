import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Amit Lodha",
    designation: "IG of Police, IPS Officer",
    image: "/main/amit.jpg",
    bio: "Amit Lodha is an IIT graduate and IPS officer known for his work in Bihar. He has been involved in several high-profile cases and has written books like 'Bihar Diaries' and 'Life in the Uniform.' He is the inspiration behind the Netflix series 'Khakee: The Bihar Chapter.'",
    topics: ["Law Enforcement", "Leadership", "Civic Governance"],
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
    bio: "Anubhav Dubey is the co-founder of Chai Sutta Bar, a popular café chain in India. Despite not being able to crack exams for prestigious institutions like IIT or IIM, he built a successful business through perseverance and entrepreneurial spirit.",
    topics: ["Entrepreneurship", "Resilience", "Innovation"],
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
    bio: "Sandeep Jain is the founder of GeeksforGeeks, a leading ed-tech platform. He started GeeksforGeeks to help students prepare for placements and has built a community of millions of tech enthusiasts.",
    topics: ["Education Technology", "Career Development", "Computer Science"],
    socials: {
      linkedin: "https://in.linkedin.com/in/sandeep-jain-",
      twitter:
        "https://twitter.com/sandeep_jain?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
      instagram: "https://www.instagram.com/sandeep_gfg/?hl=en",
    },
  },
];

const SpeakerCard = ({ speaker, index }) => {
  return (
    <li
      className="sticky top-0 pt-[calc(var(--index)*2em)] transition-all duration-300"
      style={{ "--index": index + 1 }}
    >
      <div className="shadow-xl bg-gray-800 text-white rounded-2xl overflow-hidden flex flex-col sm:flex-row p-0 h-auto sm:h-96 transition-all hover:shadow-2xl hover:scale-[1.02]">
        {/* Image Section */}
        <div className="sm:w-1/3 w-full">
          <div className="relative h-full sm:h-full">
            <img
              className="w-full h-full object-cover rounded-t-2xl sm:rounded-none"
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
        <div className="sm:order-1 sm:w-2/3 w-full p-6 sm:p-8 flex flex-col justify-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">{speaker.name}</h2>
            <p className="text-lg sm:text-xl text-blue-400 font-semibold">{speaker.designation}</p>
          </div>

          {/* Bio */}
          <p className="text-gray-300 my-4 text-sm sm:text-base line-clamp-4">{speaker.bio}</p>

          {/* Topics */}
          <div>
            <p className="font-semibold text-white mb-2">Topics:</p>
            <div className="flex flex-wrap gap-2">
              {speaker.topics.map((topic, i) => (
                <span
                  key={i}
                  className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-xs sm:text-sm"
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
    <div className="min-h-screen text-white p-6 sm:p-10">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold">E-Summit Speakers</h1>
        <p className="text-base sm:text-lg text-gray-400 mt-2">
          Scroll down to explore the visionary minds behind the E-Summit.
        </p>
      </header>
      <ul className="list-none grid gap-8 sm:gap-10 pb-20 sm:pb-40">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={index} speaker={speaker} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default SpeakersPage;
