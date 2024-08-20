import React from 'react';
import { FaStar } from 'react-icons/fa';

const Card = ({ image, date, title, price, rating }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-80 lg:w-96 h-96 md:h-80 lg:h-96 ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full p-8 text-center text-white">
        <div className="text-xl mb-4">{date}</div>
        
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <div className="text-2xl font-semibold mb-3">{price}</div>
        <div className="flex justify-center mb-3">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={` ${index < rating ? 'text-yellow-400' : 'text-gray-400'}`}
              size={24}
            />
          ))}
          
        </div>
        <button  className=" col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border bg-[#3375CB] hover:bg-[#003876] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50">
              See more
            </button>
      </div>
    </div>
  );
};

export default Card;
