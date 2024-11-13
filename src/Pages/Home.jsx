import React from 'react'
import HomeCarousel from '../Components/HomeCarousel'
import Clients from '../Components/Clients'
import Help from '../Components/Help'
import Howtodesign from '../Components/Howtodesign'
import Details from '../Components/Details'
import Caring from '../Components/Caring'
import Demo from '../Components/Demo'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <HomeCarousel/>
        <Clients/>
        <Help/>
        <Howtodesign/>
        <Details/>
        <Caring/>
        <Demo/>
        <Footer/>
    </div>
  )
}

export default Home