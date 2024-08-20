import React from "react";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaGlobe,
  FaShip,
  FaSwimmer,
} from "react-icons/fa";
import Card from "./Card";
import { phoneNumber } from "../lib/number";
import FlightSearchForm from './FlightSearchForm'

const Booking = () => {
 

  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1513415277900-a62401e19be4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "May 25th - June 01st",
      title: "Mauritius",
      price: "From $1450",
      rating: 4,
    },
    {
      image:
        "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "June 10th - June 20th",
      title: "Bali",
      price: "From $1250",
      rating: 5,
    },
    {
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 15th - July 25th",
      title: "Paris",
      price: "From $2000",
      rating: 3,
    },
  ];

 
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div>
      
      
      {/* <div className=" hidden md:block bg-gradient-to-r from-orange-500 to-purple-600 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-around mb-4 rounded-t-lg">
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaPlane />
                  <span className="hidden sm:inline">Flights</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaHotel />
                  <span className="hidden sm:inline">Hotels</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaCar />
                  <span className="hidden sm:inline">Car Rentals</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe />
                  <span className="hidden sm:inline">Trips</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaShip />
                  <span className="hidden sm:inline">Cruises</span>
                </button>
                <button
                  type="button"
                  className="text-white flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent bg-orange-500 transition-colors duration-300"
                >
                  <FaSwimmer />
                  <span className="hidden sm:inline">Activities</span>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Origin From
                  </label>
                  <input
                    type="text"
                    id="origin"
                    placeholder="Origin From"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Destination To
                  </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Destination To"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="departure"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Departure
                  </label>
                  <input
                    type="date"
                    id="departure"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="return"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Return
                  </label>
                  <input
                    type="date"
                    id="return"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="adults"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Adults
                  </label>
                  <select
                    id="adults"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  >
                    <option value="">Adults</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="children"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Children
                  </label>
                  <select
                    id="children"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  >
                    <option value="">Children</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div className="flex flex-col gap-8 justify-center items-center p-4">
        <h1 className="mt-8 text-3xl sm:text-5xl font-bold text-center">
          Call Answered in 5 Seconds
        </h1>
        <h4 className="text-xl sm:text-3xl font-mono text-center">
          Unpublished offers and great discounts when you book on-call.
        </h4>
        <a href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`} className="inline-flex h-12 items-center justify-center  border  bg-[#3375CB] hover:bg-[#003876] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50">
          {phoneNumber}
        </a>
      </div>
      <div className="flex flex-wrap justify-evenly gap-6 p-4 ">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/3 lg:w-1/4">
            <Card
              image={card.image}
              date={card.date}
              title={card.title}
              price={card.price}
              rating={card.rating}
            />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Booking;
