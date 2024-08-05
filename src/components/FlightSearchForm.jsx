import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlane, FaHotel, FaCar, FaGlobe, FaShip, FaSwimmer } from 'react-icons/fa';
import { phoneNumber } from '../lib/number';

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  useEffect(() => {
    if (origin.length > 2) {
      fetchSuggestions(origin, setOriginSuggestions);
    } else {
      setOriginSuggestions([]);
    }
  }, [origin]);

  useEffect(() => {
    if (destination.length > 2) {
      fetchSuggestions(destination, setDestinationSuggestions);
    } else {
      setDestinationSuggestions([]);
    }
  }, [destination]);

  const fetchSuggestions = async (query, setSuggestions) => {
    const API_TOKEN = import.meta.env.VITE_APP_TRAVELPAYOUTS_API_TOKEN;
    try {
      const response = await axios.get(
        `https://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&types[]=city`,
        {
          headers: {
            'X-Access-Token': API_TOKEN,
          },
        }
      );
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleClickSuggestion = (value, setValue, setSuggestions) => {
    setValue(value);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleInputChange = (e, setValue, setSuggestions) => {
    const value = e.target.value;
    setValue(value);
    if (value.length > 2) {
      fetchSuggestions(value, setSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowMessage(true); // Show the message when the form is submitted
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 py-6">
      <div className="container mx-auto px-4">
        <div className="bg-white p-10 rounded-lg shadow-lg">
          {!showMessage ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-center mb-4 gap-2 sm:gap-4 rounded-t-lg">
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
                <div className="relative">
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
                    value={origin}
                    onChange={(e) => handleInputChange(e, setOrigin, setOriginSuggestions)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                  {originSuggestions.length > 0 && (
                    <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full">
                      {originSuggestions.map((suggestion) => (
                        <li
                          key={suggestion.code}
                          onClick={() => handleClickSuggestion(suggestion.name, setOrigin, setOriginSuggestions)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {suggestion.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="relative">
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
                    value={destination}
                    onChange={(e) => handleInputChange(e, setDestination, setDestinationSuggestions)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                  {destinationSuggestions.length > 0 && (
                    <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full">
                      {destinationSuggestions.map((suggestion) => (
                        <li
                          key={suggestion.code}
                          onClick={() => handleClickSuggestion(suggestion.name, setDestination, setDestinationSuggestions)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {suggestion.name}
                        </li>
                      ))}
                    </ul>
                  )}
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
                  className="col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#ce66f0)] py-2 px-4 text-base font-medium text-white shadow-sm ring-1 ring-purple-800 transition-colors duration-300 hover:bg-purple-800 hover:ring-purple-800 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Search Flights
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-white">
              <h2 className="text-xl font-semibold">Thank You!</h2>
              <p>Your flight search request has been submitted. We'll get back to you shortly.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
