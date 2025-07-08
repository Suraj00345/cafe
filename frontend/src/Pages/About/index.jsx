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

      <div className="flex justify-center items-center bg-gray-50 gap-5 ">
        <div className="flex mt-20 gap-5">
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food1}`}
            alt="Food Image"
          />
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Res1}`}
            alt="Food Image"
          />
        </div>
        {/* card */}
        <div className="mb-10 relative right-10 ">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-10 text-center mt-30 ">
            {/* Header */}
            <div className="mb-8">
              <h2
                className="text-4xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi,curshive" }}
              >
                About
              </h2>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tighter">
                OUR STORY
              </h1>
            </div>
            {/* Decorative Element */}
            <div className="mb-8">
              <div className="flex justify-center">
                <img className="opacity-20 h-7" src={`${Flower2}`} alt="" />
              </div>
            </div>
            {/* Content */}
            <p className="text-gray-700 leading-relaxed font-medium text-base mb-8">
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptatem accusantium doloremque <br /> laudantium, totam rem
              aperiam, eaque ipsa quae <br /> ab illo inventore veritatis et
              quasi.
            </p>
            {/* Call to Action */}
            <a href="/about" className="text-amber-500 hover:text-amber-700 font-bold text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 pb-15">
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-50 gap-5 -mt-20 pb-18">
        {/* card */}
        <div className="mb-10 relative left-10 z-50 ">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-10 text-center mt-30 ">
            {/* Header */}
            <div className="mb-8">
              <h2
                className="text-4xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi,curshive" }}
              >
                Visit Our
              </h2>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tighter">
                RESTAURANT
              </h1>
            </div>
            {/* Decorative Element */}
            <div className="mb-8">
              <div className="flex justify-center">
                <img className="opacity-20 h-7" src={`${Flower2}`} alt="" />
              </div>
            </div>
            {/* Content */}
            <p className="text-gray-700 leading-relaxed font-medium text-base mb-8">
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptatem accusantium doloremque <br /> laudantium, totam rem
              aperiam, eaque ipsa quae <br /> ab illo inventore veritatis et
              quasi.
            </p>
            {/* Call to Action */}
            <a href="/contact_us" className="text-amber-500 hover:text-amber-700 font-bold text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 pb-15">
              Get Locations
            </a>
          </div>
        </div>
        {/* img */}
        <div className="flex mt-20 gap-5">
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food9}`}
            alt="Food Image"
          />
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Res6}`}
            alt="Food Image"
          />
        </div>
      </div>

      <div
        className="w-full h-150 bg-cover bg-center rounded-2xl"
        style={{ backgroundImage: `url(${Banner2})` }}
      >
        <div className="relative z-10 flex items-center justify-center p-20">
          <div className="text-center text-white justify-items-center">
            <h2
              className="text-4xl md:text-5xl font-light mb-2 -ml-15 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Customer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              TESTIMONIALS
            </h1>
            <p className="pt-25 pb-5 text-lg opacity-80">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta
              possimus, <br /> magni voluptatum molestias explicabo voluptatibus{" "}
              <br />
              voluptatem tempora esse libero, cum recusandae.
            </p>
            <div className="flex items-center opacity-90  gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src={`${profile1}`}
                alt="image"
              />
              <p className="text-lg font-bold">Jessica Lee</p>
            </div>
          </div>
        </div>
      </div>

     <OurLocation/>
      <Footer />
    </>
  );
};

export default About;
