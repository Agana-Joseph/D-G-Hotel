import React from 'react'

//components
import HomeHero from '../components/HomeHero'
import ShortAbout from '../components/ShortAbout'
import Capacity from '../components/Capacity'
import OurBestRooms from '../components/OurBestRooms'
import OurServices from '../components/Service'
import Feedback from '../components/Feedback'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <ShortAbout/>
      <Capacity />
      <OurBestRooms />
      < OurServices/>
      <Feedback />
      <Newsletter />
    </div>
  )
}

export default Home