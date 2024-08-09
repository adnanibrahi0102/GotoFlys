import React from 'react';
import { phoneNumber } from '../lib/number';
import { FaPlaneDeparture } from 'react-icons/fa'; 

const SupportBanner = () => {
  return (
    <div className="relative">
      {/* Top Text Section */}
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-black p-6 text-center flex flex-col md:flex-row justify-around">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Airtickets Reservation Online</h2>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <FaPlaneDeparture className="text-4xl md:text-6xl mb-4 md:mb-0 md:mr-4 text-black " />
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Skywayfares</h2>
            <p className="text-base md:text-lg text-black">Accredited Travel Services</p>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div 
        className="relative bg-cover bg-center text-white p-6 flex flex-col justify-center min-h-[300px] md:min-h-[400px]"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' 
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-left">
          <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-2">
            24/7 Airline <br /> Reservations &<br /> Support Desk
          </h1>
          <p className="text-base md:text-xl mb-4 font-bold mt-4">
            We’ll beat any online ticket price.
          </p>
          <a 
            href={`tel:+18663302527`}
            className="bg-orange-500 text-black font-bold py-4 px-8 md:py-6 md:px-16 rounded-lg hover:bg-orange-600 inline-block"
          >
            {phoneNumber}
          </a>
          <p className="mt-4 text-base md:text-lg">
            24/7 SUPPORT | NO HOLD TIME
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
