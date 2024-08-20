// import React from 'react';
// import { FaPlane } from 'react-icons/fa';

// const HeaderForDesktop = () => {
//   return (
//     <header className="bg-white py-2 hidden sm:block">
//       <div className="container mx-auto flex items-center justify-between mt-2 ">
//         {/* Left Section: Logo and Title */}
//         <div className="flex items-center">
//           <FaPlane className="w-8 h-8 text-[#003876] mr-4" />
//           <span className="text-4xl font-bold text-[#003876]">
//             Service Desk
//           </span>
//         </div>

//         {/* Right Section: ARC Accredited Agency */}
//         <div className="flex ">
//           <div className="flex items-center bg-white border-2 border-[#139BB1] px-5 py-1 ">
//             <span className="text-[#139BB1] font-bold text-sm ">SKY</span>
//           </div>
//           <span className="text-white text-center bg-[#139BB1] px-2 py-1 font-serif text-base">
//             ACCREDITED <br /> AGENCY
//           </span>
//         </div>

//         {/* Slogan */}
//         <span className="text-xl font-serif text-[#139BB1]">
//           SOAR CONFIDENTLY WITH OUR SKY <br />ACCREDITED TRAVEL SERVICES
//         </span>
//       </div>
//     </header>
//   );
// };

// export default HeaderForDesktop;
import React from "react";
import { FaPlane } from "react-icons/fa";

const HeaderForDesktop = () => {
  return (
    <header className="bg-white py-2 hidden sm:block">
      <div className="container mx-auto flex items-center justify-between mt-2 ">
        {/* Left Section: Logo and Title */}
        <div className="flex items-center">
          <FaPlane className="w-8 h-8 text-[#003876] mr-4" />
          <span className="text-4xl font-bold text-[#003876]">
            Airline Service Desk
          </span>
        </div>

        {/* Right Section: ARC Accredited Agency and Slogan */}
        <div className="flex items-center space-x-4">
          {/* ARC Accredited Agency */}
          <div className="flex items-center">
            <div className="flex items-center bg-white border-2 border-[#139BB1] px-5 py-3">
              <span className="text-[#139BB1] font-bold text-sm py-1">SKY</span>
            </div>
            <span className="text-white text-center bg-[#139BB1] px-2 py-1 font-serif text-base">
              ACCREDITED <br /> AGENCY
            </span>
          </div>

          {/* Slogan */}
          <span className="text-xl font-serif text-[#139BB1] uppercase">
            SOAR CONFIDENTLY WITH OUR SKY <br />
            ACCREDITED TRAVEL SERVICES <br />
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderForDesktop;
