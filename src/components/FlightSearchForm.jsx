import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlane, FaHotel, FaCar, FaGlobe, FaShip, FaSwimmer } from 'react-icons/fa';

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
                {/* Show only on mobile devices */}
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 block lg:hidden"
                >
                  <FaPlane />
                  <span>Flights</span>
                </button>

                {/* Hide on mobile devices, show on larger screens */}
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaPlane />
                  <span>Flights</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaHotel />
                  <span>Hotels</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaCar />
                  <span>Car Rentals</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaGlobe />
                  <span>Trips</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaShip />
                  <span>Cruises</span>
                </button>
                <button
                  type="button"
                  className="text-white flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent bg-orange-500 transition-colors duration-300 hidden lg:flex"
                >
                  <FaSwimmer />
                  <span>Activities</span>
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
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center text-white mt-4">
              <h2 className="text-lg font-semibold">Search Submitted!</h2>
              <p>Thank you for submitting your search. We will get back to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
