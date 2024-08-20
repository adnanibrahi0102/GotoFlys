import React from "react";
import { phoneNumber } from "../lib/number";

const TurbulencePage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-600 to-red-500 text-white">
      <div className="bg-white bg-opacity-20 p-8 rounded-lg shadow-lg backdrop-blur-md text-center">
        <h1 className="text-3xl font-bold mb-4 animate-pulse">
          We Hit Some Digital Turbulence!
        </h1>
        <p className="text-lg font-semibold mb-6">
          Our phone lines are clear skies though. Call us for quick help with
          your flight search and for the most up-to-date airline deals.
        </p>
        <a
          href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-700 to-red-600 hover:from-purple-800 hover:to-red-700 rounded-md text-white font-medium animate-bounce"
        >
          {phoneNumber}
        </a>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-3 bg-purple-800 hover:bg-purple-900 text-white rounded-md shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1"
        >
          Back to Search
        </button>
      </div>
    </div>
  );
};

export default TurbulencePage;
