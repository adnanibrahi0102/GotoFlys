import React from 'react';

const FlightCard = ({ airlineLogo, route, dateRange, price }) => (
  <div className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
    <div className="flex items-center space-x-4">
      <img src={airlineLogo} alt="Airline Logo" className="h-10 w-10 object-contain" />
      <div>
        <div className="text-lg font-bold text-orange-600">{route}</div>
        <div className="text-gray-500">{dateRange}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="text-gray-500">From</div>
      <div className="text-2xl font-bold text-orange-600">{price}</div>
      <button onClick={handleClick} className="mt-2 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg">Book Now</button>
    </div>
  </div>
);
const handleClick = () => {
    window.open('tel:8553931260');

  }
const TopFlightDestinations = () => {
  const flights = [
    { airlineLogo: '/assets/atlanta.jpg', route: 'Atlanta - Fort Lauderdale', dateRange: 'August 04 - August 05', price: '$38' },
    { airlineLogo: '/assets/atlanta.jpg', route: 'Atlanta - Fort Lauderdale', dateRange: 'August 04 - August 05', price: '$40' },
    { airlineLogo: '/assets/airshow.jpeg', route: 'Edmonton - Abbotsford', dateRange: 'August 01 - August 05', price: '$67' },
    { airlineLogo: '/assets/qatar.png', route: 'Los Angeles - Las Vegas', dateRange: 'August 02 - August 04', price: '$88' },
    { airlineLogo: '/assets/vistara.jpeg', route: 'Miami - San Juan', dateRange: 'August 01 - August 04', price: '$116' },
    { airlineLogo: '/assets/airindia.png', route: 'New York - San Francisco', dateRange: 'August 03 - August 06', price: '$125' },
    { airlineLogo: '/assets/indigo.png', route: 'Chicago - Dallas', dateRange: 'August 01 - August 04', price: '$138' },
    

  ];

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-2">Top Flight Destinations</h2>
      <p className="text-lg text-gray-600 mb-4">Offers for all travel styles</p>
      <div className="space-y-4">
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