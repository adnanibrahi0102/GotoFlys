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
      {/* SupportBanner component is visible only on mobile devices */}
      <div className="block md:hidden">
        <SupportBanner />
      </div>

      {/*   <SupportBanner /> component is visible only on medium and larger screens */}
      <div className="hidden md:block">
        <SupportBanner />
      </div>

      {/* NewFlightSearchComp component is visible at the top on mobile devices */}
      <div className="block md:hidden bg-[#003876] p-6">
        {/* Flight search component designed specifically for mobile devices */}
        <NewFlightSearchComp />
      </div>

      {/* FlightCard component is visible only on mobile devices */}
      <div className="block md:hidden">
        <FlightCard />
      </div>

      {/* FlightSearchForm component is visible below the Carasoul on medium and larger screens */}
      <div className="hidden md:block bg-[#003876] p-8">
        <h1 className="text-center text-white text-2xl mb-4 font-mono">
          Book Your Flights at Cheap Prices
        </h1>
        <FlightSearchForm />
      </div>

      {/* The following components are displayed on all screen sizes */}
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
