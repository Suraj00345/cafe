import React from "react";
import Food1 from "../../assets/food1.jpg";
import Food4 from "../../assets/food4.jpg";
import Food5 from "../../assets/food5.jpg";
import Food6 from "../../assets/food6.jpg";
import Flower from "../../assets/flower.png";
import Flower2 from "../../assets/flower2.png";
import res1 from "../../assets/res1.jpg";
import res2 from "../../assets/res2.jpg";
import res3 from "../../assets/res3.jpg";
import res4 from "../../assets/res4.jpg";
import res5 from "../../assets/res5.jpg";
import res6 from "../../assets/res6.jpg";
import Navbar from "../Navbar";
import { CircleArrowDown } from "lucide-react";
import "../../App.css";

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Food1})` }}
      >
        <Navbar />
        <div
          className="text-white text-center justify-items-center mt-30"
          style={{ fontFamily: "MyCustomFontLato" }}
        >
          <img src={`${Flower}`} alt="Flower Image" />
          <p className="font-black text-[110px]">THE REX</p>
          <br />
          <p className="font-black text-[62px] ml-5 -mt-15 tracking-wider">
            RESTAURANT
          </p>
          <br />
          <p className="font-bold text-xl">
            MAKING THE DELICIOUS PREMIUM FOOD SINCE 1992
          </p>
          <CircleArrowDown className="mt-5 animate-bounce" />
        </div>
      </div>

      <div className="flex justify-center items-center bg-amber-50 gap-5 ">
        <div className="flex mt-20 gap-5">
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food4}`}
            alt="Food Image"
          />
          <img
            className="w-80 h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
            src={`${Food5}`}
            alt="Food Image"
          />
        </div>
        {/* card */}
        <div className="mb-10 relative right-10 ">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-10 text-center mt-30 ">
            {/* Header */}
            <div className="mb-8">
              <h2
                className="text-2xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi,curshive" }}
              >
                Discover
              </h2>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
                OUR MENU
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

            <button className="text-amber-500 hover:text-amber-700 font-bold text-2xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 pb-15">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-amber-50 pt-20">
        <div className="mb-10 relative left-23 bottom-8 z-50">
          <div className="max-w-md h-125 mx-auto bg-white rounded-lg shadow-lg p-10 text-center mt-30 ">
            {/* Header */}
            <div className="mb-8">
              <h2
                className="text-5xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi,curshive" }}
              >
                Visit Our
              </h2>
              <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
                RESTAURANT
              </h1>
            </div>

            {/* Decorative Element */}
            <div className="mb-8">
              <div className="flex justify-center ">
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

            <a
              href="/contact_us"
              className="text-amber-500 hover:text-amber-700 font-bold text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 pb-15"
            >
              Get Locations
            </a>
          </div>
        </div>
        {/* grid images */}
        <div className="grid grid-cols-2 w-130 m-18">
          <div className="col-span-2 p-3 grid grid-cols-4 gap-3">
            <img
              className="h-66 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res1}`}
              alt=""
            />
            <img
              className="h-66 w-full col-span-2 grid-cols-1 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res2}`}
              alt=""
            />
            <img
              className="h-66 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res3}`}
              alt=""
            />
          </div>
          <div className="col-span-2 grid grid-cols-4 gap-3">
            <img
              className="h-60 col-span-2 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res4}`}
              alt=""
            />
            <img
              className="h-60 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res5}`}
              alt=""
            />
            <img
              className="h-60 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105"
              src={`${res6}`}
              alt=""
            />
          </div>
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
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h2
              className="text-4xl md:text-5xl font-light mb-2 -ml-15 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Our
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              MENUS
            </h1>
          </div>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </>
  );
};

export default HeroSection;
