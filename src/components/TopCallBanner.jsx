import React from 'react';
import { MdOutlineWifiCalling3 } from 'react-icons/md';

const TopBanner = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-orange-500 text-white text-center p-2 flex items-center justify-center z-60 md:hidden">
      <div className="flex items-center w-full max-w-screen-sm mx-auto px-4">
        <MdOutlineWifiCalling3 className="w-6 h-6 mr-2" />
        <butt className="font-semibold">Call Now: +1-(855-393-1260)</butt>
      </div>
    </div>
  );
};

export default TopBanner;
