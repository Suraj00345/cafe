import React, { useEffect, useRef, useState } from "react";
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
  const [isStoryVisible, setIsStoryVisible] = useState(false);
  const [isVisitVisible, setIsVisitVisible] = useState(false);
  const storyRef = useRef(null);
  const visitRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target === storyRef.current && entry.isIntersecting) {
          setIsStoryVisible(true);
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

    if (storyRef.current) {
      observer.observe(storyRef.current);
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
        <div className="absolute  left-0 right-0 z-100">
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
      <div className="bg-amber-50 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Images */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full xl:w-auto order-2 xl:order-1">
              <img
                className="w-full sm:w-1/2 xl:w-64 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Food1}`}
                alt="Food Image"
              />
              <img
                className="w-full sm:w-1/2 xl:w-64 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={`${Res1}`}
                alt="Restaurant Image"
              />
            </div>

            {/* Card with Animation */}
            <div
              ref={storyRef}
              className={`w-full max-w-md lg:-ml-15 mt-10 xl:max-w-sm order-1 xl:order-2 transform transition-all duration-1000 ease-out ${
                isStoryVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
                {/* Header */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-amber-600 mb-1 sm:mb-2"
                    style={{ fontFamily: "Kristi,cursive" }}
                  >
                    About
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 tracking-tight">
                    OUR STORY
                  </h1>
                </div>

                {/* Decorative Element */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <div className="flex justify-center">
                    <img
                      className="opacity-20 h-4 sm:h-5 md:h-6 lg:h-7"
                      src={`${Flower2}`}
                      alt=""
                    />
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base lg:text-base mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
                </p>

                {/* Call to Action */}
                <button className="text-amber-500 hover:text-amber-700 font-bold text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Our Restaurant Section */}
      <div className="bg-amber-50 px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16 xl:py-18">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            {/* Card with Animation */}
            <div
              ref={visitRef}
              className={`w-full lg:-mr-15 mt-10 z-50 max-w-md xl:max-w-sm order-1 transform transition-all duration-1000 ease-out ${
                isVisitVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 xl:p-12 text-center">
                {/* Header */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-amber-600 mb-1 sm:mb-2"
                    style={{ fontFamily: "Kristi, cursive" }}
                  >
                    Visit Our
                  </h2>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tighter">
                    RESTAURANT
                  </h1>
                </div>

                {/* Decorative Element */}
                <div className="mb-4 sm:mb-6 lg:mb-8">
                  <div className="flex justify-center">
                    <img
                      className="opacity-20 h-4 sm:h-5 md:h-6 lg:h-7"
                      src={Flower2}
                      alt=""
                    />
                  </div>
                </div>

                {/* Content */}
                <p className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base lg:text-base mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
                </p>

                {/* Call to Action */}
                <a
                  href="/contact_us"
                  className="text-amber-500 hover:text-amber-700 font-bold text-base sm:text-lg md:text-xl lg:text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 inline-block"
                >
                  Get Locations
                </a>
              </div>
            </div>

            {/* Images */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 w-full xl:w-auto order-2">
              <img
                className="w-full sm:w-1/2 xl:w-64 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={Food9}
                alt="Food Image"
              />
              <img
                className="w-full sm:w-1/2 xl:w-64 2xl:w-80 h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96 2xl:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
                src={Res6}
                alt="Restaurant Image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* customer testimonials */}
      <div
        className="w-full h-96 sm:h-120 md:h-140 lg:h-145 bg-cover bg-center rounded-2xl relative overflow-hidden"
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Et dicta possimus, magni voluptatum molestias explicabo <br />{" "}
              voluptatibus voluptatem tempora esse libero, cum recusandae.
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
