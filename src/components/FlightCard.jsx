import React from 'react';
import { phoneNumber } from '../lib/number';

const FlightCard = ({ airlineLogo, route, dateRange, price }) => (
  <div className="flex items-center justify-between p-2 border rounded-lg shadow-sm">
    <div className="flex items-center space-x-2">
      <img src={airlineLogo} alt="Airline Logo" className="h-8 w-8 object-contain" />
      <div>
        <div className="text-sm font-bold text-black">{route}</div>
        <div className="text-gray-500 text-xs">{dateRange}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="text-gray-500 text-xs">From</div>
      <div className="text-sm font-bold text-black">{price}</div>
      <a 
        href={`tel:${phoneNumber.replace(/[^0-9]/g, '')}`}
        className="px-2 py-1 mt-1 text-xs bg-[#3375CB] hover:bg-[#003876] text-white rounded-md"
      >
        Book Now
      </a>
    </div>
  </div>
);

const TopFlightDestinations = () => {
  const flights = [
    { airlineLogo: '/assets/atlanta.jpg', route: 'Atlanta - Fort Lauderdale', dateRange: 'August 04 - August 05', price: '$38' },
    { airlineLogo: '/assets/atlanta.jpg', route: 'Atlanta - Fort Lauderdale', dateRange: 'August 04 - August 05', price: '$40' },
    { airlineLogo: '/assets/airshow.jpeg', route: 'Edmonton - Abbotsford', dateRange: 'August 01 - August 05', price: '$67' },
    { airlineLogo: '/assets/qatar.png', route: 'Los Angeles - Las Vegas', dateRange: 'August 02 - August 04', price: '$88' },
    { airlineLogo: '/assets/vistara.jpeg', route: 'Miami - San Juan', dateRange: 'August 01 - August 04', price: '$116' },
    { airlineLogo: '/assets/airindia.png', route: 'New York - San Francisco', dateRange: 'August 03 - August 06', price: '$125' },
    { airlineLogo: '/assets/indigo.png', route: 'Chicago - Dallas', dateRange: 'August 01 - August 04', price: '$138' },
    { airlineLogo: '/assets/airindia.png', route: 'Boston - Toronto', dateRange: 'August 02 - August 04', price: '$145' },
    { airlineLogo: '/assets/qatar.png', route: 'Miami - San Juan', dateRange: 'August 02 - August 04', price: '$155' },
  ];

  return (
    <div className="max-w-xl mx-auto p-4 text-center">
      <h2 className="text-3xl font-bold mb-2">Top Flight Destinations</h2>
      <p className="text-lg text-gray-600 mb-4">Offers for all travel styles</p>
      <div className="space-y-2">
        {flights.map((flight, index) => (
          <FlightCard
            key={index}
            airlineLogo={flight.airlineLogo}
            route={flight.route}
            dateRange={flight.dateRange}
            price={flight.price}
          />
        ))}
      </div>
    </div>
  );
};

export default TopFlightDestinations;
