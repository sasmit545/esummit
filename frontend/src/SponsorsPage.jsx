import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SponsorsPage = () => {
  const [sponsors] = useState([
    'MarketingLab', 'VaibhavStudios', 'EDtimes', 'Newzera',
    'TIHiitp', 'ah!ventures', 'TechieNest', 'UdyogVibhag',
    'Kindle', 'ICiitp', 'd2d', 'KareKeba',
    'EcoFit', 'ThinkIndia', 'EduFabrica', 'StartupTV',
    'HIE', 'WhizzCorps', 'StockGro'
  ]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Valued Sponsors
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Partnering with industry leaders who empower our vision of fostering entrepreneurship and innovation
          </p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              <img
                src={`/Sponsors/${sponsor}.svg`}
                alt={`${sponsor} logo`}
                className="max-h-24 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage; 