import React from 'react';
import CountUp from 'react-countup';

const About = () => {
  const handleClick = () => {
    window.open('tel:8553931260');
    console.log("clicked");
  };

  return (
    <div>
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1602826347632-fc49a8675be6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <button onClick={handleClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50">
            8553931260
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-4">
            <img src="https://images.unsplash.com/photo-1496046596374-a16aa8b8ae63?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tours" className="w-full h-auto rounded-md" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">We Have the Best Tours</h2>
            <p className="text-lg mb-4 text-gray-500">
              gotoflys.com is a registered brand name of My Fly Support LLC located at 30 N Gould St R Sheridan, WY 82801, USA which is an international tour & travel company.
              We are not affiliated with any airline companies. We are an independent tour & travel company.
            </p>
            <button onClick={handleClick} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-purple-800 bg-[linear-gradient(110deg,#6a0dad,45%,#dc143c,55%,#6a0dad)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-purple-50">
              8553931260
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/4 p-4">
              <h2 className="text-4xl font-bold text-purple-800"><CountUp end={255} duration={5} /></h2>
              <p className="text-lg">Clients</p>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <h2 className="text-4xl font-bold text-purple-800"><CountUp end={1176} duration={5} /></h2>
              <p className="text-lg">Projects</p>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <h2 className="text-4xl font-bold text-purple-800"><CountUp end={39} duration={5} /></h2>
              <p className="text-lg">Countries</p>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <h2 className="text-4xl font-bold text-purple-800"><CountUp end={127} duration={5} /></h2>
              <p className="text-lg">Coffees</p>
            </div>
            <div className="w-full md:w-1/4 p-4">
              <h2 className="text-4xl font-bold text-purple-800"><CountUp end={1257} duration={5} /></h2>
              <p className="text-lg">Bookings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
