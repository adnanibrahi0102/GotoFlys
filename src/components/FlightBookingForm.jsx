import React from 'react';

const FlightBookingForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-purple-600">
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold text-white mb-6">Flight Booking</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2">Departure</label>
            <input
              type="text"
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Destination</label>
            <input
              type="text"
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Departure Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Return Date</label>
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Passenger Name</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Contact Number</label>
            <input
              type="text"
              placeholder="Enter Contact Number"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
