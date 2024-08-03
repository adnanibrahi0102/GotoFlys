import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { motion } from 'framer-motion';
import { phoneNumber } from '../lib/number';

const CallToActionBanner = () => {

  return (
    <a
      href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
      className="fixed bottom-0 inset-x-0 bg-orange-100 text-center p-2 flex items-center justify-center border border-orange-800  m-3 md:hidden rounded-md z-40  "
    >
      <div className="flex items-center">
        <motion.div
          className="bg-orange-500 p-2 rounded-md"
          animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <MdOutlineWifiCalling3 className="w-5 h-5 text-white" />
        </motion.div>
        <div className="ml-3">
          <p className=" text-sm font-normal text-black">Call & Get Unpublished Flight Deals!</p>
          <p className="font-bold text-lg text-black">{phoneNumber}</p>
        </div>
      </div>
    </a>
  );
};

export default CallToActionBanner;
