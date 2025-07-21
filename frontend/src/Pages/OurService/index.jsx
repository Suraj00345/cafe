import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar";
import Banner4 from "../../assets/banner4.jpg";
import Food5 from "../../assets/food5.jpg";
import Food4 from "../../assets/food4.jpg";
import Food6 from "../../assets/res2.jpg";
import Flower2 from "../../assets/flower2.png";
import Flower4 from "../../assets/flower4.png";
import Footer from "../../Components/Footer";
import GridImages from "../../Components/GridImages";
import CountUp from "../../Functions/CountUp";

const OurService = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing after animation triggers
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the card is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the card is fully in view
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

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
              Our
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              SERVICES
            </h1>
          </div>
        </div>
      </div>

      {/* food delivery - CENTERED */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:gap-10 pb-10 lg:pb-18 px-4 lg:px-18 max-w-7xl mx-auto">
        {/* Animated Card */}
        <div
          ref={cardRef}
          className={`mb-10 lg:mb-0 z-50 w-full max-w-md lg:max-w-sm transform transition-all lg:-mr-15 duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="mx-auto bg-white relative top-7 rounded-lg shadow-lg p-6 sm:p-8 lg:pb-5 text-center mt-10 lg:mt-30">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-light text-amber-600 mb-2"
                style={{ fontFamily: "Kristi, cursive" }}
              >
                Food
              </h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tighter">
                DELIVERY
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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </p>

            {/* Call to Action */}
            <a
              href="/contact_us"
              className="text-amber-500 hover:text-amber-700 font-bold text-lg sm:text-xl lg:text-xl tracking-wide underline decoration-2 underline-offset-8 transition-colors duration-200 inline-block pb-4 lg:pb-15"
            >
              Order Now
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="flex flex-col sm:flex-row mt-0 lg:mt-20 gap-3 sm:gap-5 w-full max-w-2xl lg:max-w-none">
          <img
            className="w-full sm:w-60 lg:w-80 h-60 sm:h-80 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
            src={Food4}
            alt="Food Image"
          />
          <img
            className="w-full sm:w-60 lg:w-80 h-60 sm:h-80 lg:h-115 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 object-cover"
            src={Food5}
            alt="Restaurant Image"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-evenly items-center pt-8 sm:pt-12 lg:pt-15 py-12 sm:py-16 lg:py-25 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <CountUp
              from={0}
              to={25}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </h1>
          <p className="font-normal pt-2 text-xs sm:text-sm lg:text-xs xl:text-sm tracking-widest max-w-32 sm:max-w-none mx-auto">
            YEARS OF EXPERIENCE
          </p>
        </div>
        <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <CountUp
              from={0}
              to={12}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </h1>
          <p className="font-normal pt-2 text-xs sm:text-sm lg:text-xs xl:text-sm tracking-widest max-w-32 sm:max-w-none mx-auto">
            AWARDS WINNING CHEFS
          </p>
        </div>
        <div className="text-center mb-8 sm:mb-0 w-full sm:w-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <CountUp
              from={0}
              to={125}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </h1>
          <p className="font-normal pt-2 text-xs sm:text-sm lg:text-xs xl:text-sm tracking-widest max-w-32 sm:max-w-none mx-auto">
            DISHES & MENUS
          </p>
        </div>
        <div className="text-center w-full sm:w-auto">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
            <CountUp
              from={0}
              to={15}
              separator=","
              direction="up"
              duration={1}
              className="count-up-text"
            />
          </h1>
          <p className="font-normal pt-2 text-xs sm:text-sm lg:text-xs xl:text-sm tracking-widest max-w-32 sm:max-w-none mx-auto">
            RESTAURANT BRANCHES
          </p>
        </div>
      </div>

      {/* Events */}
      <div className="relative w-full h-64 sm:mr-10 sm:h-80 md:h-96 lg:h-106 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Food6}`}
            alt="Delicious soup with garnish"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Responsive content card */}
        <div
          className="absolute 
    top-4 right-4 w-80 h-56
    sm:top-6 sm:right-6 sm:w-96 sm:h-64
    md:top-8 md:right-8 md:w-100 md:h-80
    lg:top-0 lg:right-40 lg:w-100 lg:h-104
    rounded-md bg-neutral-950 opacity-90 z-10 text-amber-50 
    flex flex-col items-center justify-center px-4 py-4
    sm:px-6 sm:py-6
    md:px-8 md:py-8
    lg:px-0 lg:py-0"
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:pt-2 text-amber-600 italic">
            Event
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            CATERING
          </p>

          <img
            className="items-center h-4 sm:h-5 md:h-6 opacity-40 m-2 sm:m-3 md:m-4"
            src={`${Flower4}`}
            alt=""
          />

          <p className="text-xs sm:text-sm text-center pb-4 sm:pb-6 md:pb-8 lg:pb-10 px-2">
            <span className="hidden sm:inline">
              Sed ut perspiciatis unde omnis iste natus error sit <br />
              voluptatem accusantium doloremque laudantium, <br />
              totam rem aperiam, eaque ipsa quae ab illo <br />
              inventore veritatis et quasi.
            </span>
            <span className="sm:hidden">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi.
            </span>
          </p>

          <a
            href="/contact_us"
            className="underline underline-offset-4 text-amber-500 font-semibold tracking-wider text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
      <GridImages />
      <Footer />
    </>
  );
};

export default OurService;
