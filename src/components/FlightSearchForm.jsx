import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "@emailjs/browser";
import { phoneNumber } from "../lib/number";
import iataData from "../lib/IATA.json";

const NewFlightSearchComp = () => {
  const [tripType, setTripType] = useState("Roundtrip");
  const [adults, setAdults] = useState(1);
  const [passengerName, setPassengerName] = useState("");
  const [phone, setPhone] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const form = useRef(null);

  // Function to filter suggestions based on query
  const filterSuggestions = (query) => {
    if (query.length < 2) {
      return [];
    }
    return iataData.filter((item) =>
      item.name_translations.en.toLowerCase().includes(query.toLowerCase())
    );
  };

  // Handle input change and fetch suggestions from local data
  const handleInputChange = (e, setValue, setSuggestions) => {
    const value = e.target.value;
    setValue(value);
    setSuggestions(filterSuggestions(value));
  };

  const handleClickSuggestion = (value, setValue, setSuggestions) => {
    setValue(value);
    setSuggestions([]);
  };

  const formatDate = (date) => (date ? date.toLocaleDateString("en-US") : "");

  const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowMessage(true);

      const formattedStartDate = formatDate(startDate);
      const formattedEndDate = formatDate(endDate);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
          import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID_TWO,
          {
            passengerName,
            tripType,
            from,
            to,
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            adults,
            phone,
          },
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
            console.error("FAILED...", error);
            setSendSuccess(false);
          }
        );
    }, 3000);
  };

  const handleBackToSearch = () => {
    setShowMessage(false);
  };

  return (
    <div className="bg-white p-3 sm:p-5 rounded-lg shadow-md">
      {!showMessage ? (
        <>
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="relative">
                <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
              </div>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSearch}>
              <div className="flex flex-wrap gap-3">
                <div className="flex flex-row mb-1">
                  <div className="w-full md:w-auto mb-2 md:mb-0 pr-2">
                    <label htmlFor="tripType" className="sr-only">
                      Trip Type
                    </label>
                    <select
                      id="tripType"
                      value={tripType}
                      name="tripType"
                      onChange={(e) => setTripType(e.target.value)}
                      className="w-full md:w-auto px-4 py-3 border rounded-md"
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
                      name="adults"
                      onChange={(e) => setAdults(e.target.value)}
                      className="w-full md:w-auto px-4 py-3 border rounded-md"
                    >
                      {[...Array(10).keys()].map((num) => (
                        <option key={num + 1} value={num + 1}>
                          {num + 1} Adult{num + 1 > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Passenger Name and Phone Number */}
                <div className="flex flex-row md:flex-row mb-1">
                  <div className="w-full md:w-auto mb-1 md:mb-0 pr-2">
                    <label htmlFor="passengerName" className="sr-only">
                      Passenger Name
                    </label>
                    <input
                      id="passengerName"
                      type="text"
                      name="passengerName"
                      value={passengerName}
                      onChange={(e) => setPassengerName(e.target.value)}
                      placeholder="Passenger Name"
                      className="w-full md:w-auto px-2 py-3 border rounded-md"
                    />
                  </div>

                  <div className="w-full md:w-auto mb-1 md:mb-0 pr-2">
                    <label htmlFor="phone" className="sr-only">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone Number"
                      className="w-full md:w-auto px-2 py-3 border rounded-md"
                    />
                  </div>
                </div>
              </div>

              {/* Input Fields and Button */}

              <div className="flex flex-col md:flex-row justify-between items-center  p-4 md:p-6">
                {/* From and To */}
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-1/2">
                  <div className="relative flex-1 min-w-0">
                    <label
                      htmlFor="from"
                      className="absolute top-1 left-1 bg-white px-1 text-sm font-bold text-black"
                    >
                      From
                    </label>
                    <input
                      id="from"
                      type="text"
                      name="from"
                      value={from}
                      onChange={(e) =>
                        handleInputChange(e, setFrom, setFromSuggestions)
                      }
                      placeholder="New York, NY"
                      className="w-full px-4 py-8 border rounded-md"
                    />
                    {fromSuggestions.length > 0 && (
                      <ul className="absolute z-50 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                        {fromSuggestions.map((suggestion) => (
                          <li
                            key={suggestion.code}
                            onClick={() =>
                              handleClickSuggestion(
                                `${suggestion.name_translations.en} (${suggestion.code})`,
                                setFrom,
                                setFromSuggestions
                              )
                            }
                            className="p-2 cursor-pointer hover:bg-gray-200"
                          >
                            {suggestion.name_translations.en} ({suggestion.code}
                            )
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="relative flex-1 min-w-0">
                    <label
                      htmlFor="to"
                      className="absolute top-1 left-1 bg-white px-1 text-sm font-bold text-black"
                    >
                      To
                    </label>
                    <input
                      id="to"
                      type="text"
                      name="to"
                      value={to}
                      onChange={(e) =>
                        handleInputChange(e, setTo, setToSuggestions)
                      }
                      placeholder="Miami, FL"
                      className="w-full px-4 py-8 border rounded-md"
                    />
                    {toSuggestions.length > 0 && (
                      <ul className="absolute z-50 border rounded-md mt-1 bg-white w-full max-h-48 overflow-y-auto">
                        {toSuggestions.map((suggestion) => (
                          <li
                            key={suggestion.code}
                            onClick={() =>
                              handleClickSuggestion(
                                `${suggestion.name_translations.en} (${suggestion.code})`,
                                setTo,
                                setToSuggestions
                              )
                            }
                            className="p-2 cursor-pointer hover:bg-gray-200"
                          >
                            {suggestion.name_translations.en} ({suggestion.code}
                            )
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Date Pickers */}
                <div className="relative flex-1 min-w-0 mt-4 md:mt-0">
                  <label
                    htmlFor="dates"
                    className="absolute top-1 left-7 z-10 bg-white px-1 text-sm font-bold text-black"
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
                    className="w-full px-4 py-8 border rounded-md ml-6"
                  />
                </div>

                {/* Search Button */}
                <div className="mt-4 md:mt-0 flex-1">
                  <button
                    type="submit"
                    className="w-full px-4 py-8 bg-orange-500 hover:bg-orange-600 text-black text-lg rounded-md font-semibold"
                  >
                    Search Flights
                  </button>
                </div>
              </div>
            </form>
          )}
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">
            <strong>We hit some digital turbulence!</strong> Our phone lines are
            clear skies though.<strong>Call us</strong> for quick help with your
            flight search and for the most up-to-date airline deals.
          </p>
          <p className="mt-4 ">
            {" "}
            <a
              href={`tel:${phoneNumber.replace(/[^0-9]/g, "")}`}
              className=" col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50 w-full text-center"
            >
              {" "}
              {phoneNumber}
            </a>
          </p>
          <button
            onClick={handleBackToSearch}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Back to Search
          </button>
        </div>
      )}
    </div>
  );
};
export default NewFlightSearchComp;
