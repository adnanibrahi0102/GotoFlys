import React from 'react';
import { FaPlane } from 'react-icons/fa';

const HeaderForDesktop = () => {
  return (
    <header className="bg-gradient-to-r from-orange-400 to-purple-400 py-8 shadow hidden sm:block">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center">
          <FaPlane className="w-6 h-6 text-black mr-2" />
          <span className="text-2xl font-semibold text-gray-900">
            Skywayfares
          </span>
        </div>

        {/* Right Section: ARC Accredited Agency */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-teal-500 px-2 py-1 rounded">
            <span className="text-white font-bold text-sm">SKY</span>
          </div>
          <span className="text-teal-900 font-semibold text-lg">
            ACCREDITED AGENCY
          </span>
        </div>

        {/* Slogan */}
        <span className="text-xl text-gray-950">
          SOAR CONFIDENTLY WITH OUR SKY ACCREDITED TRAVEL SERVICES
        </span>
      </div>
    </header>
  );
};

export default HeaderForDesktop;
