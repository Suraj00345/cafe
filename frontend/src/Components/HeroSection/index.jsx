import React, { useEffect, useRef, useState } from "react";
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
import VerticalCarousel from "../../Functions/Carosel";

const HeroSection = () => {
  const [isDiscoverVisible, setIsDiscoverVisible] = useState(false);
  const [isVisitVisible, setIsVisitVisible] = useState(false);
  const discoverRef = useRef(null);
  const visitRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === discoverRef.current && entry.isIntersecting) {
          setIsDiscoverVisible(true);
        }
        if (entry.target === visitRef.current && entry.isIntersecting) {
          setIsVisitVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    if (discoverRef.current) {
      observer.observe(discoverRef.current);
    }
    if (visitRef.current) {
      observer.observe(visitRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <VerticalCarousel />
        </div>

        {/* Overlay for better text readability */}
        <div className="absolute left-0 right-0 z-20">
          <Navbar />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div
            className="text-white text-center"
            style={{ fontFamily: "MyCustomFontLato" }}
          >
            <img
              src={`${Flower}`}
              alt="Flower Image"
              className="mx-auto mb-4  sm:w-20 sm:h-20 md:w-10 md:h-10"
            />
            <p className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              THE REX
            </p>
            <p className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-2 tracking-wider">
              RESTAURANT
            </p>
            <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mt-6 px-4 max-w-2xl mx-auto">
              SERVING THE DELICIOUS PREMIUM FOOD SINCE 1992
            </p>
            <CircleArrowDown className="mt-6 md:mt-10 animate-bounce mx-auto  md:w-10 md:h-8" />
          </div>
        </div>
      </div>

      {/* Discover Menus Section */}
      <div className="bg-amber-50 px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Images */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 w-full lg:w-auto">
              <img
                className="w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Food4}`}
                alt="Food Image"
              />
              <img
                className="w-full sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Food5}`}
                alt="Food Image"
              />
            </div>

            {/* Card with Animation */}
            <div
              ref={discoverRef}
              className={`w-full max-w-sm lg:relative lg:right-15 transform transition-all duration-1000 ease-out ${
                isDiscoverVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-12 sm:p-8 lg:p-10 text-center">
                {/* Header */}
                <div className="mb-6 lg:mb-8">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-light text-amber-600 mb-2"
                    style={{ fontFamily: "Kristi,cursive" }}
                  >
                    Discover
                  </h2>
                  <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold text-gray-900 tracking-tight">
                    OUR MENU
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
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base mb-6 lg:mb-8">
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

      {/* Visit Restaurant Section */}
      <div className="bg-amber-50 px-4 sm:px-6 lg:px-8 py-10 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Card with Animation */}
            <div
              ref={visitRef}
              className={`w-full max-w-sm lg:max-w-md order-2 lg:order-1 lg:relative lg:left-15 z-50 transform transition-all duration-1000 ease-out ${
                isVisitVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white lg:h-130 rounded-lg lg:py-20  shadow-lg p-6 sm:p-8 lg:p-10 text-center">
                {/* Header */}
                <div className="mb-6 lg:mb-8">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-4xl font-light text-amber-600 mb-2"
                    style={{ fontFamily: "Kristi,cursive" }}
                  >
                    Visit Our
                  </h2>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                    RESTAURANT
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
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base mb-6 lg:mb-8">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
                </p>

                {/* Call to Action */}
                <a
                  href="/contact_us"
                  className="text-amber-500 hover:text-amber-700 font-bold text-lg sm:text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 inline-block"
                >
                  Get Locations
                </a>
              </div>
            </div>

            {/* Grid Images */}
            <div className="w-full lg:flex-1 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                {/* First Row */}
                <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  <img
                    className="h-48 sm:h-56 lg:h-66 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res1}`}
                    alt="Restaurant interior"
                  />
                  <img
                    className="h-48 sm:h-56 lg:h-66 w-full sm:col-span-1 lg:col-span-2 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res2}`}
                    alt="Restaurant interior"
                  />
                  <img
                    className="h-48 sm:h-56 lg:h-66 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res3}`}
                    alt="Restaurant interior"
                  />
                </div>

                {/* Second Row */}
                <div className="sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
                  <img
                    className="h-48 sm:h-56 lg:h-60 w-full sm:col-span-1 lg:col-span-2 rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res4}`}
                    alt="Restaurant interior"
                  />
                  <img
                    className="h-48 sm:h-56 lg:h-60 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res5}`}
                    alt="Restaurant interior"
                  />
                  <img
                    className="h-48 sm:h-56 lg:h-60 w-full rounded-lg transition-transform duration-700 ease-in-out hover:scale-105 object-cover"
                    src={`${res6}`}
                    alt="Restaurant interior"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menus Section */}
      <div className="relative w-full h-64 sm:h-50 md:h-96 lg:h-[370px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Food6}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-2 text-amber-400"
              style={{ fontFamily: "MyCustomFontLato" }}
            >
              Our
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              MENUS
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
