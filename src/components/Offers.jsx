import React from 'react';

const Offers = ({ title, image, price, stars, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-60 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center mb-2">
        <span className="text-yellow-500 text-xl">{'★'.repeat(stars)}</span>
        <span className="text-gray-300 text-xl">{'★'.repeat(5 - stars)}</span>
      </div>
      <p className="text-gray-800 text-lg font-medium mb-2">${price} per night</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition">
        Read More
      </button>
    </div>
  </div>
);

const OffersSection = () => {
  const cardData = [
    {
      title: 'Grand Castle',
      image: 'https://plus.unsplash.com/premium_photo-1694475052717-df3d93d3e6eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 150,
      stars: 4,
      description: 'Experience the grandeur of the Grand Castle. Explore majestic halls, beautiful gardens, and indulge in royal luxuries.',
    },
    {
      title: 'Turkey Hills',
      image: 'https://images.unsplash.com/photo-1569833375556-32527852c7e2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 120,
      stars: 5,
      description: 'Discover the serene beauty of Turkey Hills. Enjoy rolling landscapes, lush vineyards, and the tranquility of the countryside.',
    },
    {
      title: 'Island Dream',
      image: 'https://images.unsplash.com/photo-1654171570616-047854c6ca7f?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 200,
      stars: 5,
      description: 'Embark on a journey to paradise with Island Dream. Discover hidden coves, pristine beaches, and lush jungles. Immerse yourself in the beauty of turquoise waters and create unforgettable memories.',
    },
    {
      title: 'Travel Light',
      image: 'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: 90,
      stars: 3,
      description: 'Travel Light is perfect for minimalist travelers. Enjoy comfortable stays with essential amenities and explore vibrant cityscapes.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Round-the-clock customer service to get all your doubts clarified.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Offers
            key={index}
            title={card.title}
            image={card.image}
            price={card.price}
            stars={card.stars}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OffersSection;
