import React from "react";
import { phoneNumber } from "../lib/number";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import MobileNavigation from "./Navigation/MobileNavigation";
import HeaderForDesktop from "./Navigation/HeaderForDesktop";
import {
  FaCalendarAlt,
  FaSyncAlt,
  FaPlaneSlash,
  FaDollarSign,
} from "react-icons/fa";
const SupportBanner = () => {
  return (
    <div className="relative">
      {/* Top Text Section */}
      <HeaderForDesktop />
      <div className="bg-white text-black text-center flex flex-col md:flex-row justify-around mt-12 md:mt-0 md:hidden">
        <div className="flex items-center mb-0 md:mb-0 gap-4  ">
          <PiAirplaneTiltFill className="text-2xl md:text-3xl ml-1 md:mr-7  mt-2 text-[#003876] text-center" />
          <div className="flex gap-6 items-center justify-between w-full">
            <h2 className="text-xl md:text-3xl font-bold mt-1 text-[#003876] text-center tracking-widest  w-full ">
              Airline Service Desk
            </h2>
            <MobileNavigation />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mb-3   mt-2 ">
            <div className="flex items-center bg-white border-2 border-[#139BB1] px-4 py-2 ">
              <span className="text-[#139BB1] font-bold text-sm ">SKY</span>
            </div>
            <span className="text-white text-center bg-[#139BB1] text-xs py-1 px-1 ">
              ACCREDITED <br /> AGENCY
            </span>
            <p className=" ml-2 mr-2 text-xs leading-none text-[#139BB1]  flex items-center justify-center uppercase  ">
              Soar Confidently with Our <br />
              Accredited Travel Services
            </p>
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative">
        <div
          className=" bg-cover min-h-[200px] md:min-h-[400px] md:hidden"
          style={{
            backgroundImage: "url(/assets/airplane.jpg)",
          }}
        ></div>
        <div
          className="hidden md:block relative bg-cover bg-center text-white pr-6 pt-6 pl-6 m-10 flex flex-col justify-center "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1532973497172-04b34d604825?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-left">
            <h1 className="text-6xl headingFont mb-2 mt-4 ml-6 tracking-widest">
              24/7 Airline <br /> Reservations &<br /> Support Desk
            </h1>
            <p className="text-4xl mb-4 ml-6 headingFont mt-4">
              We’ll beat any online ticket price.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="bg-[#3375CB] ml-6 text-2xl text-white font-bold py-6 px-24  hover:bg-[#1f5192] inline-block"
            >
              {phoneNumber}
            </a>
            <p className="mt-4 ml-12 font-mono text-xl  ">
              24/7 SUPPORT | NO HOLD TIME
            </p>
            {/* Bottom Text Section */}
            <div className="bg-white py-4  z-10 hidden  ml-6 mr-6 mt-10 sm:flex ">
              <div className="container mx-auto flex justify-around items-center">
                {/* New Bookings */}
                <div className="flex flex-col items-center">
                  <FaCalendarAlt className="text-blue-500 w-6 h-6 mb-2" />
                  <span className="text-sm text-gray-700 font-semibold">
                    NEW BOOKINGS
                  </span>
                </div>

                {/* Changes */}
                <div className="flex flex-col items-center">
                  <FaSyncAlt className="text-blue-500 w-6 h-6 mb-2" />
                  <span className="text-sm text-gray-700 font-semibold">
                    CHANGES
                  </span>
                </div>

                {/* Cancellations */}
                <div className="flex flex-col items-center">
                  <FaPlaneSlash className="text-blue-500 w-6 h-6 mb-2" />
                  <span className="text-sm text-gray-700 font-semibold">
                    CANCELLATIONS
                  </span>
                </div>

                {/* Refunds */}
                <div className="flex flex-col items-center">
                  <FaDollarSign className="text-blue-500 w-6 h-6 mb-2" />
                  <span className="text-sm text-gray-700 font-semibold">
                    REFUNDS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section for Mobile */}
      <div className="md:hidden text-left p-6 bg-white text-black">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
          24/7 Airline <br /> Reservations &<br /> Support Desk
        </h1>
        <p className="text-xl md:text-xl mb-4 font-bold mt-4">
          We’ll beat any online ticket price.
        </p>
        <a
          href={`tel:${phoneNumber}`}
          className="col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-16 animate-shimmer items-center justify-center  bg-[#3375CB] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50 w-full text-center"
        >
          <IoCall className="mr-3 text-xl font-bold mt-1" />
          {phoneNumber}
        </a>
        <p className="mt-4 text-base md:text-lg  text-center font-bold">
          24/7 SUPPORT | NO HOLD TIME
        </p>

        <div className="uppercase grid grid-cols-2 mt-4">
          <p className="font-semibold text-base tracking-wider">
            | new bookings
          </p>
          <p className="font-semibold text-base tracking-wider">
            | cancellations
          </p>
          <p className="font-semibold text-base tracking-wider">| changes</p>
          <p className="font-semibold text-base tracking-wider">| refunds</p>
        </div>
      </div>
    </div>
  );
};

export default SupportBanner;
