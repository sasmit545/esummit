import React, { useState } from "react";
import { motion } from "framer-motion";

const InvestorsPage = () => {
  const [investors] = useState([
    { name: "VentureCatalysts", website: "https://venturecatalysts.in/" },
    { name: "CampusFund", website: "https://campusfund.in/" },
    { name: "GTM4Health", website: "https://gtm4health.com/" },
    { name: "ICIITP", website: "https://www.iciitp.com/" },
    { name: "Create", website: "https://www.create.com/" },
    { name: "StartUpBihar", website: "https://startup.bihar.gov.in/" },
    { name: "Inflection", website: "https://www.inflection.com/" },
    { name: "Maple", website: "https://www.maple.com/" },
    { name: "Vishleshan", website: "https://www.vishleshan.com/" },
    { name: "KWCG", website: "https://www.kwcg.com/" },
    { name: "Scope", website: "https://www.scope.com/" },
    { name: "AlphaValue", website: "https://www.alphavalue.com/" },
    { name: "KolkataVentures", website: "https://kolkataventures.com/" }
  ]);

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Esteemed Investors
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <i>Partnering with visionary investors who share our commitment to fostering innovation and entrepreneurship.</i>
          </p>
        </div>

        {/* Investors Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {investors.map((investor, index) => (
            <a
              key={investor.name}
              href={investor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                initial={{ opacity: 0.3, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center h-36 w-full p-6 bg-white/5 rounded-xl transition-all duration-300 backdrop-blur-sm 
                           hover:bg-white/10 hover:shadow-lg hover:ring-2 hover:ring-blue-400/50"
              >
                <img
                  src={`/Investors/${investor.name}.svg`}
                  alt={`${investor.name} logo`}
                  className="max-h-24 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorsPage;
