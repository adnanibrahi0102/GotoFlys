import React from "react";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaGlobe,
  FaShip,
  FaSwimmer,
} from "react-icons/fa";

const Offers = () => {
  const offersData = [
    {
      id: 1,
      title: "Luxury Stay in Paris",
      image:
        "https://plus.unsplash.com/premium_photo-1718285552026-ec913034e39e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$70 per night",
      description:
        "Enjoy Grand Club benefits including free breakfast and discounts on select room types.",
      reviews: "60 Reviews",
      rating: "8.4 / 10",
    },
    {
      id: 2,
      title: "Beachside Resort in Bali",
      image:
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$85 per night",
      description:
        "Relax in our beachfront suites with complimentary cocktails and exclusive room service options.",
      reviews: "72 Reviews",
      rating: "9.0 / 10",
    },
    {
      id: 3,
      title: "Mountain Lodge in Aspen",
      image:
        "https://images.unsplash.com/photo-1480497490787-505ec076689f?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$95 per night",
      description:
        "Experience cozy mountain lodging with included ski passes and gourmet dining.",
      reviews: "50 Reviews",
      rating: "8.7 / 10",
    },
    {
      id: 4,
      title: "City Escape in New York",
      image:
        "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$120 per night",
      description:
        "Stay in the heart of the city with complimentary tickets to top attractions and exclusive dining experiences.",
      reviews: "88 Reviews",
      rating: "9.2 / 10",
    },
    {
      id: 5,
      title: "Countryside Retreat in Tuscany",
      image:
        "https://images.unsplash.com/photo-1516108317508-6788f6a160e4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$80 per night",
      description:
        "Enjoy serene countryside views with included wine tastings and farm-to-table dining.",
      reviews: "65 Reviews",
      rating: "8.9 / 10",
    },
    {
      id: 6,
      title: "Desert Oasis in Dubai",
      image:
        "https://images.unsplash.com/photo-1504626113995-a0e5d91f925d?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$100 per night",
      description:
        "Experience luxury in the desert with included spa treatments and private excursions.",
      reviews: "55 Reviews",
      rating: "9.1 / 10",
    },
  ];

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1676927197032-7a200b65a9a2?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase">
            Our Offers
          </h1>
          <p className="text-lg md:text-xl">
            Explore our exclusive offers and deals for a memorable stay!
          </p>
          <a
            href="tel:8553931260"
            className=" mt-4 col-span-1 md:col-span-2 lg:col-span-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
          >
            855-393-1260
          </a>
        </div>
      </div>
      <div className="  bg-gradient-to-r from-orange-500 to-purple-600 py-6">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form>
              <div className="flex flex-wrap justify-around mb-4 rounded-t-lg">
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaPlane />
                  <span className="hidden sm:inline">Flights</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaHotel />
                  <span className="hidden sm:inline">Hotels</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaCar />
                  <span className="hidden sm:inline">Car Rentals</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe />
                  <span className="hidden sm:inline">Trips</span>
                </button>
                <button
                  type="button"
                  className="text-orange-500 flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent hover:bg-orange-500 hover:text-white transition-colors duration-300"
                >
                  <FaShip />
                  <span className="hidden sm:inline">Cruises</span>
                </button>
                <button
                  type="button"
                  className="text-white flex items-center space-x-2 px-6 py-3 rounded-lg border border-transparent bg-orange-500 transition-colors duration-300"
                >
                  <FaSwimmer />
                  <span className="hidden sm:inline">Activities</span>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Origin From
                  </label>
                  <input
                    type="text"
                    id="origin"
                    placeholder="Origin From"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
                  />
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Destination
                  </label>
                  <input
                    type="text"
                    id="destination"
                    placeholder="Destination"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
                  />
                </div>
                <div>
                  <label
                    htmlFor="departure-date"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="departure-date"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
                  />
                </div>
                <div>
                  <label
                    htmlFor="return-date"
                    className="block text-sm font-medium text-gray-700 text-center"
                  >
                    Return Date
                  </label>
                  <input
                    type="date"
                    id="return-date"
                    className="mt-1 p-2 border border-gray-300 rounded-md w-full text-center"
                  />
                </div>
                <div className="flex items-center justify-center mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offersData.map((offer) => (
              <div
                key={offer.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{offer.price}</p>
                  <p className="text-gray-700 mb-4">{offer.description}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{offer.reviews}</span>
                    <span>{offer.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
