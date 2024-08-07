// LoadingComponent.js
import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-400 to-purple-900 overflow-hidden">
      <div className="w-full max-w-lg text-center text-white relative mx-8">
        <div className="before:content-[''] before:absolute before:w-full before:h-1 before:bg-white before:bottom-0 before:left-0 before:rounded-md before:animate-movingLine">
          <div className="flex justify-evenly text-2xl sm:text-4xl lg:text-7xl font-medium mb-8 tracking-widest mr-2 sm:mr-4 ml-2 sm:ml-4">
            <span className="animate-moveLetters">S</span>
            <span className="animate-moveLetters delay-100">K</span>
            <span className="animate-moveLetters delay-200">Y</span>
            <span className="animate-moveLetters delay-300">W</span>
            <span className="animate-moveLetters delay-400">A</span>
            <span className="animate-moveLetters delay-500">Y</span>
            <span className="animate-moveLetters delay-600">F</span>
            <span className="animate-moveLetters delay-600">A</span>
            <span className="animate-moveLetters delay-600">R</span>
            <span className="animate-moveLetters delay-600">E</span>
            <span className="animate-moveLetters delay-600">S</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
