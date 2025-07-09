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
      <div className="relative w-full h-120 overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black-500">
          <img
            src={`${Banner3}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover bg-black-500"
          />
          <div class="absolute inset-0 bg-black opacity-30 bg-blend-darken"></div>
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute  left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-5xl font-light mb-2 -ml-15 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Get in
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              CONTACT
            </h1>
          </div>
        </div>
      </div>
      
      <div className="flex justify-evenly items-center pt-15 bg-gray-50">
        <div>
          <h1 className="font-bold text-4xl pb-5 tracking-tight">Contact</h1>
          <p>
            732/21 Second Street, Manchester <br /> Kingston, United Kingdom
          </p>
          <p className="pt-5">Tel: +65.4566743</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl pb-5 tracking-tight">
            Opening Hours
          </h1>
          <div className="flex gap-40 justify-between items-center">
            <div>
              <h4 className="text-base font-bold">Lunch Time</h4>
              <p> Monday to Sunday</p>
              <p className="pt-2">10.30am - 3:00pm</p>
            </div>
            <div>
              <h4 className="text-base font-bold">Dinner Time</h4>
              <p> Monday to Sunday</p>
              <p className="pt-2">5.30pm - 11:00pm</p>
            </div>
          </div>
        </div>
      </div>
      <GetInTouch  />
      <Map />
      <OurLocation />
      <Footer/>
    </>
  );
};

export default ContactUs;
