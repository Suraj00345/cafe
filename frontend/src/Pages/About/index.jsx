import React from "react";
import { ArrowRight } from "lucide-react";
import Footer from "../../Components/Footer";
import Banner from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Navbar from "../../Components/Navbar";
import Food1 from "../../assets/food4.jpg";
import Food9 from "../../assets/food9.jpg";
import Res1 from "../../assets/res1.jpg";
import Res6 from "../../assets/res6.jpg";
import Flower2 from "../../assets/flower2.png";
import profile1 from "../../assets/profile1.jpg";
import OurLocation from "../../Components/OurLocation";

const locations = [
  {
    name: "Grand Paragon",
    address: "732/21 Second Street, Manchester",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Center",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Zen",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
  {
    name: "Grand Place",
    address: "78/31 Third Street, Liverpool",
    city: "King Street, Kingston United Kingdom",
    phone: "+65.4566743",
  },
];

const About = () => {
  return (
    <>
      <div className="relative w-full h-116 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Banner}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
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
              Discover
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              ABOUT US
            </h1>
          </div>
        </div>
      </div>

      {/* About Our Story Section */}
      <div className="bg-amber-50 px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Images */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
              <img
                className="w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Food1}`}
                alt="Food Image"
              />
              <img
                className="w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Res1}`}
                alt="Food Image"
              />
            </div>

            {/* Card */}
            <div className="w-full max-w-sm  lg:relative lg:right-15">
              <div className="bg-white rounded-lg shadow-lg p-12 sm:p-8 lg:p-13 text-center">
                {/* Header */}
                <div className="mb-6 lg:mb-8">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-light text-amber-600 mb-2"
                    style={{ fontFamily: "Kristi,cursive" }}
                  >
                    About
                  </h2>
                  <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-900 tracking-tight">
                    OUR STORY
                  </h1>
                </div>

                {/* Decorative Element */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex justify-center">
                    <img
                      className="opacity-20 h-5 sm:h-6 lg:h-7"
                      src={`${Flower2}`}
                      alt=""
                    />
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base mb-4 lg:mb-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
                </p>

                {/* Call to Action */}
                <button className="text-amber-500 hover:text-amber-700 font-bold text-lg sm:text-xl lg:text-2xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* visit our restaurant */}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-amber-50 gap-5 lg:gap-10 -mt-5 pb-10 lg:pb-18 px-4 lg:px-15">
      {/* Card */}
      <div className="mb-10 lg:mb-0 lg:relative lg:left-15 lg:-top-4 z-50 w-full max-w-sm lg:max-w-sm lg:ml-20">
        <div className="mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 text-center mt-10 lg:mt-30">
          {/* Header */}
          <div className="mb-6 lg:mb-8">
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-light text-amber-600 mb-2"
              style={{ fontFamily: "Kristi, cursive" }}
            >
              Visit Our
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tighter">
              RESTAURANT
            </h1>
          </div>
          
          {/* Decorative Element */}
          <div className="mb-6 lg:mb-8">
            <div className="flex justify-center">
              <img className="opacity-20 h-5 lg:h-7" src={Flower2} alt="" />
            </div>
          </div>
          
          {/* Content */}
          <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base lg:text-base mb-6 lg:mb-8 px-2 lg:px-0">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.
          </p>
          
          {/* Call to Action */}
          <a
            href="/contact_us"
            className="text-amber-500 hover:text-amber-700 font-bold text-lg sm:text-xl lg:text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 inline-block pb-4 lg:pb-15"
          >
            Get Locations
          </a>
        </div>
      </div>
      
      {/* Images */}
      <div className="flex flex-col sm:flex-row mt-0 lg:mt-20 gap-3 sm:gap-5 w-full max-w-2xl lg:max-w-none">
        <img
          className="w-full sm:w-60 lg:w-80 h-60 sm:h-80 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
          src={Food9}
          alt="Food Image"
        />
        <img
          className="w-full sm:w-60 lg:w-80 h-60 sm:h-80 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
          src={Res6}
          alt="Restaurant Image"
        />
      </div>
    </div>
 {/* coustomer testimonials */}
       <div
      className="w-full h-96 sm:h-120 md:h-140 lg:h-150 bg-cover bg-center rounded-2xl relative overflow-hidden"
      style={{ backgroundImage: `url(${Banner2})` }}
    >
      <div className="relative z-10 flex items-center justify-center h-full p-4 sm:p-8 md:p-12 lg:p-20">
        <div className="text-center text-white max-w-4xl">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-light mb-1 sm:mb-2 text-amber-400"
            style={{ fontFamily: "MyCustomFontLato, sans-serif" }}
          >
            Customer
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 md:mb-8 lg:mb-0">
            TESTIMONIALS
          </h1>
          <p className="pt-4 sm:pt-8 md:pt-12 lg:pt-25 pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base md:text-lg opacity-80 leading-relaxed px-2 sm:px-4 md:px-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta
            possimus, magni voluptatum molestias explicabo voluptatibus
            voluptatem tempora esse libero, cum recusandae.
          </p>
          <div className="flex items-center justify-center opacity-90 gap-2 sm:gap-3 mt-4 sm:mt-6">
            <img
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
              src={profile1}
              alt="Jessica Lee"
            />
            <p className="text-base sm:text-lg font-bold">Jessica Lee</p>
          </div>
        </div>
      </div>
    </div>

      <OurLocation />
      <Footer />
    </>
  );
};

export default About;
