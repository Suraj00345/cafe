import React from "react";
import Navbar from "../../Components/Navbar";
import Banner4 from "../../assets/banner4.jpg";
import Food5 from "../../assets/food5.jpg";
import Food4 from "../../assets/food4.jpg";
import Food6 from "../../assets/res2.jpg";
import Flower2 from "../../assets/flower2.png";
import Flower4 from "../../assets/flower4.png";
import Footer from "../../Components/Footer";

const OurService = () => {
  return (
    <>
      <div className="relative w-full h-116 overflow-hidden ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-black-500">
          <img
            src={`${Banner4}`}
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
              Our
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              SERVICES
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gray-50 gap-5 -mt-15 pb-18">
        {/* card */}
        <div className="mb-10 relative top-20 left-10 z-50 ">
          <div className="max-w-md mx-auto bg-white rounded-md shadow-lg py-8 px-10 text-center mt-30 ">
            {/* Header */}
            <div className="mb-4">
              <h2
                className="text-4xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi,curshive" }}
              >
                Food
              </h2>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tighter">
                DELIVERY
              </h1>
            </div>
            {/* Decorative Element */}
            <div className="mb-8">
              <div className="flex justify-center">
                <img className="opacity-30 h-6" src={`${Flower2}`} alt="" />
              </div>
            </div>
            {/* Content */}
            <p className="text-gray-700 leading-relaxed font-medium text-base mb-8">
              Sed ut perspiciatis unde omnis iste <br /> natus error sit
              voluptatem <br /> accusantium doloremque laudantium, <br /> totam
              rem aperiam, eaque ipsa quae <br /> ab illo inventore veritatis et
              quasi.
            </p>
            {/* Call to Action */}
            <button className="text-amber-500 hover:text-amber-700 font-bold text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 pb-15">
              Get Locations
            </button>
          </div>
        </div>
        {/* img */}
        <div className="flex mt-30 gap-5">
          <img
            className="w-70 h-110 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food4}`}
            alt="Food Image"
          />
          <img
            className="w-70 h-110 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food5}`}
            alt="Food Image"
          />
        </div>
      </div>

      <div className="flex justify-evenly items-center pt-15 py-25 bg-gray-50">
        <div className="text-center">
          <h1 className="font-bold text-6xl">25</h1>
          <p className="font-normal pt-2 text-xs tracking-widest">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-6xl">12</h1>
          <p className="font-normal pt-2 text-xs tracking-widest">
            AWARDS WINNING CHEFS
          </p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-6xl">125</h1>
          <p className="font-normal pt-2 text-xs tracking-widest">
            DISHES & MENUS
          </p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-6xl">15</h1>
          <p className="font-normal pt-2 text-xs tracking-widest">
            RESTAURANT BRANCHES
          </p>
        </div>
      </div>

      {/* Menus */}
      <div className="relative w-full h-106 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Food6}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-20"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full"></div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute top-0 right-40 h-104 w-100 rounded-md bg-neutral-950 opacity-90 z-10 text-amber-50 flex flex-col items-center ">
          <p className=" text-4xl pt-13 text-amber-600 italic">Event</p>
          <p className="text-5xl font-bold tracking-tight">CATERING</p>
          <img className="items-center h-6 opacity-40 m-4" src={`${Flower4}`} alt="" />
          <p className="text-sm text-center pb-10">
            Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
            voluptatem accusantium doloremque laudantium, <br /> totam rem
            aperiam, eaque ipsa quae ab illo <br /> inventore veritatis et
            quasi.
          </p>
          <a href="/about" className="underline underline-offset-4 text-amber-500 font-semibold tracking-wider">Contact Us</a>
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default OurService;
