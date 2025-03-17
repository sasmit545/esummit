import React, { useEffect, useState } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa";

const SocialFeed = () => {
  const [hoverTwitter, setHoverTwitter] = useState(false);
  const [hoverInstagram, setHoverInstagram] = useState(false);

  useEffect(() => {
    // Load Twitter Widget Script
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    document.body.appendChild(twitterScript);

    // Load Instagram Embed Script
    const instagramScript = document.createElement("script");
    instagramScript.src = "https://www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);
  }, []);

  return (
    <div className="flex justify-center space-x-6 mt-10">
      {/* Twitter Section */}
      <div
        className={`flex flex-col items-center transition-all duration-300 ease-in-out ${hoverTwitter ? "scale-105 rotate-2 shadow-lg shadow-blue-500/50" : ""}`}
      >
        <div className="w-72 h-72 bg-white rounded-2xl shadow-lg p-2 overflow-hidden">
          <a
            className="twitter-timeline"
            data-width="100%"
            data-height="100%"
            href="https://twitter.com/IITPatna?ref_src=twsrc%5Etfw"
          >
            Tweets by IITPatna
          </a>
        </div>

        {/* Twitter Icon with Hover Effect */}
        <a
          href=" https://x.com/IITPAT"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-125 hover:rotate-6 hover:shadow-lg hover:shadow-blue-500/50"
          onMouseEnter={() => setHoverTwitter(true)}
          onMouseLeave={() => setHoverTwitter(false)}
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Instagram Section */}
      <div
        className={`flex flex-col items-center transition-all duration-300 ease-in-out ${hoverInstagram ? "scale-105 -rotate-2 shadow-lg shadow-pink-500/50" : ""}`}
      >
        <div className="w-72 h-72 bg-white rounded-2xl shadow-lg p-2 overflow-hidden">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DHRdI7YBYmh/"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        {/* Instagram Icon with Hover Effect */}
        <a
          href="https://www.instagram.com/ecell_iitpatna/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-md transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-125 hover:-rotate-6 hover:shadow-lg hover:shadow-pink-500/50"
          onMouseEnter={() => setHoverInstagram(true)}
          onMouseLeave={() => setHoverInstagram(false)}
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialFeed;