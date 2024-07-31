import React from "react";
import Carasoul from "../components/Carasoul";
import Booking from "../components/Booking";
import CTA from "../components/CTA";
import Offers from "../components/Offers";
import Testimonials from "../components/Testimonials";
import Trending from "../components/Trending";
import Destinations from "../components/Destinations";

import FlightBookingForm from "../components/FlightBookingForm";
import FlightCard from "../components/FlightCard";
import CallToActionBanner from "../components/CallToAction";

const Home = () => {
  return (
    <div>
      <Carasoul />
      <div className="block md:hidden">
        <FlightBookingForm />
        <FlightCard />
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
