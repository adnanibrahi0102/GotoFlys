import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Ava Johnson",
      date: "June 12, 2023",
      review:
        "Fantastic experience! Emily was incredibly helpful and made the entire booking process seamless. The destination was beautiful and exactly as described.",
      desc: "Ava was thrilled with the personalized service she received from Emily. The trip was well-organized, and Ava appreciated the attention to detail.",
      image:
        "https://images.unsplash.com/photo-1489323588428-2cb185f5cd5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sophia Davis",
      date: "July 8, 2023",
      review:
        "Highly recommend! Sarah provided exceptional customer service and went above and beyond to ensure my trip was perfect. I loved every moment!",
      desc: "Sophia's trip was a dream come true thanks to Sarah's dedicated assistance. From start to finish, Sophia felt well taken care of and thoroughly enjoyed her travels.",
      image:
        "https://images.unsplash.com/photo-1536619422114-eb0760800aa5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Olivia Martinez",
      date: "August 3, 2023",
      review:
        "Amazing trip! Jessica was very professional and attentive. She helped with every detail and made sure my vacation was hassle-free. Thank you!",
      desc: "Olivia's experience was enhanced by Jessica's meticulous planning and support. Olivia felt well-supported throughout her journey and had a memorable vacation.",
      image:
        "https://images.unsplash.com/photo-1582152629442-4a864303fb96?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Isabella Wilson",
      date: "September 15, 2023",
      review:
        "Incredible service! Mia was fantastic in handling all my travel arrangements. Everything went smoothly, and the trip exceeded my expectations!",
      desc: "Isabella appreciated Mia's thorough and proactive approach. The attention to detail made Isabella's trip enjoyable and stress-free.",
      image:
        "https://images.unsplash.com/photo-1582152630490-e7e5d255f833?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mia Anderson",
      date: "October 21, 2023",
      review:
        "Wonderful experience! Chloe made the entire process easy and enjoyable. Her recommendations were spot on, and the trip was absolutely perfect.",
      desc: "Mia was impressed with Chloe's expertise and support. The trip was well-planned and Mia enjoyed every aspect of her vacation, thanks to Chloe's efforts.",
      image:
        "https://images.unsplash.com/photo-1518676371439-36493cc89636?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Emma Thomas",
      date: "November 30, 2023",
      review:
        "Exceptional trip! Ava's guidance and support were invaluable. Everything from the booking to the travel arrangements was handled flawlessly.",
      desc: "Emma had a fantastic experience, largely due to Ava's efficient and friendly service. Emma appreciated the smooth execution of her travel plans and the high-quality recommendations.",
      image:
        "https://images.unsplash.com/photo-1622776161674-f292ea176a6a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 5000 }}
        loop
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide per view on mobile
          },
          768: {
            slidesPerView: 2, // 2 slides per view on tablets and above
          },
        }}
        className="mySwiper"
      >
        {testimonialData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center h-90 rounded-lg shadow-lg text-white flex items-end justify-center p-6"
              style={{ backgroundImage: `url(${testimonial.image})` }}
            >
              <div className="bg-black bg-opacity-50  h-full p-6 rounded-lg text-center overflow-hidden">
                <h3 className="text-2xl text-black font-bold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm mb-2">{testimonial.date}</p>
                <p className="mb-2">{testimonial.review}</p>
                <p>{testimonial.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <hr className="mt-5"
        style={{
          height: "4px",
          background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          border: "none",
        }}
      />
    </div>
  );
};

export default Testimonials;
