import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carasoul = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const images = [
    "https://images.unsplash.com/photo-1562967967-2889f17a04f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1530735606451-8f5f13955328?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      slidesPerView={1}
      speed={2000}
      loop={true}
      autoplay={{ delay: 5000 }}
      onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[100vh] object-cover"
          />
          <div
            className={`absolute top-0 left-0 w-full h-full transition-all duration-300 ${
              activeIndex === index
                ? "bg-purple-900 opacity-50"
                : "bg-purple-900 opacity-30"
            }`}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
            <p className="text-7xl font-bold mb-4">
              CALL NOW <br />
              <span className="font-serif text-3xl">FOR UNPUBLISHED FARE</span>
            </p>
            <a
              href="tel:+18553931260"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50"
            >
              855-393-1260
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carasoul;
