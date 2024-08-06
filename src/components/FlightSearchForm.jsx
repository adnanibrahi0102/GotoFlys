import React, { useState, useEffect, useCallback, useMemo } from 'react';
import axios from 'axios';
import { FaPlane, FaHotel, FaCar, FaGlobe, FaShip, FaSwimmer } from 'react-icons/fa';
import { phoneNumber } from '../lib/number';
import debounce from 'lodash/debounce';

const FlightSearchForm = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [serverBusyMessage, setServerBusyMessage] = useState(false);

  const API_TOKEN = import.meta.env.VITE_APP_TRAVELPAYOUTS_API_TOKEN;

  const fetchSuggestions = useCallback(
    debounce(async (query, setSuggestions) => {
      if (query.length < 1) return;
      try {
        const response = await axios.get(
          `https://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&types[]=city&types[]=airport&types[]=country`,
          {
            headers: {
              'X-Access-Token': API_TOKEN,
            },
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    fetchSuggestions(origin, setOriginSuggestions);
  }, [origin, fetchSuggestions]);

  useEffect(() => {
    fetchSuggestions(destination, setDestinationSuggestions);
  }, [destination, fetchSuggestions]);

  const handleClickSuggestion = useCallback((value, setValue, setSuggestions) => {
    setValue(value);
    setSuggestions([]);
  }, []);

  const handleInputChange = useCallback(
    (e, setValue, setSuggestions) => {
      const value = e.target.value;
      setValue(value);
      fetchSuggestions(value, setSuggestions);
    },
    [fetchSuggestions]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setServerBusyMessage(true);
    setShowMessage(true);
  };

  const handleBackToSearch = () => {
    setServerBusyMessage(false);
    setShowMessage(false);
  };

  const memoizedOriginSuggestions = useMemo(() => originSuggestions, [originSuggestions]);
  const memoizedDestinationSuggestions = useMemo(() => destinationSuggestions, [destinationSuggestions]);

  return (
    <div className="bg-gradient-to-r from-orange-500 to-purple-600 py-6 shadow-md">
      <div className="bg-white w-full">
        <div className="bg-white py-6 px-4 rounded-lg w-full">
          {serverBusyMessage ? (
            <div className="text-center text-base text-red-500">
              <p>
                Our servers are busy. Please call{' '}
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
                >
                  {phoneNumber}
                </a>{' '}
                for assistance.
              </p>
              <button
                onClick={handleBackToSearch}
                className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Back to Search
              </button>
            </div>
          ) : !showMessage ? (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap justify-center mb-4 gap-2 sm:gap-4">
                <button
                  type="button"
                  className="text-orange-500  items-center space-x-2 px-4 py-2 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 block lg:hidden"
                >
                  <FaPlane />
                  <span className="text-xs">Flights</span>
                </button>

                <button
                  type="button"
                  className="text-orange-500 items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaPlane />
                  <span>Flights</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaHotel />
                  <span>Hotels</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500  items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaCar />
                  <span>Car Rentals</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500  items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaGlobe />
                  <span>Trips</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500  items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300 hidden lg:flex"
                >
                  <FaShip />
                  <span>Cruises</span>
                </button>
                <button
                  type="button"
                  className="text-white items-center space-x-2 px-6 py-3 rounded-lg border border-transparent bg-orange-500 transition-colors duration-300 hidden lg:flex"
                >
                  <FaSwimmer />
                  <span>Activities</span>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <div className="relative">
                  <label htmlFor="origin" className="block text-sm font-medium text-gray-700 text-center">
                    Origin
                  </label>
                  <input
                    type="text"
                    id="origin"
                    placeholder="From"
                    value={origin}
                    onChange={(e) => handleInputChange(e, setOrigin, setOriginSuggestions)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                  {memoizedOriginSuggestions.length > 0 && (
                    <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                      {memoizedOriginSuggestions.map((suggestion) => (
                        <li
                          key={suggestion.code}
                          onClick={() => handleClickSuggestion(`${suggestion.name} (${suggestion.code})`, setOrigin, setOriginSuggestions)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {suggestion.name} ({suggestion.code})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="destination" className="block text-sm font-medium text-gray-700 text-center">
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder="To"
                    value={destination}
                    onChange={(e) => handleInputChange(e, setDestination, setDestinationSuggestions)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                  {memoizedDestinationSuggestions.length > 0 && (
                    <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                      {memoizedDestinationSuggestions.map((suggestion) => (
                        <li
                          key={suggestion.code}
                          onClick={() => handleClickSuggestion(`${suggestion.name} (${suggestion.code})`, setDestination, setDestinationSuggestions)}
                          className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                          {suggestion.name} ({suggestion.code})
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative">
                  <label htmlFor="departureDate" className="block text-sm font-medium text-gray-700 text-center">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="departureDate"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 text-center">
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="returnDate"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="adults" className="block text-sm font-medium text-gray-700 text-center">
                    Adults
                  </label>
                  <input
                    type="number"
                    id="adults"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    min="1"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>

                <div className="relative">
                  <label htmlFor="children" className="block text-sm font-medium text-gray-700 text-center">
                    Children
                  </label>
                  <input
                    type="number"
                    id="children"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    min="0"
                    className="mt-1 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <p>
                Our servers are busy. Please call{' '}
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
                >
                  {phoneNumber}
                </a>{' '}
                for assistance.
              </p>
              <button
                onClick={handleBackToSearch}
                className="mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors duration-300"
              >
                Back to Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;
