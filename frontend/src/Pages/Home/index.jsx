import React from 'react'
import Footer from '../../Components/Footer';
import HeroSection from '../../Components/HeroSection';
import HomeMenus from '../../Components/HomeMenus';
import GetInTouch from '../../Components/GetInTouch';


const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HomeMenus/>
        <GetInTouch/>
        <Footer/>
    </div>
  )
}

export default Home;