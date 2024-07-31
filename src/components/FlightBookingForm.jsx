import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FlightBookingForm = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

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
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setSendSuccess(false);
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-purple-600">
      <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-center text-2xl font-bold text-white mb-6">Flight Booking</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-semibold mb-2">Departure</label>
            <input
              type="text"
              name="departure"
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Destination</label>
            <input
              type="text"
              name="destination"
              placeholder="City or Airport"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Departure Date</label>
            <input
              type="date"
              name="departure_date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Return Date</label>
            <input
              type="date"
              name="return_date"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Passenger Name</label>
            <input
              type="text"
              name="passenger_name"
              placeholder="Enter Full Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div>
            <label className="block text-white font-semibold mb-2">Contact Number</label>
            <input
              type="text"
              name="contact_number"
              placeholder="Enter Contact Number"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-3 rounded hover:bg-orange-600 transition-colors"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Submit"}
            </button>
            {sendSuccess === true && (
              <p className="text-green-500 mt-4">Booking request sent successfully!</p>
            )}
            {sendSuccess === false && (
              <p className="text-red-500 mt-4">
                Failed to send booking request. Please try again.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlightBookingForm;
