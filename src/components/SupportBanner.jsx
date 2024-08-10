import React from "react";
import { phoneNumber } from "../lib/number";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import MobileNavigation from "./Navigation/MobileNavigation";



const SupportBanner = () => {
  return (
    <div className="relative">
      
      {/* Top Text Section */}
      <div className="bg-gradient-to-r from-orange-400 to-purple-400 text-black  text-center flex flex-col md:flex-row justify-around mt-12 md:mt-0">
        <div className="flex items-center mb-0 md:mb-0 gap-4  ">
          <PiAirplaneTiltFill className="text-2xl md:text-3xl ml-1 md:mr-7  mt-5 text-black text-center" />
          <div className="flex gap-6 items-center justify-between w-full">
          <h2 className="text-xl md:text-3xl font-bold mt-1 text-black text-center  w-full ">
              Skywayfares
            </h2>
          <MobileNavigation/>
          </div>
        </div>
        
            <p className="text-sm md:text-lg text-black flex items-center justify-center mr-4 ">
              Accredited Travel Services
            </p>
         
      </div>

      {/* Background Image Section */}
      <div className="relative">
        <div
          className=" bg-cover min-h-[200px] md:min-h-[400px] md:hidden"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/210199/pexels-photo-210199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",

          }}
        ></div>
        <div
          className="hidden md:block relative bg-cover bg-center text-white p-6 flex flex-col justify-center min-h-[300px] md:min-h-[400px]"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
            <p className="mt-4 text-base md:text-lg ">
              24/7 SUPPORT | NO HOLD TIME
            </p>
          </div>
        </div>
      </div>

      {/* Text Section for Mobile */}
      <div className="md:hidden text-left p-6 bg-gradient-to-r from-orange-500 to-purple-600 text-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          24/7 Airline <br /> Reservations &<br /> Support Desk
        </h1>
        <p className="text-xl md:text-xl mb-4 font-bold mt-4">
          We’ll beat any online ticket price.
        </p>
        <a
          href={`tel:+18663302527`}
          className="col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50 w-full text-center"
        >
          <IoCall className="mr-3 text-xl font-bold mt-1" />{phoneNumber}
        </a>
        <p className="mt-4 text-base md:text-lg  text-center font-bold">
          24/7 SUPPORT | NO HOLD TIME
        </p>

        <div className="uppercase grid grid-cols-2 mt-4">
          <p className="font-semibold text-base tracking-wider">| new bookings</p>
          <p className="font-semibold text-base tracking-wider">| cancellations</p>
          <p className="font-semibold text-base tracking-wider">| changes</p>
          <p className="font-semibold text-base tracking-wider">| refunds</p>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
