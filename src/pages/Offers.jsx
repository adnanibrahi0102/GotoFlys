import React from 'react';
import OffersComp from '../components/OffersComp';

const Offers = () => {
  const offersData = [
    {
      id: 1,
      title: "Luxury Stay in Paris",
      image: "https://plus.unsplash.com/premium_photo-1718285552026-ec913034e39e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$70 per night",
      description: "Enjoy Grand Club benefits including free breakfast and discounts on select room types.",
      reviews: "60 Reviews",
      rating: "8.4 / 10",
    },
    {
      id: 2,
      title: "Beachside Resort in Bali",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$85 per night",
      description: "Relax in our beachfront suites with complimentary cocktails and exclusive room service options.",
      reviews: "72 Reviews",
      rating: "9.0 / 10",
    },
    {
      id: 3,
      title: "Mountain Lodge in Aspen",
      image: "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$95 per night",
      description: "Experience cozy mountain lodging with included ski passes and gourmet dining.",
      reviews: "50 Reviews",
      rating: "8.7 / 10",
    },
    {
      id: 4,
      title: "City Escape in New York",
      image: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$120 per night",
      description: "Stay in the heart of the city with complimentary tickets to top attractions and exclusive dining experiences.",
      reviews: "88 Reviews",
      rating: "9.2 / 10",
    },
    {
      id: 5,
      title: "Countryside Retreat in Tuscany",
      image: "https://images.unsplash.com/photo-1516108317508-6788f6a160e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$80 per night",
      description: "Enjoy serene countryside views with included wine tastings and farm-to-table dining.",
      reviews: "65 Reviews",
      rating: "8.9 / 10",
    },
    {
      id: 6,
      title: "Desert Oasis in Dubai",
      image: "https://images.unsplash.com/photo-1504626113995-a0e5d91f925d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$100 per night",
      description: "Experience luxury in the desert with included spa treatments and private excursions.",
      reviews: "55 Reviews",
      rating: "9.1 / 10",
    }
  ];

  const handleClick = () => {
    window.open('tel:8553931260');
  };

  return (
    <div>
      <OffersComp />
      <div className="px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Exclusive Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offersData.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
              <img src={offer.image} alt={offer.title} className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-80" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-800">{offer.title}</h3>
                <p className="text-xl font-semibold mb-4">{offer.price}</p>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={handleClick}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    Book Now
                  </button>
                  <div className="text-center">
                    <p className="text-lg font-semibold">{offer.reviews}</p>
                    <p className="text-lg font-semibold">{offer.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Offers;
