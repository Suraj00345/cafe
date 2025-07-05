import React from 'react'
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import HeroSection from '../../Components/HeroSection';
import HomeMenus from '../../Components/HomeMenus';

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <HomeMenus/>
        <Footer/>
    </div>
  )
}

export default Home;