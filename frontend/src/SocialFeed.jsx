import React, { useEffect } from "react";
import { FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const SocialFeed = () => {
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
      <div className="flex flex-col items-center">
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

        {/* Twitter Icon with Link */}
        <a
          href="https://twitter.com/IITPatna"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-all"
        >
          <FaTwitter size={24} />
        </a>
      </div>

      {/* Instagram Section */}
      <div className="flex flex-col items-center">
        <div className="w-72 h-72 bg-white rounded-2xl shadow-lg p-2 overflow-hidden">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DHRdI7YBYmh/"
            data-instgrm-version="14"
          ></blockquote>
        </div>

        {/* Instagram Icon with Link */}
        <a
          href="https://www.instagram.com/iitpatna/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center w-12 h-12 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition-all"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default SocialFeed;