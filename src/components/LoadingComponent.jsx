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
      <div className="fixed bottom-4 right-4 flex space-x-3">
        <a href="https://twitter.com/aybukeceylan" target="_top" className="text-white hover:text-teal-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ayb%C3%BCkeceylan/" target="_top" className="text-white hover:text-teal-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LoadingComponent;
