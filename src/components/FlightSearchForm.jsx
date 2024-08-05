import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { FaPlane, FaHotel, FaCar, FaGlobe, FaShip, FaSwimmer } from 'react-icons/fa';
import { phoneNumber } from '../lib/number';
import debounce from 'lodash/debounce';

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility
  const [serverBusyMessage, setServerBusyMessage] = useState(false); // State to control server busy message

  // Debounced version of the fetchSuggestions function
  const debouncedFetchSuggestions = useCallback(
    debounce(async (query, setSuggestions) => {
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
    }, 100), // Adjust debounce delay as needed
    []
  );

  useEffect(() => {
    if (origin.length > 2) {
      debouncedFetchSuggestions(origin, setOriginSuggestions);
    } else {
      setOriginSuggestions([]);
    }
  }, [origin, debouncedFetchSuggestions]);

  useEffect(() => {
    if (destination.length > 1) {
      debouncedFetchSuggestions(destination, setDestinationSuggestions);
    } else {
      setDestinationSuggestions([]);
    }
  }, [destination, debouncedFetchSuggestions]);

  const handleClickSuggestion = (value, setValue, setSuggestions) => {
    setValue(value);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleInputChange = (e, setValue, setSuggestions) => {
    const value = e.target.value;
    setValue(value);
    if (value.length > 2) {
      debouncedFetchSuggestions(value, setSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setServerBusyMessage(true); // Show the server busy message when the form is submitted
    setShowMessage(true); // Optionally show a success message
  };

  const handleBackToSearch = () => {
    setServerBusyMessage(false); // Hide the server busy message
    setShowMessage(false); // Hide the success message
  };

  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 py-6 shadow-md">
      <div className="  bg-white w-full">
        <div className="bg-white py-6 px-4 rounded-lg w-[100%]">
          {serverBusyMessage ? (
            <div className="text-center text-base text-red-500">
              <p>Our servers are busy. Please call <a href={`tel:${phoneNumber}`} className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50">{phoneNumber}</a> for assistance.</p>
              <button
                onClick={handleBackToSearch}
                className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Back to Search
              </button>
            </div>
          ) : (
            !showMessage ? (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap justify-center mb-4 gap-2 sm:gap-4">
                  {/* Show only on mobile devices */}
                  <button
                    type="button"
                    className="text-orange-500 flex items-center space-x-2 px-4 py-2 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 block lg:hidden"
                  >
                    <FaPlane />
                    <span className="text-xs">Flights</span>
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
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                  <div className="relative">
                    <label
                      htmlFor="origin"
                      className="block text-sm font-medium text-gray-700 text-center"
                    >
                      Origin
                    </label>
                    <input
                      type="text"
                      id="origin"
                      placeholder="From"
                      value={origin}
                      onChange={(e) => handleInputChange(e, setOrigin, setOriginSuggestions)}
                      className="mt-1 p-2 border border-gray-300 rounded w-full md:w-80" // Full width on mobile, fixed width on larger screens
                    />
                    {originSuggestions.length > 0 && (
                      <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
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
                      Destination
                    </label>
                    <input
                      type="text"
                      id="destination"
                      placeholder="To"
                      value={destination}
                      onChange={(e) => handleInputChange(e, setDestination, setDestinationSuggestions)}
                      className="mt-1 p-2 border border-gray-300 rounded w-full md:w-80" // Full width on mobile, fixed width on larger screens
                    />
                    {destinationSuggestions.length > 0 && (
                      <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
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
                      Departure Date
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
                      Return Date
                    </label>
                    <input
                      type="date"
                      id="return"
                      className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                  </div>
                  <div className="col-span-full text-center">
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                    >
                      Search Flights
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-lg font-semibold mb-4">Search Results</p>
                <p className="text-base text-gray-700">Your search results will appear here.</p>
                <button
                  onClick={handleBackToSearch}
                  className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
                >
                  Back to Search
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
