import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CTA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const ctaItems = [
    {
      title: 'Maldives deluxe package',
      text: `Escape to paradise with the Maldives Deluxe Package, a luxurious retreat where azure waters meet powdery white sands. Stay in private overwater villas, waking up to the soothing sounds of the ocean. Enjoy breathtaking sunsets from your deck and explore vibrant coral reefs through snorkeling or diving adventures. Indulge in world-class dining with ocean views and pamper yourself with rejuvenating spa treatments. Every moment in the Maldives is a blend of opulence and natural beauty, promising an unforgettable escape from the ordinary.`,
      phoneNumber: '(888) 262-9417',
    },
    {
      title: 'America deluxe package',
      text: `Discover the wonders of America with the America Deluxe Package. From the bustling cities to the serene national parks, this package offers a comprehensive tour of the best sights. Enjoy luxurious accommodations, guided tours, and exclusive experiences. Whether you're exploring the iconic landmarks or indulging in local cuisines, this package ensures a memorable and delightful journey.`,
      phoneNumber: '(888) 262-9417',
    },
    {
      title: 'Hawaii deluxe package',
      text: `Experience the tropical paradise of Hawaii with the Hawaii Deluxe Package. Stay in premium beachfront resorts, participate in authentic Hawaiian cultural activities, and explore the stunning natural landscapes. From volcano tours to traditional luaus, this package offers a blend of relaxation and adventure. Enjoy the beauty and spirit of Hawaii with this unforgettable package.`,
      phoneNumber: '(888) 262-9417',
    },
  ];

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1618238832760-7e4129ef4a43?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          speed={2000}
          onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {ctaItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className="text-center p-6 bg-white h-[70vh] bg-opacity-75 rounded-lg shadow-lg flex flex-col justify-center "
            >
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2">{item.title}</h2>
              <div className="flex justify-center mb-2 mt-2">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="text-yellow-500 text-lg sm:text-xl md:text-xl">&#9733;</i>
                ))}
                <i className="text-gray-300 text-lg sm:text-xl md:text-xl">&#9733;</i>
              </div>
              <p className="mb-2 text-sm sm:text-base md:text-lg p-4">{item.text}</p>
              <div className="flex justify-center mt-4">
                <a
                  href={`tel:${item.phoneNumber}`}
                  className="inline-flex items-center justify-center h-12 px-6 font-medium text-white bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] rounded-lg border border-purple-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
                >
                  Book Now...
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CTA;
