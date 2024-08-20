import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { motion } from 'framer-motion';
import { phoneNumber } from '../lib/number';
const TopBanner = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-[#003876] text-white text-center p-3  mb-2 rounded-md flex items-center justify-center z-50 md:hidden">
      <div className="flex items-center w-full max-w-screen-sm mx-auto px-4">
        <motion.div
         className="bg-white p-1 mr-2 rounded-md"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        >
          <MdOutlineWifiCalling3 className="w-6 h-6 mr-2 text-black" /> 
        </motion.div>
        
        <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="font-semibold text-xl ">Call Now: {phoneNumber}</a>
      </div>
    </div>
  );
};

export default TopBanner;
