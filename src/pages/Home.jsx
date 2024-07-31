import React from 'react'
import Carasoul from '../components/Carasoul'
import Booking from '../components/Booking'
import CTA from '../components/CTA'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'
import Trending from '../components/Trending'
import Destinations from '../components/Destinations'


const Home = () => {
  return (
    <div>
  
      <Carasoul/>
      <Booking/>
      <CTA/>
      <Offers/>
      <Testimonials/>
      <Trending/>
      <Destinations/>
    </div>
  )
}

export default Home
