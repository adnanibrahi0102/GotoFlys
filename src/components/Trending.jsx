import React from "react";

// Sample data for hotels
const hotelData = [
  {
    name: "Grand Hotel",
    price: "From $182",
    location: "Madrid, Spain",
    imageUrl: "https://images.unsplash.com/photo-1568021903150-f2792fce57bf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mars Hotel",
    price: "From $632",
    location: "Paris, France",
    imageUrl: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Queen Hotel",
    price: "From $142",
    location: "Rome, Italy",
    imageUrl: "https://images.unsplash.com/photo-1579625224451-b0ab6ed101f5?q=80&w=1421&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mars Hotel",
    price: "From $652",
    location: "Tokyo, Japan",
    imageUrl: "https://images.unsplash.com/photo-1711470623168-885d5b054e57?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Grand Hotel",
    price: "From $964",
    location: "New York City, USA",
    imageUrl: "https://images.unsplash.com/photo-1576424298745-7467a0aa532b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mars Hotel",
    price: "From $423",
    location: "Sydney, Australia",
    imageUrl: "https://images.unsplash.com/photo-1573663520878-8c38b10264fc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Queen Hotel",
    price: "From $754",
    location: "Istanbul, Turkey",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mars Hotel",
    price: "From $653",
    location: "Rio de Janeiro, Brazil",
    imageUrl: "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Trending = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 uppercase text-center mt-10">Trending Now</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {hotelData.map((hotel, index) => (
          <div
            key={index}
            className="bg-cover bg-center h-36 rounded-lg shadow-lg text-white flex flex-col justify-end p-2"
            style={{ backgroundImage: `url(${hotel.imageUrl})` }}
          >
            <div className="bg-purple-900 bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-1 ">{hotel.name}</h3>
              <p className="text-sm mb-1 ">{hotel.price}</p>
              <p className="text-xs ">{hotel.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
