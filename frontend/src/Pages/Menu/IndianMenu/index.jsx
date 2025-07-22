import React from "react";
import Navbar from "../../../Components/Navbar";
import Banner from "../../../assets/indian.jpg";
import Food5 from "../../../assets/food5.jpg";
import Food6 from "../../../assets/food6.jpg";
import Food7 from "../../../assets/biriyani.jpg";
import Food12 from "../../../assets/food12.jpg";
import Food13 from "../../../assets/food13.jpg";
import HomeMenus from "../../../Components/HomeMenus";
import Footer from "../../../Components/Footer";

const dishes = [
  {
    name: "Paneer Tikka",
    description: "Paneer / Spices / Yogurt",
    img: `${Food5}`,
    price: "₹199",
  },
  {
    name: "Chole Bhature",
    description: "Chickpeas / Fried Bread",
    img: `${Food13}`,
    price: "₹150",
  },
  {
    name: "Butter Chicken",
    description: "Chicken / Butter / Cream",
    img: `${Food12}`,
    price: "₹350",
  },
  {
    name: "Biryani",
    description: "Rice / Spices / Chicken",
    img: `${Food6}`,
    price: "₹300",
  },
];

const Indian = () => {
  return (
    <>
      <div className="relative w-full h-120 overflow-hidden ">
        {/* Background Image */}
        <div className="absolute  inset-0 bg-black-500">
          <img
            src={`${Banner}`}
            alt="Delicious soup with garnish"
            className="w-screen h-full object-cover bg-black-500"
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
              Check out
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight italic">
              Our Indian Delicacy
            </h1>
          </div>
        </div>
      </div>
      {/* signature dish section */}
      <div className="items-center my-8 sm:my-13 px-4 sm:px-0">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center underline underline-offset-4 pb-3 sm:pb-5">
          Signature Dishes
        </h1>
        <div className="max-w-4xl lg:max-w-6xl mx-auto p-2 sm:p-4">
          <ul className="space-y-3 sm:space-y-4">
            {dishes.map((dish, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-3 sm:pb-2 gap-3 sm:gap-0"
              >
                <img
                  src={`${dish.img}`}
                  className="h-12 w-12 sm:h-15 sm:w-15 rounded-full mx-auto sm:mx-0 flex-shrink-0"
                  alt="Dish Image"
                />
                <div className="text-center sm:text-left flex-grow">
                  <h2 className="text-base sm:text-lg font-semibold">
                    {dish.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600">
                    {dish.description}{" "}
                    <span className="hidden sm:inline">
                      ...............................................................................................
                    </span>
                  </p>
                </div>
                <span className="font-bold text-base sm:text-lg text-center sm:text-right flex-shrink-0">
                  {dish.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* chef special */}
      <div className="relative w-full h-96 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={`${Food7}`}
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
              Chef
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              RECOMMENDED
            </h1>
          </div>
        </div>

        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
      <HomeMenus />
      <Footer />
    </>
  );
};

export default Indian;
