import React, { useState, useCallback, useRef } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import debounce from "lodash/debounce";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import { phoneNumber } from "../lib/number";

const NewFlightSearchComp = () => {
  const [tripType, setTripType] = useState("Roundtrip");
  const [adults, setAdults] = useState(1);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);
  const form = useRef(null);

  const API_TOKEN = import.meta.env.VITE_APP_TRAVELPAYOUTS_API_TOKEN;

  // Debounced fetchSuggestions function
  const fetchSuggestions = useCallback(
    debounce(async (query, setSuggestions) => {
      if (query.length < 1) return;
      try {
        const response = await axios.get(
          `https://autocomplete.travelpayouts.com/places2?term=${query}&locale=en&types[]=city&types[]=airport&types[]=country`,
          {
            headers: {
              "X-Access-Token": API_TOKEN,
            },
          }
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      }
    }, 300),
    [API_TOKEN]
  );

  // Handle input change and fetch suggestions
  const handleInputChange = (e, setValue, setSuggestions) => {
    const value = e.target.value;
    setValue(value);
    fetchSuggestions(value, setSuggestions);
  };

  const handleClickSuggestion = (value, setValue, setSuggestions) => {
    setValue(value);
    setSuggestions([]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Display server busy message
    setShowMessage(true);

    // Send email using EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID_TWO,
        form.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setSendSuccess(true);
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSendSuccess(false);
        }
      );
  };

  const handleBackToSearch = () => {
    setShowMessage(false);
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md">
      {!showMessage ? (
        <form ref={form} onSubmit={handleSearch}>
          <div className="flex flex-wrap mb-4">
            <div className="w-full md:w-auto mb-2 md:mb-0 pr-2">
              <label htmlFor="tripType" className="sr-only">
                Trip Type
              </label>
              <select
                id="tripType"
                value={tripType}
                onChange={(e) => setTripType(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border rounded-md"
              >
                <option value="Roundtrip">Roundtrip</option>
                <option value="One Way">One Way</option>
              </select>
            </div>

            {/* Adults */}
            <div className="w-full md:w-auto mb-2 md:mb-0 pr-2">
              <label htmlFor="adults" className="sr-only">
                Adults
              </label>
              <select
                id="adults"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border rounded-md"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1} Adult{num + 1 > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Input Fields and Button */}
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-between p-2 md:p-3">
            {/* From */}
            <div className="relative flex-1 min-w-[200px] md:pr-2">
              <label
                htmlFor="from"
                className="absolute top-1 left-1 bg-white px-1 text-sm font-bold text-black"
              >
                From
              </label>
              <input
                id="from"
                type="text"
                value={from}
                onChange={(e) =>
                  handleInputChange(e, setFrom, setFromSuggestions)
                }
                placeholder="New York, NY"
                className="w-full px-2 py-8 border rounded-md"
              />
              {fromSuggestions.length > 0 && (
                <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                  {fromSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.code}
                      onClick={() =>
                        handleClickSuggestion(
                          `${suggestion.name} (${suggestion.code})`,
                          setFrom,
                          setFromSuggestions
                        )
                      }
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion.name} ({suggestion.code})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* To */}
            <div className="relative flex-1 min-w-[200px] md:pr-2">
              <label
                htmlFor="to"
                className="absolute top-1 left-1 bg-white px-1 text-sm font-bold text-black"
              >
                To
              </label>
              <input
                id="to"
                type="text"
                value={to}
                onChange={(e) => handleInputChange(e, setTo, setToSuggestions)}
                placeholder="Miami, FL"
                className="w-full px-2 py-8 border rounded-md"
              />
              {toSuggestions.length > 0 && (
                <ul className="absolute z-10 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                  {toSuggestions.map((suggestion) => (
                    <li
                      key={suggestion.code}
                      onClick={() =>
                        handleClickSuggestion(
                          `${suggestion.name} (${suggestion.code})`,
                          setTo,
                          setToSuggestions
                        )
                      }
                      className="p-2 cursor-pointer hover:bg-gray-200"
                    >
                      {suggestion.name} ({suggestion.code})
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Dates */}
            <div className="relative flex-1 min-w-[200px] sm:w-full md:pr-2">
              <label
                htmlFor="dates"
                className="absolute top-1 left-1 bg-white px-1 text-sm z-10 font-bold text-black"
              >
                Dates
              </label>
              <DatePicker
                id="dates"
                selected={startDate}
                onChange={(dates) => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                placeholderText="08/09/2024-08/12/2024"
                className="w-full px-14 py-8 border rounded-md sm:w-auto"
              />
            </div>

            {/* Search Button */}
            <div className="flex-1 min-w-[200px] mt-2 md:mt-0">
              <button
                type="submit"
                className="w-full px-4 py-3 md:py-7 bg-orange-500 hover:bg-orange-600 text-black text-lg md:text-2xl rounded-md font-semibold"
              >
                Search flights
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="text-center text-base text-red-500">
          <p>
            Our servers are busy. Please call{" "}
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-8 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
            >
              {phoneNumber}
            </a>{" "}
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
  );
};

export default NewFlightSearchComp;
