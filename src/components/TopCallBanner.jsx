import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

const TopBanner = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-orange-700 text-white text-center p-3 ml-2 mr-2 mb-2 rounded-md flex items-center justify-center z-50 md:hidden">
      <div className="flex items-center w-full max-w-screen-sm mx-auto px-4">
        <MdOutlineWifiCalling3 className="w-6 h-6 mr-2" />
        <a href="tel:+18553931260" className="font-semibold text-xl ">Call Now: +1-(855-393-1260)</a>
      </div>
    </div>
  );
};

export default TopBanner;
