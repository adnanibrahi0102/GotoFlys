import React from "react";
import Carasoul from "../components/Carasoul";
import Booking from "../components/Booking";
import CTA from "../components/CTA";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";
import Destinations from "../components/Destinations";

// import FlightBookingForm from "../components/FlightBookingForm";
import FlightCard from "../components/FlightCard";
import CallToActionBanner from "../components/CallToAction";
import FlightSearchForm from "../components/FlightSearchForm";
import NewFlightSearchComp from "../components/NewFlightSearchComp";
import SupportBanner from "../components/SupportBanner";

const Home = () => {
  return (
    <div>
      <div className="">
        {/* it was first ui */}
        {/* <Carasoul /> */} 
        <SupportBanner/>
      </div>
      {/* FlightSearchForm should appear at the top on mobile devices */}
      <div className="block md:hidden bg-gradient-to-r from-orange-500 to-purple-600 p-6">

        {/* <h1 className="text-center text-2xl mb-2 font-mono">Book Your Flights at Cheap Prices</h1> */}
        {/* <FlightSearchForm /> */}
        <NewFlightSearchComp/>
        
      </div>

      

      <div className="block md:hidden">
        <FlightCard />
      </div>

      {/* FlightSearchForm should appear below Carasoul on larger screens */}
      <div className="hidden md:block bg-gradient-to-r from-orange-500 to-purple-600 p-6">
        <h1 className="text-center text-2xl mb-2 font-mono">Book Your Flights at Cheap Prices</h1>
        {/* <FlightSearchForm /> */}
        <NewFlightSearchComp/>
      </div>

      <Booking />
      <CTA />
      <Offers />
      <Testimonials />
      <Trending />
      <Destinations />
      <CallToActionBanner />
    </div>
  );
};

export default Home;
