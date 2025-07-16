import React from "react";
import Navbar from "../../Components/Navbar";
import GetInTouch from "../../Components/GetInTouch";
import Footer from "../../Components/Footer";
import OurLocation from "../../Components/OurLocation";
import Map from "../../Components/Map";
import Banner3 from "../../assets/banner3.jpg";

const ContactUs = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-80 sm:h-96 md:h-110 lg:h-120 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={Banner3}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>

        {/* Navbar Overlay */}
        <div className="absolute left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-1 sm:mb-2 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato, sans-serif" }}
            >
              Get in
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              CONTACT
            </h1>
          </div>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-start lg:items-center pt-8 sm:pt-12 lg:pt-15 bg-gray-50 px-4 sm:px-8 lg:px-0 pb-8 sm:pb-12 lg:pb-0 gap-8 lg:gap-0">
        {/* Contact Details */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl pb-3 sm:pb-4 lg:pb-5 tracking-tight">
            Contact
          </h1>
          <p className="text-sm sm:text-base lg:text-base leading-relaxed">
            732/21 Second Street, Manchester <br /> 
            Kingston, United Kingdom
          </p>
          <p className="pt-3 sm:pt-4 lg:pt-5 text-sm sm:text-base lg:text-base">
            Tel: +65.4566743
          </p>
        </div>
        
        {/* Opening Hours */}
        <div className="w-full lg:w-auto text-center lg:text-left">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl pb-3 sm:pb-4 lg:pb-5 tracking-tight">
            Opening Hours
          </h1>
          <div className="flex sm:flex-col lg:flex-row  gap-6 sm:gap-8 lg:gap-40 justify-center lg:justify-between items-start">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base lg:text-base font-bold mb-2">
                Lunch Time
              </h4>
              <p className="text-sm sm:text-base lg:text-base">Monday to Sunday</p>
              <p className="pt-1 sm:pt-2 text-sm sm:text-base lg:text-base">
                10.30am - 3:00pm
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base lg:text-base font-bold mb-2">
                Dinner Time
              </h4>
              <p className="text-sm sm:text-base lg:text-base">Monday to Sunday</p>
              <p className="pt-1 sm:pt-2 text-sm sm:text-base lg:text-base">
                5.30pm - 11:00pm
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Other Components */}
      <GetInTouch />
      <Map />
      <OurLocation />
      <Footer />
    </>
  );
};

export default ContactUs;
