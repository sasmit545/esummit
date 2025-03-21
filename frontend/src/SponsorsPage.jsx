import React, { useState } from "react";
import { motion } from "framer-motion";

const SponsorsPage = () => {
  const [sponsors] = useState([
    { name: "MarketingLab", website: "https://marketinglab.com/" },
    { name: "VaibhavStudios", website: "https://vaibhavstudios.com/" },
    { name: "EDtimes", website: "https://edtimes.in/" },
    { name: "Newzera", website: "https://newzera.com/" },
    { name: "TIHiitp", website: "https://www.tih.iitp.ac.in/" },
    { name: "ah!ventures", website: "https://www.ahventures.in/" },
    { name: "TechieNest", website: "https://www.techienest.in/" },
    { name: "UdyogVibhag", website: "https://udyogvibhag.bihar.gov.in/" },
    { name: "Kindle", website: "https://www.amazon.in/kindle/" },
    { name: "ICiitp", website: "https://www.iciitp.com/" },
    { name: "d2d", website: "https://www.d2d.com/" },
    { name: "KareKeba", website: "https://www.karekeba.com/" },
    { name: "EcoFit", website: "https://www.ecofit.com/" },
    { name: "ThinkIndia", website: "https://www.thinkindia.com/" },
    { name: "EduFabrica", website: "https://www.edufabrica.com/" },
    { name: "StartupTV", website: "https://www.startuptv.com/" },
    { name: "HIE", website: "https://www.hie.com/" },
    { name: "WhizzCorps", website: "https://www.whizzcorps.com/" },
    { name: "StockGro", website: "https://www.stockgro.com/" },
  ]);

  return (
    <>
    <div className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Proud Sponsors
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <i>
              We are grateful to our sponsors for supporting our vision and
              making this event a success.
            </i>
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-36 w-full transition-all duration-300 rounded-xl backdrop-blur-sm 
                         hover:bg-white/10 hover:shadow-lg hover:ring-2 hover:ring-blue-500/50 relative"
            >
              {/* Square Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl z-0"></div>

              {/* Sponsor Logo */}
              <motion.div
                initial={{ opacity: 0.3, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center h-full w-full p-6 relative z-10"
              >
                <img
                  src={`/Sponsors/${sponsor.name}.svg`}
                  alt={`${sponsor.name} logo`}
                  className="max-h-24 w-auto object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
      Find Us Here
    </h2>
    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
      Visit us at our location and connect with us in person.
    </p>

    <div className="w-full flex justify-center">
      <div className="w-full max-w-4xl overflow-hidden rounded-lg shadow-lg z-10 relative">
        <iframe
         title="Sponsor Video" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.081871945707!2d84.84872167392275!3d25.535649617911687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1742280078092!5m2!1sen!2sin"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default SponsorsPage;